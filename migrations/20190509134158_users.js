exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('middle_name')
    table.string('last_name')
    table.string('address')
    table.string('password_hash')
    table.text('email')

  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
