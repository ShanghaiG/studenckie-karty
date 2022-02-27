/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          first_name: "Axl",
          last_name: "Cruz",
          points: 0,
          is_leader: false,
          has_answered: false,
          winner: false,
        },
        {
          id: 2,
          first_name: "Rae",
          last_name: "Ibarra",
          points: 0,
          is_leader: false,
          has_answered: false,
          winner: false,
        },
        {
          id: 3,
          first_name: "Ashlyn",
          last_name: "Clark",
          points: 0,
          is_leader: false,
          has_answered: false,
          winner: false,
        },
        {
          id: 4,
          first_name: "Hunter",
          last_name: "Frye",
          points: 0,
          is_leader: false,
          has_answered: false,
          winner: false,
        },
      ]);
    });
};
