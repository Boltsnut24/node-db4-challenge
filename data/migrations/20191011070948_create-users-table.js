exports.up = function(knex) {
  return knex.schema
      .createTable('recipe_book', tbl => {
          tbl.increments();
          tbl.text('recipe_name', 128).unique().notNullable()
      })
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.text('ingredient_name', 128).unique().notNullable()
          tbl.integer('quantity').notNullable().unsigned();
          tbl
          .integer('recipe_id')
          .unsigned()
          .references('id')
          .inTable('recipe_book')

      })  

      .createTable('instructions', tbl => {
          tbl.increments();
          tbl.integer('steps').unsigned().notNullable();
          tbl.text('instruction').notNullable();
          tbl.integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipe_book')
      })

};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('instructions')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe_ingredient')
      .dropTableIfExists('recipe_book')

};
