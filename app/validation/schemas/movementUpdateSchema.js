const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().pattern(/^[^-][a-zA-Z0-9-]+[^-]$/),
    description: Joi.string(),
    category_id: Joi.number().integer().min(1),
    visual_name: Joi.string(),
    movement_url: Joi.string(),
})
    .min(1)
    .required();
