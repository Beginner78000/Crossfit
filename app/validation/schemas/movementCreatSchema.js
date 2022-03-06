const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string()
        .pattern(/^[^-][a-zA-Z0-9-]+[^-]$/)
        .required(),
    description: Joi.string().required(),
    category_id: Joi.number().integer().min(1).required(),
    visual_name: Joi.string(),
    movement_url: Joi.string(),
}).required();
