
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username:'guyman23',
          name:'guy',
          password:'password',
          contacts_id:1
        },
      ]);
    });
};
