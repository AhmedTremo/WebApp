const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            username: Joi.string().min(3).max(30).required(),
        })
        return createSchema.validate(request)
    },
    updateValidation: request => {
        const updateSchema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string(),
            user: Joi.string().min(3).max(30),
        })

        return updateSchema.validate(request)
    }, 
    registerValidation: request => {
        const registerSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            username: Joi.string().min(3).max(30).required(),
        })

        return registerSchema.validate(request)
    },

    loginValidation: request => {
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
        return loginSchema.validate(request)
    }
}