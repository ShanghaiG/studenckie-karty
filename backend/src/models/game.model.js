const knex = require("../helpers/knex.helper");

const GameModel = {
  find: (userId, round, trx = knex) => {
    return trx
      .knex("game")
      .select()
      .where({ user_id: userId, round })
      .getFirst();
  },

  findMain: (round, trx = knex) => {
    return trx
      .knex("game")
      .select()
      .whereNotNull("main_card_id")
      .andWhere({ round })
      .getFirst();
  },

  findWinner: (round, trx = knex) => {
    return trx
      .knex("game")
      .select()
      .where({ winner: true })
      .andWhere({ round })
      .getFirst();
  },

  findAnswers: (round, trx = knex) => {
    return trx
      .knex("game")
      .select("answer_card_id")
      .whereNull("main_card_id")
      .andWhere({ round });
  },

  update: (userId, round, data, trx = knex) => {
    return trx
      .knex("game")
      .update(data)
      .where({ user_id: userId, round })
      .returning("*")
      .getFirst();
  },

  updateWinner: (round, cardId, trx = knex) => {
    return trx
      .knex("game")
      .update({ winner: true })
      .where({ round, answer_card_id: cardId })
      .returning("*")
      .getFirst();
  },

  clearMains: (trx = knex) => {
    return trx
      .knex("game")
      .update({ main_card_id: null })
      .whereNotNull("main_card_id")
      .returning("*");
  },

  clearAnswers: (trx = knex) => {
    return trx
      .knex("game")
      .update({ answer_card_id: null })
      .whereNotNull("answer_card_id")
      .returning("*");
  },

  clearWinners: (trx = knex) => {
    return trx
      .knex("game")
      .update({ winner: false })
      .where({ winner: true })
      .returning("*");
  },
};

module.exports = GameModel;
