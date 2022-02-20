exports.up = function (knex) {
  return knex.schema.createTable("game", function (table) {
    table.increments("id").primary();
    table.integer("round");
    table.integer("user_id");
    table.integer("main_card_id");
    table.integer("answer_card_id");
    table.boolean("winner").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("game");
};
