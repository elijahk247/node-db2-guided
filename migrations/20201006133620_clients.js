
exports.up = function(knex) {
  return knex.schema.createTable('clients', tbl => {
    //tbl.string('id'),  tbl.primary('id');
    tbl.string('id').primary();
    
    tbl.string('name').notNullable().index();
    tbl.string('email').unique().index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clients');  
};
