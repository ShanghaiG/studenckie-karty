/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("game").insert([
        {
          id: 1,
          round: 1,
          user_id: 1,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 2,
          round: 1,
          user_id: 2,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 3,
          round: 1,
          user_id: 3,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 4,
          round: 1,
          user_id: 4,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 5,
          round: 2,
          user_id: 1,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 6,
          round: 2,
          user_id: 2,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 7,
          round: 2,
          user_id: 3,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 8,
          round: 2,
          user_id: 4,
          main_card_id: null,
          answer_card_id: null,
        },
      ]);
    });
};
