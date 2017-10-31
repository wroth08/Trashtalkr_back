const router = (module.exports = require('express').Router());
var knex = require('../knex')

const fetch = require('node-fetch')

router.get('/', function (req, res) {
    knex.select('name', 'id', 'username')
    .from('users')
    .then( function (data) {
      res.json(data)
    })
  })

router.post('/', function (req, res) {
    var row = req.body
    knex.select('username')
        .from('users')
        .where('username', row.username)
        .then( (dat) => {
            if (dat[0] == undefined) {
            var bcrypt = require('bcrypt')
            const saltRounds = 10
            const prepass = row.password
            const leagueid = row.league_id
            fetch(`http://games.espn.com/ffl/api/v2/leagueSettings?leagueId=${leagueid}&year=2017`)
                .then( (response) => response.json())
                .then( (response) => {
                    let members = response.leaguesettings.leagueMembers
                    let check = members.filter( (member) => member.userName === row.username)
                    console.log(check)
                    if (check[0] === undefined) {
                        res.send('no user matches the username')
                    }
                    let ownerId = check[0].userProfileId
                    // console.log(ownerId)
                    check = check[0].userName
                    // console.log(check)
                    let teams = response.leaguesettings.teams
                    let teamcheck = Object.keys(teams).filter( (team) => response.leaguesettings.teams[team].owners[0].ownerId === ownerId)
                    let teamId = teamcheck[0]
                    // console.log(teamId)
                    if (teamId !== undefined) {
                        row['team_id'] = teamId
                        bcrypt.hash(prepass, saltRounds, function(err, hash) {
                            row['password'] = hash
                            knex('users')
                                .insert(row)
                                .returning('*')
                                .then( (data) => {
                                    res.json(data)
                                })
                        })
                    } else {
                        res.send('errrorrrrrrr')
                    }
                })
            } else {
                res.send('already exists')
            }
        })
})