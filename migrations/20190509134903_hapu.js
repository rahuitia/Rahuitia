exports.up = function(knex, Promise) {
  return knex.schema.createTable("hapu", table => {
    table.increments("id").primary();
    table.string("user_id");
    table.string("hapu_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hapu')
};
