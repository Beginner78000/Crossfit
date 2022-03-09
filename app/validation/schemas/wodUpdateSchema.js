const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string(),
    mobility: Joi.string(),
    warm_up: Joi.string(),
    skills: Joi.string(),
    workout: Joi.string(),
})
    .min(1)
    .required();
