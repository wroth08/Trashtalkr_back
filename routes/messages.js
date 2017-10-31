const router = (module.exports = require("express").Router());
var knex = require("../knex");

// Get all messages
router.get("/", function(req, res) {
  knex
    .select("id", "string")
    .from("message")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let messageId = req.params.id
  knex.select('string')
    .from('message')
    .where('id', messageId)
    .then( function (data) {
      res.json(data)
    })
})

// Update a custom message that the user created
// router.put('/:id', function (req, res) {
//   let messageId = req.params.id
//   var info = req.body
//   knex('message')
//     .where('message.id', messageId)
//     .update(info)
//     .returning('*')
//       .then( () => {
//         res.json(info);
//       })
// })

// Create a custom message as a user
router.post('/', function (req, res) {
  let messageRow = req.body
  knex('message')
    .insert(messageRow)
    .returning('*')
    .then( (data) => {
      res.json(data)
    })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let messageId = req.params.id
  knex('message')
    .where('message.id', messageId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
