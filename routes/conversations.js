const router = (module.exports = require('express').Router());
var knex = require('../knex')

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
    // .then( function (data) {
    //   let dataSoFar = data
    //   var sent_from = data[0]['sent_from']
    //   knex.select('users.name')
    //     .from('users')
    //     .where('users.id', sent_from)
    //     .then( function (data) {
    //       res.json(data)
    //     })
    // })
})

// Create a message that is sent to the user.
router.post('/', function (req, res) {
  let messageRow = req.body
  knex('message')
    .insert(messageRow)
    .returning('*')
    .then( () => {
      res.json('message')
    })
})
