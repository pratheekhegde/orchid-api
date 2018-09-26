export class OrchidError extends Error {
  constructor(type, message, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OrchidError);
    }

    // Custom debugging information
    this.type = type;
    this.message = message;
  }
}
