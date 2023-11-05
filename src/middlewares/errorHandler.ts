import { Request, Response, NextFunction } from 'express';
import { MyError } from './../types/index';

// https://medium.com/@xiaominghu19922/proper-error-handling-in-express-server-with-typescript-8cd4ffb67188
// https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/

// [INFO] - SKipping callbacks in middleware chain using next('route')

export interface MyResponse extends Response {
  serviceName?: string;
  data?: any;
  code?: number;
  message?: string;
}

export default function errorHandler(
  err: MyError,
  req: Request,
  res: MyResponse,
  next: NextFunction
) {
  // const code = err?.code || 500,
  //   msg = err?.message || 'Something went wrong';f

  const ERR_OBJ = {
    success: false,
    serviceName: res.serviceName || 'Service name not provided!',
    code: err.code || 500, //HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    message: err.message || 'Internal Server Error',
    data: err.data || '',
    name: err.name,
    stack: err.stack,
  };

  res.status(ERR_OBJ.code).json(ERR_OBJ);
}
