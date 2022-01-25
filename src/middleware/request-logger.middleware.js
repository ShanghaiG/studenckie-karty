/** @format */

const Logger = require("@helpers/logger.helper");
const pino = require("pino-http");

const { logger } = Logger;

module.exports = pino({
  logger,
  useLevel: "request",
  serializers: {
    req(req) {
      req.body = req.raw.body;
      req.user = req.raw.user;
      return req;
    },
  },
});
