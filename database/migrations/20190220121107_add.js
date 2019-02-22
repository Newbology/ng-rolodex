
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) =>{
    table.string('password').notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
  //return knex.schema.dropColumn('password');
};
