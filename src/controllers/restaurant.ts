import { Request, Response, NextFunction } from 'express';
import db from './../utils/db';
import genHelpers from './../helpers/generic';

interface MyResponse extends Response {
  data?: any;
  code?: number;
  message?: string;
  serviceName?: string;
}

const getAllRestaurants = async (
  req: Request,
  res: MyResponse,
  next: NextFunction
) => {
  res.serviceName = "getAllRestaurants"
  
  try {
    const restaurants = await db.findAll();

    if (!restaurants?.length)
      return genHelpers.setResponse(res)('There are no restaurants', 500);


    genHelpers.setResponse(res)('Restaurants', 200, restaurants)
    next();
  } catch (error) {
    console.log('---here---')
    const errObj = genHelpers.throwError('Encountered issue while getting all restaurants', 500, error)
    next(errObj);
  }
};

const createRestaurant = async (req: Request, res: MyResponse, next: NextFunction) => {
  res.serviceName = "createRestaurant"

  try {
    const newRestaurant = await db.insert(req.body);

    if(!newRestaurant)
      return genHelpers.setResponse(res)('Cannot insert new restaurant', 500);

    genHelpers.setResponse(res)('New restaurant created', 200, newRestaurant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while creating restaurant', 500, error)
    next(errObj);
  }
};

const getSingleRestaurant = async (
  req: Request,
  res: MyResponse,
  next: NextFunction
) => {
  res.serviceName = "getSingleRestaurant"

  const restaurantId = req.params.id

  try {
    const restuarant = await db.findById(restaurantId);

    if(!restuarant)
      return genHelpers.setResponse(res)('Restaurant not found with id -' + restaurantId, 400);

    genHelpers.setResponse(res)('Single restaurant', 200, restuarant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while getting restaurant with id -' + restaurantId, 500, error)
    next(errObj);
  }
};

const updateRestaurant = async (req: Request, res: MyResponse, next: NextFunction) => {
  res.serviceName = "updateRestaurant"

  const restaurantId = req.params.id
  
  try {
    const updatedRestaurant = await db.updateById(req.body, restaurantId);

    if(!updatedRestaurant)
      return genHelpers.setResponse(res)('Cannot update restaurant with id -' + restaurantId, 400);


    genHelpers.setResponse(res)('Restaurant updated with id -' + restaurantId, 200, updatedRestaurant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while updating restaurant with id -' + restaurantId, 500, error)
    next(errObj);
  }
};

const deleteRestaurant = async (req: Request, res: MyResponse, next: NextFunction) => {
  res.serviceName = "deleteRestaurant"

  const restaurantId = req.params.id

  try {
    const deletedRestuarant = await db.deleteById(restaurantId);

    if(!deletedRestuarant)
      return genHelpers.setResponse(res)('Cannot delete restuarant with id -' + restaurantId, 500);

    genHelpers.setResponse(res)('Restaurant deleted with id -' + restaurantId, 200, deletedRestuarant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while deleting restaurant with id -' + restaurantId, 500, error)
    next(errObj);
  }
};

export default {
  getAllRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
