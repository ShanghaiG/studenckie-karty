/** @format */

const config = require("config");
const Logger = require("./logger.helper");

const logger = Logger.logger.child({ tag: "knex" });

const toCamelCase = require("./case.helper");

function knex(host, port) {
  return require("knex")({
    client: "pg",
    connection: {
      host,
      user: config.get("db.user"),
      password: config.get("db.password"),
      database: config.get("db.database"),
      port,
    },
    wrapIdentifier: (value, origImpl, _queryContext) => origImpl(value),
    postProcessResponse: (result, _queryContext) => {
      if (!result) {
        return;
      }

      if (Array.isArray(result)) {
        return result.map(toCamelCase);
      }
      return toCamelCase(result);
    },
    log: {
      warn(msg) {
        logger.warn({ knex: msg });
      },
      error(msg) {
        logger.error({ knex: msg });
      },
      deprecate(msg) {
        logger.info({ knex: msg });
      },
      debug(msg) {
        logger.debug({ knex: msg });
      },
    },
    migrations: {
      tableName: "migrations",
    },
  });
}

const Knex = require("knex");
Knex.QueryBuilder.extend("getFirst", async function () {
  const result = await this;
  if (result && result.length > 0) {
    return result[0];
  }
  return null;
});

module.exports = {
  knex: knex(config.get("db.host"), config.get("db.port")),
};
