exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments('contacts_id');
    table.string('name');
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
