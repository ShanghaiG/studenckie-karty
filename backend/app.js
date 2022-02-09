/** @format */
//Test
require("module-alias/register");
const config = require("config");
const Logger = require("@helpers/logger.helper");
const logger = Logger.tag(__filename);
const http = require("http");

const cors = require("cors");

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const errorHandler = require("@middleware/error-handler.middleware");

const requestLogger = require("@middleware/request-logger.middleware");
const appendRoutes = require("@routes");

const sockets = require("@listeners/socket.listener");

const port = config.get("server.port");

const app = express();
app.use(cors());

const httpServer = http.createServer(app);
sockets(httpServer);

// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("User connected: ", socket.id);

//   socket.on("joinRoom", async (data) => {
//     socket.join(data);

//     if (data?.id) {
//       await UserModel.updateActive(data.id);
//     }
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected", socket.id);
//   });
// });

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

app.get("/", (req, res) => {
  res.send({ property: "Need to pass routes in objects / arrays" });
});

// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// sockets(httpServer);

appendRoutes(app);

app.use(errorHandler);

httpServer.listen(port, () => {
  console.log(`StudenckieKarty is listening on port ${port}`);
});
