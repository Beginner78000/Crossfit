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
     * Récupère par son id
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
};
