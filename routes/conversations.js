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
      this.on('users_message.sent_to', 'users.id')
    })
    .where('users.id', myId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a message that is sent to the user.
// router.post('/', function (req, res) {
//   let messageID = req.body.messageID
//   knex.select('string')
//     .from('message')
//     .where('message.id', messageId)
//     .then( function (data) {
//       insertData['']
//     })
// })
