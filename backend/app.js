/** @format */
//Test
require("module-alias/register");
const config = require("config");
const Logger = require("@helpers/logger.helper");
const logger = Logger.tag(__filename);

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const errorHandler = require("@middleware/error-handler.middleware");

const requestLogger = require("@middleware/request-logger.middleware");
const appendRoutes = require("@routes");

// const sockets = require("@listeners/socket.listener");

const port = config.get("server.port");

const app = express();

app.use(helmet());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setTimeout(config.get("server.requestTimeout"), function () {
    logger.error("ERROR: Freeze on request timeout, restarting...");
    setTimeout(() => {
      process.exit(1);
    }, config.get("server.restartDelay"));
  });
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(requestLogger);

// // create http server for sockets
// let httpserver = http.createServer(app);
// sockets(httpserver);

// const db = require("@config/db");
// app.set("db", db);

// Logging requests' data

app.get("/", (req, res) => {
  res.send({ property: "Need to pass routes in objects / arrays" });
});

appendRoutes(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`StudenckieKarty is listening on port ${port}`);
});
