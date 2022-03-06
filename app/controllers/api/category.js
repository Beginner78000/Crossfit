const categoryDataMapper = require('../../models/category');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
    /**
     * Category controller to get all categories.
     * ExpressMiddleware signature
     * @param {object} _ Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAll(_, res) {
        const categories = await categoryDataMapper.findAll();
        return res.json(categories);
    },

    /**
     * Category controller to get a category.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getOne(req, res) {
        const post = await categoryDataMapper.findByPk(req.params.id);

        if (!post) {
            throw new ApiError('Category not found', { statusCode: 404 });
        }

        return res.json(post);
    },

    /**
     * Category controller to create a category.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async create(req, res) {
        const post = await categoryDataMapper.isUnique(req.body);
        if (post) {
            let field;
            if (post.label === req.body.label) {
                field = 'label';
            } else {
                field = 'slug';
            }
            throw new ApiError(`Category already exists with this ${field}`, { statusCode: 400 });
        }

        const savedPost = await categoryDataMapper.insert(req.body);
        return res.json(savedPost);
    },

    /**
     * Category controller to update a category.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async update(req, res) {
        const category = await categoryDataMapper.findByPk(req.params.id);
        if (!category) {
            throw new ApiError('This category does not exists', { statusCode: 404 });
        }

        if (req.body.label) {
            const existingCategory = await categoryDataMapper.isUnique(req.body, req.params.id);
            if (existingCategory) {
                let field;
                if (existingCategory.label === req.body.label) {
                    field = 'label';
                } else {
                    field = 'slug';
                }
                throw new ApiError(`Other category already exists with this ${field}`, {
                    statusCode: 400,
                });
            }
        }

        const savedPost = await categoryDataMapper.update(req.params.id, req.body);
        return res.json(savedPost);
    },

    /**
     * Category controller to delete a category.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async delete(req, res) {
        const category = await categoryDataMapper.findByPk(req.params.id);
        if (!category) {
            throw new ApiError('This category does not exists', { statusCode: 404 });
        }

        await categoryDataMapper.delete(req.params.id);
        return res.status(204).json();
    },
};
