
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {string: "You Suck!",
        },
        {string: "Quit the league!",
        },
        {string: "You suck!",
        },
        {string: "Eat sh**!",
        },
        {string: "Try harder nerd!",
        },
        {string: "Your team is trash",
        },
        {string: "Maybe you should just give up",
        },
        {string: "My granny plays better than you",
        },
        {string: "lol",
        },
        {string: "The price good men pay for indifference to public affairs is to be ruled by evil men",
        },
      ]);
    });
};
