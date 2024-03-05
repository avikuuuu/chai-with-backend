// Define an asynchronous request handler using a higher-order function
const AsyncHandler = (requestHandler) => {
  // The middleware function that handles asynchronous request handlers
  return (req, res, next) => {
    // Create a new Promise that resolves the requestHandler function
    Promise.resolve(requestHandler(req, res, next))
      // If there's an error, pass it to the next error handling middleware
      .catch((err) => next(err));
  };
 };
 
 // Export the AsyncHandler function
 export { AsyncHandler };