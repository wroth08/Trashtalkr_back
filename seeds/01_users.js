
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Jason",
        password: "Awesome1",
        username: "jas.dulin@gmail.com"
        },
        {name: "Tyler",
        password: "Awesome2",
        username: "tyler.john.torres@gmail.com"
        },
        {name: "Eddy",
        password: "Awesome3",
        username: "eddycaldas@gmail.com"
        },
        {name: "Weston",
        password: "Awesome4",
        username: "weston@gmail.com"
        }
      ]);
    });
};
