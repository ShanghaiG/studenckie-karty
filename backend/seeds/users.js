/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { id: 1, first_name: "Axl", last_name: "Cruz" },
        { id: 2, first_name: "Rae", last_name: "Ibarra" },
        { id: 3, first_name: "Fox", last_name: "Decker" },
        { id: 4, first_name: "Anita", last_name: "Lin" },
        { id: 5, first_name: "Hunter", last_name: "Frye" },
        { id: 6, first_name: "Ashlyn", last_name: "Clark" },
      ]);
    });
};
