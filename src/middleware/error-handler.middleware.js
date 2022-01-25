/** @format */

const logger = require("@helpers/logger.helper");

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @prettier
 */
module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.statusInfo === undefined) {
    err.statusCode = 422;
    err.statusInfo = err.message;
    err.statusDetail = err.detail;
    logger.request(req).error(err);
  }

  res.status(err.statusCode).send({
    status: "error",
    message: err.statusInfo,
    details: err.statusDetail,
  });
};
