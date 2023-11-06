import express, { Router } from 'express';

import restaurantController from './../controllers/restaurant';

import {validateCreateRestaurantSchema, validateUpdateRestaurantSchema} from './../validations/restaurants'

const router: Router = express.Router();

/*
    @baseRoute /restaurant
*/

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(validateCreateRestaurantSchema, restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getSingleRestaurant)
  .patch(validateUpdateRestaurantSchema, restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

export default router;
