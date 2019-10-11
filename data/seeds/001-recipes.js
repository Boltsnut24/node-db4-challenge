exports.seed = function(knex, Promise) {

  return knex('recipe_book').insert([
    { 
      recipe_name: 'pizza'
    },
    {
      recipe_name: 'spagetti'
    }      
  ]);
};