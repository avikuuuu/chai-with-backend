/**
 * Custom Error class for handling API errors.
 * @class ApiError
 * @extends Error
 * @param {number} statusCode - HTTP status code for the error.
 * @param {string} message - Error message (default: "Something went wrong").
 * @param {Array} errors - Array of error details (default: []).
 * @param {string} stack - Error stack trace (default: "").
 */
class ApiError extends Error {

    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        // Calling the parent class constructor with the provided message
        super(message);

        // Assigning properties to the instance
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.message = message;
        this.success = false;

        // Setting the stack trace based on provided stack or capturing it
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Exporting the ApiError class
export { ApiError };
