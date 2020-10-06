
exports.up = function(knex) {
  return knex.schema.createTable('categories', tbl => {
    //tbl.string('id'),  tbl.primary('id');
    tbl.uuid('id').primary();
    
    tbl.string('name').notNullable().index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');  
};
