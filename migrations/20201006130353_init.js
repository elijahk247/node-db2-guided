// purpose of a migration file: record changes to the database schema

// check the knex.js documentation to help, makes a lot more sense looking at that and creating as you go

// the up() function describes the changes to apply to the database when the migration runs
exports.up = function(knex) {
  // REMEMBER TO RETURN
  return knex.schema.createTable('menu_items', tbl => {
    // configuring the table 

    // primary key called 'id', integer, autoincrementing 
    tbl.increments();

    // tbl.string('name of it', length of it), 
    // ex. menu_item name 
    // .index() makes searching by this column faster 
    tbl.string('name', 512).notNullable().unique().index();

    tbl.decimal('price', 8, 2)

    // relatoinal databases store booleans ad 1 (for true) and 0 (for false)
    tbl.boolean('available').defaultTo(false);
    return
  })
};

// the down() function describes how to undo the changes 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu_items');
};
