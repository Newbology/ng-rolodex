
exports.up = function(knex, Promise) {
 return knex.schema.table('contacts', (table) => {
  table.integer('contacts_id').references('id').inTable('users');
 }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('contacts_id')
};
