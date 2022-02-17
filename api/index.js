const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose"); // Require mongoose library

const restrictOrigin = require("./middlewares/restrictOrigin");
const config = require("./config/config");
const logger = require("./config/logger");
const routes = require("./routes/v1");

const app = express(); //Create new instance
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode
app.use(restrictOrigin);
// v1 api routes
app.use("/v1", routes);

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info("Connected to MongoDB");
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
