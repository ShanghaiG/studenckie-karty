const knex = require("../helpers/knex.helper");

const CardModel = {
  findAllMainCards: (trx = knex) => {
    return trx.knex("main_cards").select();
  },

  findAllAnswersCards: (trx = knex) => {
    return trx.knex("answers_cards").select();
  },

  findMain: (mainCardId, trx = knex) => {
    return trx.knex("main_cards").select().where({ id: mainCardId }).getFirst();
  },

  findAnswer: (answerCardId, trx = knex) => {
    return trx
      .knex("answers_cards")
      .select()
      .where({ id: answerCardId })
      .getFirst();
  },
};

module.exports = CardModel;
