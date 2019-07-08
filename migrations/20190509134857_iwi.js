exports.up = function(knex, Promise) {
  return knex.schema.createTable("iwi", table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.string("iwi_name")
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('iwi')
};