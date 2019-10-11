exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      ingredient_name: 'pasta',
      quantity: 1,
      recipe_id: 2
    },
    {
      ingredient_name: 'dough',
      quantity: 1,
      recipe_id: 1
    },
    {
      ingredient_name: 'sauce',
      quantity: 1,
      recipe_id: 1
    },
    {
      ingredient_name: 'meat',
      quantity: 3,
      recipe_id: 2
    },

  ]);
};