import { Request, Response, NextFunction } from 'express';

import { NotAuthorizedError } from '../errors/not-authorized-error';
import { ForbiddenError } from '../errors/forbidden-error';
import { actions } from '../users/user-actions';

export const requirePermission = (action: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      throw new NotAuthorizedError();
    }

    if (!(actions[req.currentUser.userType].includes(action))) {
      throw new ForbiddenError();
    }

    next();
  };
};
