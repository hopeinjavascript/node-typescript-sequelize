import { Request, Response, NextFunction } from 'express';
import { CustomResponse } from '../types';

export default function responseHandler(
  req: Request,
  res: CustomResponse,
  next: NextFunction
) {
  const RESP_OBJ = {
    success: true,
    serviceName: res.serviceName || 'Service name not provided!',
    code: res.code || 500, //HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    message: res.message || 'Internal Server Error',
    ...res.data && { data: res.data},
  };

  res.status(200).json(RESP_OBJ);
}
