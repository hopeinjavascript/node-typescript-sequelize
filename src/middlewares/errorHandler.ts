import { Request, Response, NextFunction } from 'express';
import { CustomError, CustomResponse } from './../types';

export default function errorHandler(
  err: CustomError,
  req: Request,
  res: CustomResponse,
  next: NextFunction
) {
  // const code = err?.code || 500,
  //   msg = err?.message || 'Something went wrong';f

  const ERR_OBJ = {
    success: false,
    serviceName: res.serviceName || 'Service name not provided!',
    code: err.code || 500, //HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    message: err.message || 'Internal Server Error',
   ...err.data && { data: err.data},
    name: err.name,
    stack: err.stack,
  };

  res.status(ERR_OBJ.code).json(ERR_OBJ);
}
