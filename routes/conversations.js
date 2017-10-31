const router = (module.exports = require('express').Router());
var knex = require('../knex')

router.get('/', function (req, res) {
  knex.select('sent_from', 'sent_to', 'message_id')
  .from('users_message')
  .then( function (data) {
    res.json(data)
  })
})

router.get('/:id', function (req, res) {
  let myId = req.params.id
  knex.select('message.string', 'users.name')
    .from('message')
    .join('users_message', function () {
      this.on('message.id', 'users_message.message_id')
    })
    .join('users', function () {
      this.on('users_message.sent_from', 'users.id')
    })
    .where('users_message.sent_to', myId)
    .then( function (data) {
      res.json(data)
    })
})

router.post('/', function (req, res) {
  let messageRow = req.body
  knex('users_message')
    .insert(messageRow)
    .returning('*')
    .then( function (data) {
      res.json(data)
    })
})
