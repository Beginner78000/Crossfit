const debug = require('debug')('Cadex');
const categoryDataMapper = require('../models/category');

/**
 * Module chargé de récupérer 4 chunks de phrase et de constituer
 * un cadex à partir de ces chunks
 */
const cadex = {
    /**
     * Returns all category
     * @returns {string} All category from data source
     */
    async getAll(_, res) {
        const categories = await categoryDataMapper.findAll();
        return res.json(categories);
    },
    /**
     * Returns one category
     * @returns {string} A category from data source
     */
    async getOne(req, res) {
        const category = await categoryDataMapper.findByPk(req.params.id);
        return res.json(category);
    },

    /**
     * Create a category
     * @returns {string} A new category from data source
     */
    async create(req, res) {
        const savedCategory = await categoryDataMapper.insert(req.body);
        return res.json(savedCategory);
    },
    /**
     * Update a category
     * @returns {string} a category apdated from data source
     */
    async update(req, res) {
        const savedCategory = await categoryDataMapper.update(req.params.id, req.body);
        return res.json(savedCategory);
    },

     /**
     * Delete a category
     * @returns {string} A confirmation of the delete from data source
     */
    async delete(req, res) {
        await categoryDataMapper.delete(req.params.id);
        return res.status(204).json();
    },
};

// on exporte la fonction randomIndex non pas pour l'utiliser
// ailleurs dans l'appli mais pour pouvoir la require dans notre fichier de test
module.exports = { cadex };
