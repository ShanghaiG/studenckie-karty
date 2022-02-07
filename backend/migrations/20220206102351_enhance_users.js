exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.boolean("is_active").notNullable().defaultTo(false).index();
    table.integer("points");
    table.boolean("is_leader").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("is_active");
    table.dropColumn("points");
    table.dropColumn("is_leader");
  });
};
