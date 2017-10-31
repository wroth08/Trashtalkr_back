const router = (module.exports = require('express').Router());
var knex = require('../knex')

router.get('/', function (req, res) {
    knex.select('name', 'id', 'email')
    .from('users')
    .then( function (data) {
      res.json(data)
    })
  })