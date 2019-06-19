exports.up = function(knex, Promise) {
  return knex.schema.createTable('tautoko', table => {
    table.increments("id").primary();
    table.string("user_id");
    table.string("rahui_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tautoko')
};
