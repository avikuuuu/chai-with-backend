/**
 * ApiResponse class for structuring API responses.
 * @class ApiResponse
 * @param {number} statusCode - HTTP status code for the response.
 * @param {any} data - Data to be included in the response.
 * @param {string} message - Response message (default: "success").
 */
class ApiResponse {
  /**
   * @constructor
   * @param {number} statusCode - HTTP status code for the response.
   * @param {any} data - Data to be included in the response.
   * @param {string} message - Response message (default: "success").
   */
  constructor(statusCode, data, message = "success") {
      // Assigning properties to the instance
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;

      // Determining success based on the status code
      this.success = statusCode < 400;
  }
}

// Exporting the ApiResponse class
export { ApiResponse };
