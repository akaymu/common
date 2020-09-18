import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Veritabanı bağlantısında hata var. Lütfen daha sonra tekrar deneyiniz.';

  constructor() {
    super('Veritabanı bağlantısında hata var.');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ];
  }
}