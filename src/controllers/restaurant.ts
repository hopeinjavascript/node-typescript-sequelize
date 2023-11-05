import { Request, Response, NextFunction } from 'express';
import db from './../utils/db';

interface MyResponse extends Response {
  data?: any;
  code?: number;
  message?: string;
}

const getAllRestaurants = async (
  req: Request,
  res: MyResponse,
  next: NextFunction
) => {
  try {
    const restaurants = await db.findAll();
    res.data = restaurants;
    res.code = 200;
    res.message = 'Restaurants';
    next();
  } catch (error) {
    next(error);
  }
};
const createRestaurant = (req: Request, res: Response, next: NextFunction) => {
  return 'createRestaurants';
};
const getSingleRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return 'getSingleRestaurant';
};
const updateRestaurant = (req: Request, res: Response, next: NextFunction) => {
  return 'updateRestaurant';
};
const deleteRestaurant = (req: Request, res: Response, next: NextFunction) => {
  return 'deleteRestaurant';
};

export default {
  getAllRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
