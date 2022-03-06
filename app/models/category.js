const client = require('../config/db');

/**
 * @typedef {object} Category
 * @property {number} id - Identifiant unique Pk de la table
 * @property {string} label - Le nom affichable de la catégorie
 */

/**
 * @typedef {Object} InputCategory
 * @property {string} label - Le nom affichable de la catégorie
 */

module.exports = {
    /**
     * Récupère tout sans filtre ni ordre
     * @returns {Category[]} - Tous les categories dans la base de donnée
     */
    async findAll() {
        const result = await client.query('SELECT * FROM category');
        return result.rows;
    },

    /**
     * Récupère par sont id
     * @param {number} categoryId - L'id de la categorie souhaité
     * @returns {(Category|undefined)} -
     * La categorie souhaité ou undefined si aucune categorie à cet id
     */
    async findByPk(categoryId) {
        const result = await client.query('SELECT * FROM category WHERE id = $1', [categoryId]);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
    },

    /**
     * Ajoute dans la base de données
     * @param {InputCategory} category - Les données à insérer
     * @returns {Category} - La categorie insérer
     */
    async insert(category) {
        const savedCategory = await client.query(
            `
                INSERT INTO category.label 
                VALUES($1) 
                RETURNING *
            `,
            [category.label]
        );

        return savedCategory.rows[0];
    },

    /**
     * Modifie dans la base de données
     * @param {number} id - L'id à modifier
     * @param {InputCategory} category - Les données à modifier
     * @returns {Category} - Le Post modifié
     */
    async update(id, category) {
        const fields = Object.keys(category).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(category);

        const savedCategory = await client.query(
            `
                UPDATE category SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id]
        );

        return savedCategory.rows[0];
    },

    /**
     * Supprime de la base de données
     * @param {number} id - L'id à supprimer
     * @returns {boolean} - Le résultat de la suppression
     */
    async delete(id) {
        const result = await client.query('DELETE FROM category WHERE id = $1', [id]);
        // Soit il a supprimer un enregistrement et
        // le rowcount est égal à 1 (truthy)soit non et il est égal a 0 (falsy)
        // On cast le truthy/falsy en vrai booléen
        return !!result.rowCount;
    },

    /**
     * Vérifie si une catégorie existe déjà avec le titre ou le slug
     * @param {object} inputData - Les données fourni par le client
     * @param {number} categoryId - L'identifiant de la catégorie (optionnel)
     * @returns {(Category|undefined)} - La catégorie existante
     * ou undefined si aucune categorie avec ces données
     */
    async isUnique(inputData, categoryId) {
        const fields = [];
        const values = [];
        // On récupère la liste des infos envoyés
        Object.entries(inputData).forEach(([key, value], index) => {
            // On ne garde que les infos qui sont censées être unique
            if (['label'].includes(key)) {
                // On génère le filtre avec ces infos
                fields.push(`"${key}" = $${index + 1}`);
                values.push(value);
            }
        });

        const preparedQuery = {
            text: `SELECT * FROM category WHERE (${fields.join(' OR ')})`,
            values,
        };

        // Si l'id est fourni on exclu l'enregistrement qui lui correspond
        if (categoryId) {
            preparedQuery.text += ` AND id <> $${values.length + 1}`;
            preparedQuery.values.push(categoryId);
        }
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },
};
