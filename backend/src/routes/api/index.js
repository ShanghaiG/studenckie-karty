/** @format */

const PREFIX = "/api";

module.exports = (app) => {
  app.use(PREFIX, require("./cards.route"));
};
