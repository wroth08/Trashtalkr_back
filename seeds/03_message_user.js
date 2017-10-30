exports.seed = function(knex, Promise) {
  return knex('users_message').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_message').insert([
      {
        sent_from: 1,
        sent_to: 2,
        message_id: 1,
        created_at: 'now()'
      },
      {
        sent_from: 2,
        sent_to: 3,
        message_id: 2,
        created_at: 'now()'
      },
      {
        sent_from: 3,
        sent_to: 4,
        message_id: 3,
        created_at: 'now()'
      },
      {
        sent_from: 4,
        sent_to: 1,
        message_id: 4,
        created_at: 'now()'
      },
      {
        sent_from: 3,
        sent_to: 2,
        message_id: 5,
        created_at: 'now()'
      },
      ]);
    });
};
