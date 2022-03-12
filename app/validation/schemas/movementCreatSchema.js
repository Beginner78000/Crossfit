const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category_id: Joi.number().integer().min(1).required(),
    visual_name: Joi.string().required(),
    movement_url: Joi.string().required(),
}).required();
