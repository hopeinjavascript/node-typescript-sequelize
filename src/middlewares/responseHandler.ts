import { Request, Response, NextFunction } from 'express';
// import { MyResponse } from '../types';

export interface MyResponse extends Response {
  serviceName?: string;
  data?: any;
  code?: number;
  message?: string;
}

export default function responseHandler(
  req: Request,
  res: MyResponse,
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
