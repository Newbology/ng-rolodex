exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', table => {
    table.renameColumn('contacts_id', 'id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('id');
};
