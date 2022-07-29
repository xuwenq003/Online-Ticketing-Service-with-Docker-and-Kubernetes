"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatebaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatebaseConnectionError extends custom_error_1.CustomError {
    constructor() {
        super('Error connecting to db');
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
        Object.setPrototypeOf(this, DatebaseConnectionError.prototype);
    }
    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}
exports.DatebaseConnectionError = DatebaseConnectionError;
