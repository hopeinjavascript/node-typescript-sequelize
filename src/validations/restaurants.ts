import Joi from 'joi'
import { NextFunction, Response, Request } from 'express';

export const createRestaurantSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    vegOnly: Joi.boolean().required(),
    cost: Joi.string().required(),
    cuisineTypes: Joi.array().items(Joi.string()).min(1).required(),
    isOpen: Joi.boolean().required()
});

export const updateRestaurantSchema = Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    vegOnly: Joi.boolean(),
    cost: Joi.string(),
    cuisineTypes: Joi.array().items(Joi.string()).min(1),
    isOpen: Joi.boolean()
}).min(1);

export function validateCreateRestaurantSchema(req: Request, res: Response, next: NextFunction) {
    const { error, value } = createRestaurantSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        next(error)
    } 

    console.log({joiValue: value})
    next()
}

export function validateUpdateRestaurantSchema(req: Request, res: Response, next: NextFunction) {
    const { error, value } = updateRestaurantSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        next(error)
    } 

    console.log({joiValue: value})
    next()
}