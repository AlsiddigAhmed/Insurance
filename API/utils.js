const createError = require("http-errors");

exports.handle404Errors = (req, res, next) => {
  next(createError(404, "no such route " + req.method + " " + req.url));
};

exports.handleErrors = (err, req, res, next) => {
  // send the error
  res.status(err.status || 500).json(err);
};
