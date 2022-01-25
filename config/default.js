/** @format */

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  server: {
    port: process.env.APP_PORT || 8001,
    logLevel: "trace",
    requestTimeout: 60000,
    restartDelay: 1000,
  },
  db: {
    host: String(process.env.DBHOST),
    user: String(process.env.DBUSER),
    password: String(process.env.DBPASS),
    database: String(process.env.DBNAME),
    port: Number(process.env.DBPORT),
  },
  session: {
    token: String(process.env.TOKENSECR),
    tokenLifetime: Number(process.env.SESSION_TOKEN_LIFETIME) || 3600,
    querySecr: String(process.env.QUERYSECR),
  },
};
