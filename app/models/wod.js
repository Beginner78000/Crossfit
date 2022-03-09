const client = require('../config/db');
const { ApiError } = require('../helpers/errorHandler');

/**
 * @typedef {object} WOD
 * @property {number} id - Indentifiant unique, Pk de la table
 * @property {string} title - Nom du training
 * @property {string} mobility - Mouvement de mobilité
 * @property {string} warm_up - échauffement
 * @property {string} skills - test des mouvements du workout
 * @property {string} workout - entraînement du jour (for time ou EMOM ...)
 */

/**
 * @typedef {object} InputWod
 * @property {number} id - Indentifiant unique, Pk de la table
 * @property {string} title - Nom du training
 * @property {string} mobility - Mouvement de mobilité
 * @property {string} warm_up - échauffement
 * @property {string} skills - test des mouvements du workout
 * @property {string} workout - entraînement du jour (for time ou EMOM ...)
 */

module.exports = {
    /**
     * Récupère tout sans filtre ni ordre
     * @returns {WOD[]} - Tous les training dans la base de donnée
     */
    async findAll() {
        const result = await client.query('SELECT * FROM training');
        return result.rows;
    },

    /**
     * Récupère par sont id
     * @param {number} trainingId - L'id du training souhaité
     * @returns {(WOD|undefined)} - Le training souhaité ou undefined si aucun training à cet id
     */
    async findByPk(trainingId) {
        const result = await client.query('SELECT * FROM training WHERE id = $1', [trainingId]);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },

    /**
     * Ajoute dans la base de données
     * @param {InputWod} wod - Les données à insérer
     * @returns {WOD} - Le training inséré
     */
    async insert(training) {
        const savedTraining = await client.query(
            `
        INSERT INTO training
        (title, mobility, warm_up, skills, workout) VALUES
        ($1, $2, $3, $4, $5) RETURNING *
      `,
            [training.title, training.mobility, training.warm_up, training.skills, training.workout]
        );

        return savedTraining.rows[0];
    },

    /**
     * Modifie dans la base de données
     * @param {number} id - L'id à modifier
     * @param {InputWod} wod - Les données à modifier
     * @returns {WOD} - Le training modifié
     */
    async update(id, training) {
        const fields = Object.keys(training).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(training);

        const savedTraining = await client.query(
            `
                UPDATE training SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id]
        );

        return savedTraining.rows[0];
    },

    /**
     * Supprime de la base de données
     * @param {number} id - L'id à supprimer
     * @returns {boolean} - Le résultat de la suppression
     */
    async delete(id) {
        const result = await client.query('DELETE FROM training WHERE id = $1', [id]);
        // Soit il a supprimer un enregistrement et
        // le rowcount est égal à 1 (truthy)soit non et il est égal a 0 (falsy)
        // On cast le truthy/falsy en vrai booléen
        return !!result.rowCount;
    },
};
