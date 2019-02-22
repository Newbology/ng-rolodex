exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.integer('contacts_id').references('contacts_id').inTable('contacts').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
  // return knex.schema.table('users'), table => {
  //   table.integer('contact_id').unsigned()
  // }
};
