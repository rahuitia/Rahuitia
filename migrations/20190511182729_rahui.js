
exports.up = function(knex, Promise) {
  return knex.schema.createTable("rahui", table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.text("region");
    table.text("iwi");
    table.text("hapu");
    table.text("authoriser");
    table.text("description");
    table.text("korero");
    table.text("geo_ref");
    table.string("date_placed");
    table.string("date_lifted");
    table.text("contact")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rahui");
};