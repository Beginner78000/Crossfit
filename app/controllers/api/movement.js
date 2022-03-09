const movementDataMapper = require('../../models/movement');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
    /**
     * Movement controller to get all records.
     * ExpressMiddleware signature
     * @param {object} _ Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAll(_, res) {
        const movements = await movementDataMapper.findAll();
        return res.json(movements);
    },

    /**
     * Movement controller to get a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getOne(req, res) {
        const movement = await movementDataMapper.findByPk(req.params.id);

        if (!movement) {
            throw new ApiError('Movement not found', { statusCode: 404 });
        }

        return res.json(movement);
    },

    /**
     * Movement controller to get a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getByCategoryId(req, res) {
        const categoryMovements = await movementDataMapper.findByCategoryId(req.params.id);
        return res.json(categoryMovements);
    },

    /**
     * Movement controller to create a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async create(req, res) {
        const movement = await movementDataMapper.findByPk(req.params.id);
        if (movement) {
            let field;
            if (movement.name === req.body.name) {
                field = 'name';
            }
            throw new ApiError(`Movement already exists with this ${field}`, { statusCode: 400 });
        }

        const savedMovement = await movementDataMapper.insert(req.body);
        return res.json(savedMovement);
    },

    /**
     * Movement controller to update a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async update(req, res) {
        const movement = await movementDataMapper.findByPk(req.params.id);
        if (!movement) {
            throw new ApiError('This movement does not exists', { statusCode: 404 });
        }

        const savedMovement = await movementDataMapper.update(req.params.id, req.body);
        return res.json(savedMovement);
    },

    /**
     * Movement controller to delete a record.
     * ExpressMiddleware signature
     * @param {object} req Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async delete(req, res) {
        const movement = await movementDataMapper.findByPk(req.params.id);
        if (!movement) {
            throw new ApiError('This movement does not exists', { statusCode: 404 });
        }

        await movementDataMapper.delete(req.params.id);
        return res.status(204).json();
    },
};
