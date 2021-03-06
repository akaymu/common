/**
 * Türü: Middleware
 * Request -> session -> jwt' yi varsa alıp parse edip  
 * Request -> currentUser 'e eşitler.
 */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UserTypes } from '../users/user-types';

interface UserPayload {
  id: string;
  username: string;
  isActivated: boolean;
  userType: UserTypes;
  superUser: string;
  subUsers: string[];
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  } catch (err) { }

  next();
};