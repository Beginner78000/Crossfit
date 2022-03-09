const client = require('../config/db');
const categoryDataMapper = require('./category');
const { ApiError } = require('../helpers/errorHandler');

/**
 * @typedef {object} Movement
 * @property {number} id - Indentifiant unique, Pk de la table
 * @property {string} name - Nom du mouvement
 * @property {string} description - Description du mouvement
 * @property {string} visual_name - image du mouvement
 * @property {string} movement_url - URL d'accès à la vidéo movement (pour le SEO)
 * @property {number} categoryId - Id de la catégorie à laquelle est rattaché le movement
 */

/**
 * @typedef {object} InputMovement
 * @property {string} name - Nom du mouvement
 * @property {string} description - Description du mouvement
 * @property {string} visual_name - image du mouvement
 * @property {string} movement_url - URL d'accès à la vidéo movement (pour le SEO)
 * @property {number} categoryId - Id de la catégorie à laquelle est rattaché le movement
 */

module.exports = {
    /**
     * Récupère tout sans filtre ni ordre
     * @returns {Movement[]} - Tous les mouvements dans la base de donnée
     */
    async findAll() {
        const result = await client.query('SELECT * FROM movement_with_category');
        return result.rows;
    },

    /**
     * Récupère par sont id
     * @param {number} movementId - L'id du mouvement souhaité
     * @returns {(Movement|undefined)} - Le Mouvement souhaité ou undefined si aucun Mouvement à cet id
     */
    async findByPk(movementId) {
        const result = await client.query('SELECT * FROM movement_with_category WHERE id = $1', [
            movementId,
        ]);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },

    /**
     * Ajoute dans la base de données
     * @param {InputMovement} movement - Les données à insérer
     * @returns {Movement} - Le Movement inséré
     */
    async insert(movement) {
        const savedMovement = await client.query(
            `
        INSERT INTO movement
        (name, description, visual_name, movement_url, category_id) VALUES
        ($1, $2, $3, $4, $5) RETURNING *
      `,
            [
                movement.name,
                movement.description,
                movement.visual_name,
                movement.movement_url,
                movement.category_id,
            ]
        );

        return savedMovement.rows[0];
    },

    /**
     * Modifie dans la base de données
     * @param {number} id - L'id à modifier
     * @param {InputMovement} movement - Les données à modifier
     * @returns {Movement} - Le Movement modifié
     */
    async update(id, movement) {
        const fields = Object.keys(movement).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(movement);

        const savedMovement = await client.query(
            `
                UPDATE movement SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id]
        );

        return savedMovement.rows[0];
    },

    /**
     * Supprime de la base de données
     * @param {number} id - L'id à supprimer
     * @returns {boolean} - Le résultat de la suppression
     */
    async delete(id) {
        const result = await client.query('DELETE FROM movement WHERE id = $1', [id]);
        // Soit il a supprimer un enregistrement et
        // le rowcount est égal à 1 (truthy)soit non et il est égal a 0 (falsy)
        // On cast le truthy/falsy en vrai booléen
        return !!result.rowCount;
    },

    /**
     * Vérifie si un mouvement existe déjà avec le name
     * @param {object} inputData - Les données fourni par le client
     * @param {number} movementId - L'identifiant du movement (optionnel)
     * @returns {(Movement|undefined)} - Le Movement existant
     * ou undefined si aucun Movement avec ces données
     */
    async isUnique(inputData, movementId) {
        const fields = [];
        const values = [];
        // On récupère la liste des infos envoyés
        Object.entries(inputData).forEach(([key, value], index) => {
            // On ne garde que les infos qui sont censées être unique
            if (['name'].includes(key)) {
                // On génère le filtre avec ces infos
                fields.push(`"${key}" = $${index + 1}`);
                values.push(value);
            }
        });

        const preparedQuery = {
            text: `SELECT * FROM movement_with_category WHERE (${fields.join(' OR ')})`,
            values,
        };

        // Si l'id est fourni on exclu l'enregistrement qui lui correspond
        if (movementId) {
            preparedQuery.text += ` AND id <> $${values.length + 1}`;
            preparedQuery.values.push(movementId);
        }
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },

    /**
     * Récupère par l'id de category
     * @param {number} categoryId - L'id de la Category
     * @returns {Movement[]} - La liste des Movements marqué avec cette Category dans la BDD
     */
    async findByCategoryId(categoryId) {
        // On veut d'abord vérifié que la category demandé existe
        const category = await categoryDataMapper.findByPk(categoryId);
        if (!category) {
            // Elle n'existe pas, je veux le signaler au controller
            // mais un return ne semble pas adapté.
            // Je vais donc "lancer" une exception que mon controller va pouvoir
            // "attraper" et traiter
            throw new ApiError('Category not found', { statusCode: 404 });
        }

        const result = await client.query(
            'SELECT * FROM movement_with_category WHERE category_id = $1',
            [categoryId]
        );
        return result.rows;
    },
};
