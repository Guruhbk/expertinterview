import joi from 'joi';

export const usernameValidator = joi.object({
    user: joi.string()
    .pattern(/^[A-Za-z][A-Za-z0-9-]*$/)
    .messages({
        "string.pattern.base": "Username must start with a letter and can only contain letters, numbers, and -"
      })
})