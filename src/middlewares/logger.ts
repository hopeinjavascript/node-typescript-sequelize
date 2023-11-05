import { Request, Response, NextFunction } from 'express';

export default function (req: Request, res: Response, next: NextFunction) {
  console.log(`[REQUEST] : url - ${req.originalUrl}, method - ${req.method}`);
  next();
}
