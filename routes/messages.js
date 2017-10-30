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

//
// {
//   'messageID': 2,
//   'sent_from': 1,
//   'sent_to': 2,
// }

// Create a message that is sent to the user.
router.post("/", function(req, res) {
  let messageID = req.body.messageID;
  knex
    .select("string")
    .from("message")
    .where("message.id", messageId)
    .then(function(data) {
      insertData[""];
    });
});
