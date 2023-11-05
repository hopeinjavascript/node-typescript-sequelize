import express, { Router } from 'express';

import restaurantController from './../controllers/restaurant';

const router: Router = express.Router();

/*
    @baseRoute /restaurant
*/

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getSingleRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

export default router;
