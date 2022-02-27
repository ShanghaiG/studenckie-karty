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
        {
          id: 9,
          round: 3,
          user_id: 1,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 10,
          round: 3,
          user_id: 2,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 11,
          round: 3,
          user_id: 3,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 12,
          round: 3,
          user_id: 4,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 13,
          round: 4,
          user_id: 1,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 14,
          round: 4,
          user_id: 2,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 15,
          round: 4,
          user_id: 3,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 16,
          round: 4,
          user_id: 4,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 17,
          round: 5,
          user_id: 1,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 18,
          round: 5,
          user_id: 2,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 19,
          round: 5,
          user_id: 3,
          main_card_id: null,
          answer_card_id: null,
        },
        {
          id: 20,
          round: 5,
          user_id: 4,
          main_card_id: null,
          answer_card_id: null,
        },
      ]);
    });
};
