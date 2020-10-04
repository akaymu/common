import { CustomError } from './custom-error';

export class ForbiddenError extends CustomError {
  statusCode = 403;

  constructor() {
    super('Bu işlemi gerçekleştirme hakkınız bulunmamaktadır.');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Bu işlemi gerçekleştirme hakkınız bulunmamaktadır. Lütfen sistem yöneticisi ile irtibata geçiniz.' }];
  }
}