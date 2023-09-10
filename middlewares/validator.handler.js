const boom = require('@hapi/boom');

// This function is a middleware factory that generates a validator middleware.
function validatorHandler(schema, property) {
  // The returned middleware function
  return (req, res, next) => {
    // Extract the data from the specified property of the request object.
    const data = req[property];

    // Validate the extrated data using the provided schema.
    const { error } = schema.validate(data, { abortEarly: false });

    // If validation error(s) occur.
    if (error) {
      // Create a 'Bad Request' error using the boom library with the validation error message(s).
      // and pass it to the error-handling middleware.
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
