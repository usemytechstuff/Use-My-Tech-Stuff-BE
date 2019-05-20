
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // {id: 1, username: 'benson', password: 'lei', email: 'blei@gmail.com'},
        // {id: 2, username: 'sarah', password: 'lee', email: 'slee@gmail.com'},
        // {id: 3, username: 'bazen', password: 'berhane', email: 'bberhane@gmail.com'},
        // {id: 4, username: 'michael', password: 'redig', email: 'mredig@gmail.com'},
        // {id: 5, username: 'bryant', password: 'patton', email: 'bpatton@gmail.com'},
        // {id: 6, username: 'oluwatimileyin', password: 'ojo', email: 'oojo@gmail.com'},
        // {id: 7, username: 'philip', password: 'johnson', email: 'pjohnsong@gmail.com'},
        // {id: 8, username: 'scott', password: 'vojik', email: 'svojik@gmail.com'},
        // {id: 9, username: 'sorin', password: 'chris', email: 'schris@gmail.com'},
        // {id: 10, username: 'chariton', password: 'shumway', email: 'cshumway@gmail.com'},
        {id: 1, username: 'test', password: 'test', email: 'test@gmail.com'}

      ]);
    });
};
