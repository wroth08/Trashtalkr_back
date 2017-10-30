exports.up = function(knex, Promise) {
  return knex.schema.createTable('message', (table) => {
  table.increments('id');
  table.text('string');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('message');
};
