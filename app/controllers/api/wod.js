const wodDataMapper = require('../../models/wod');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
    /**
     * Training controller to get all records.
     * ExpressMiddleware signature
     * @param {object} _ Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAll(_, res) {
        const trainings = await wodDataMapper.findAll();
        return res.json(trainings);
    },

    /**
     * Training controller to get a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getOne(req, res) {
        const training = await wodDataMapper.findByPk(req.params.id);

        if (!training) {
            throw new ApiError('WOD not found', { statusCode: 404 });
        }

        return res.json(training);
    },

    /**
     * Training controller to create a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async create(req, res) {
        const training = await wodDataMapper.findByPk(req.params.id);
        if (training) {
            let field;
            if (training.title === req.body.title) {
                field = 'title';
            }
            throw new ApiError(`WOD already exists with this ${field}`, { statusCode: 400 });
        }

        const savedTraining = await wodDataMapper.insert(req.body);
        return res.json(savedTraining);
    },

    /**
     * Training controller to update a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async update(req, res) {
        const training = await wodDataMapper.findByPk(req.params.id);
        if (!training) {
            throw new ApiError('This WOD does not exists', { statusCode: 404 });
        }

        const savedTraining = await wodDataMapper.update(req.params.id, req.body);
        return res.json(savedTraining);
    },

    /**
     * Training controller to delete a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async delete(req, res) {
        const training = await wodDataMapper.findByPk(req.params.id);
        if (!training) {
            throw new ApiError('This WOD does not exists', { statusCode: 404 });
        }

        await wodDataMapper.delete(req.params.id);
        return res.status(204).json();
    },
};
