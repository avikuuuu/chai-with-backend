
class ApiResponse {

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
