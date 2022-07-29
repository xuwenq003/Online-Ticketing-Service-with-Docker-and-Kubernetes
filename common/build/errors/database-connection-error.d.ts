import { CustomError } from "./custom-error";
export declare class DatebaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
