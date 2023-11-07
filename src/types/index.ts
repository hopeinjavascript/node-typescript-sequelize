import { Response } from "express";

export interface CustomError extends Error {
  code?: number;
  data?: string | any;
}

export interface CustomResponse extends Response {
  serviceName?: string;
  data?: any;
  code?: number;
  message?: string;
}

export type TRestaurant = {
  name: string,
  address: string,
  vegOnly: boolean,
  cost: string,
  cuisineTypes: string[],
  isOpen: boolean,
}

export type TRestaurantOptional = {
  name?: string,
  address?: string,
  vegOnly?: boolean,
  cost?: string,
  cuisineTypes?: string[],
  isOpen?: boolean,
}
