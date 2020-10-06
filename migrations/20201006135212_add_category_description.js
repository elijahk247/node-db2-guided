
exports.up = function(knex) {
  // add a new column to a table
  return knex.schema.table('categories', tbl => {
    tbl.text('description');
  })
};

/* run the down function using knex migrate:rollback
  - undo the migration that added 'description'
  - undos the latest migration
  - undos each migrations that were added in order 
*/
exports.down = function(knex) {
  return knex.schema.table('categories', tbl => {
    tbl.dropColumn('description');
  })
};
