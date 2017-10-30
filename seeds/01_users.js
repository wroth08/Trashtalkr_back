
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Jason",
        password: "Awesome1",
        email: "jas.dulin@gmail.com"
        },
        {name: "Tyler",
        password: "Awesome2",
        email: "tyler.john.torres@gmail.com"
        },
        {name: "Eddy",
        password: "Awesome3",
        email: "eddycaldas@gmail.com"
        },
        {name: "Weston",
        password: "Awesome4",
        email: "weston@gmail.com"
        }
      ]);
    });
};
