const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string().required(),
    mobility: Joi.string().required(),
    warm_up: Joi.string().required(),
    skills: Joi.string().required(),
    workout: Joi.string().required(),
    category_id: Joi.number().integer().min(1).required(),
}).required();
