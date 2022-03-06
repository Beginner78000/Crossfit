const Joi = require('joi');

module.exports = Joi.object({
    label: Joi.string(),
})
    .min(1)
    .required();
