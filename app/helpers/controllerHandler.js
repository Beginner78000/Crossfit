const ApiError = require('../errors/apiErrors');
/**
 * Controller wrapper to manage errors
 * @param {object} controller a controller to execute inside a try… catch… block
 * @returns {object} a controller as middleware function
 */
module.exports = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (err) {
        next (new ApiError(err.message, {statusCode:500}));
    }
};
