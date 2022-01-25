/** @format */

module.exports = (app) => {
  app.use((req, _res, next) => {
    req.db = app.get("db");
    next();
  });

  require("./api")(app);
};
