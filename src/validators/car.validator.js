import Joi from 'joi';

const carValidator = Joi.object({
    model:Joi.string().min(1).max(20).required().messages({
        'string.empty': "UGH",
        'string.min':'MIN',
        'string.max':'MAX'
    }),
    price:Joi.number().min(1).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}