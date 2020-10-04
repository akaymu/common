import { Request, Response, NextFunction } from 'express';

import { NotAuthorizedError } from '../errors/not-authorized-error';
import { ForbiddenError } from '../errors/forbidden-error';
import { UserTypes } from '../users/user-types';

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  if (!(req.currentUser.userType === UserTypes.admin)) {
    throw new ForbiddenError();
  }

  next();
};