exports.up = function(knex, Promise) {
  return knex.schema.createTable('tautoko', table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.integer("rahui_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tautoko')
};
