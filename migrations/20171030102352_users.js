exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.text('name');
  table.text('password');
  table.text('email');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
