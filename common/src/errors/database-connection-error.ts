import { CustomError } from "./custom-error";

export class DatebaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super('Error connecting to db');
    Object.setPrototypeOf(this, DatebaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {message: this.reason}
    ];
  }
}