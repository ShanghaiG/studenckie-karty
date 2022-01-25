const path = require("path");
const config = require("config");

let prettyPrint;
if (process.env.NODE_ENV === "development") {
  prettyPrint = { translateTime: true };
} else {
  prettyPrint = false;
}

const logger = require("pino")({
  level: config.get("server.logLevel"),
  redact: ['req.headers["x-authorization"]', "req.body.password"],
  prettyPrint,
  customLevels: {
    request: 25,
  },
});

/**
 * Creates a logger tagged with a given file name.
 *
 * If filename is provided, the logger will have `tag` key
 * added with a value of `filename`.
 *
 * @param {?string} filename
 */
function tag(filename) {
  const tag = filename ? path.relative("", filename) : undefined;
  return logger.child({ tag });
}

/**
 * Creates a logger tagged with a given request's HTTP method and URL,
 * for use in controllers.
 *
 * @param {request} req
 */
function request(req) {
  return logger.child({ tag: `${req.method} ${req.originalUrl}` });
}

module.exports = {
  logger,
  tag,
  request,
};
