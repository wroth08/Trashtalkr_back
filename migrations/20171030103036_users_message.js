exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_message', (table) => {
  table.integer('sent_from').references('users.id');
  table.integer('sent_to').references('users.id');
  table.integer('message_id').references('message.id');
  table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_message');
};
