const knex = require("../helpers/knex.helper");

const CardModel = {
  findAllMainCards: (trx = knex) => {
    return trx.knex("main_cards").select();
  },

  findAllAnswersCards: (trx = knex) => {
    return trx.knex("answers_cards").select();
  },
};

module.exports = CardModel;
