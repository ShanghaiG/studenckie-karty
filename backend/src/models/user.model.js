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

  cleanUp: (trx = knex) => {
    return trx
      .knex("users")
      .update({ has_answered: false, is_leader: false })
      .where({ has_answered: true })
      .returning("*")
      .getFirst();
  },

  setLeader: (userId, trx = knex) => {
    return trx
      .knex("users")
      .update({ is_leader: true })
      .where({ id: userId })
      .returning("*")
      .getFirst();
  },

  update: (userId, data, trx = knex) => {
    return trx
      .knex("users")
      .update(data)
      .where({ id: userId })
      .returning("*")
      .getFirst();
  },

  updatePoints: (userId, points, trx = knex) => {
    return trx
      .knex("users")
      .update({ points })
      .where({ id: userId, is_active: true })
      .returning("*")
      .getFirst();
  },

  updateActive: (data, trx = knex) => {
    return trx
      .knex("users")
      .update({ is_active: true, is_leader: data?.isLeader })
      .where({ id: data.userId })
      .returning("*")
      .getFirst();
  },

  updateWinner: (userId, isWinner, trx = knex) => {
    return trx
      .knex("users")
      .update({ winner: isWinner })
      .where({ id: userId })
      .returning("*")
      .getFirst();
  },
};

module.exports = UserModel;
