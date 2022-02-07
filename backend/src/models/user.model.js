const knex = require("../helpers/knex.helper");

const UserModel = {
  find: (userId, trx = knex) => {
    return trx.knex("users").select().where({ id: userId }).getFirst();
  },

  findAll: (trx = knex) => {
    return trx.knex("users").select().where({ is_active: true });
  },

  getAvailable: (trx = knex) => {
    return trx.knex("users").select().where({ is_active: false });
  },

  delete: (trx = knex) => {
    return trx
      .knex("users")
      .update({ is_active: false, points: null })
      .where({ is_active: true });
  },

  updatePoints: (userId, points, trx = knex) => {
    return trx
      .knex("users")
      .update({ points })
      .where({ id: userId, is_active: true })
      .returning("*")
      .getFirst();
  },

  updateActive: (userId, trx = knex) => {
    return trx
      .knex("users")
      .update({ is_active: true })
      .where({ id: userId })
      .returning("*")
      .getFirst();
  },
};

module.exports = UserModel;
