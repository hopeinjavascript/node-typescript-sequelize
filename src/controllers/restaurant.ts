import { Request, Response, NextFunction } from 'express';
import db from './../utils/db';
import genHelpers from './../helpers/generic';
import { CustomResponse } from '../types';

const getAllRestaurants = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  res.serviceName = "getAllRestaurants"

  const query = req.query;

  let msg = genHelpers.getObjectLength(query) ? 'There are no restaurants for given search criteria' : 'There are no restaurants'
  
  try {
    const restaurants = await db.findAll(query);

    if (!restaurants?.length) {
      genHelpers.setResponse(res)(msg, 500);
      next()
    }

    genHelpers.setResponse(res)('Restaurants', 200, restaurants)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while getting all restaurants', 500, error)
    next(errObj);
  }
};

const createRestaurant = async (req: Request, res: CustomResponse, next: NextFunction) => {
  res.serviceName = "createRestaurant"

  try {
    const newRestaurant = await db.insert(req.body);

    if(!newRestaurant){
      genHelpers.setResponse(res)('Cannot insert new restaurant', 500);
      next()
    }

    genHelpers.setResponse(res)('New restaurant created', 200, newRestaurant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while creating restaurant', 500, error)
    next(errObj);
  }
};

const getSingleRestaurant = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  res.serviceName = "getSingleRestaurant"

  const restaurantId = req.params.id

  try {
    const restuarant = await db.findById(restaurantId);

    if(!restuarant) {
      genHelpers.setResponse(res)('Restaurant not found with id -' + restaurantId, 400);
      next()
    }

    genHelpers.setResponse(res)('Single restaurant', 200, restuarant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while getting restaurant with id -' + restaurantId, 500, error)
    next(errObj);
  }
};

const updateRestaurant = async (req: Request, res: CustomResponse, next: NextFunction) => {
  res.serviceName = "updateRestaurant"

  const restaurantId = req.params.id
  
  try {
    const updatedRestaurant = await db.updateById(req.body, restaurantId);

    if(!updatedRestaurant){

      genHelpers.setResponse(res)('Cannot update restaurant with id -' + restaurantId, 400);
      next()
    }

    genHelpers.setResponse(res)('Restaurant updated with id -' + restaurantId, 200, updatedRestaurant)
    next();
  } catch (error) {
    const errObj = genHelpers.throwError('Encountered issue while updating restaurant with id -' + restaurantId, 500, error)
    next(errObj);
  }
};

const deleteRestaurant = async (req: Request, res: CustomResponse, next: NextFunction) => {
  res.serviceName = "deleteRestaurant"

  const restaurantId = req.params.id

  try {
    const deletedRestuarant = await db.deleteById(restaurantId);

    if(!deletedRestuarant) {
      genHelpers.setResponse(res)('Cannot delete restuarant with id -' + restaurantId, 500);
      next()
    }

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
