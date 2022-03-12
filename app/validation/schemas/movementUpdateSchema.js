const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    visual_name: Joi.string(),
    movement_url: Joi.string(),
})
    .min(1)
    .required();
