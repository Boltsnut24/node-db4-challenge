exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    {
      steps: 1,
      instruction:'Put sauce on dough. Then cheese. Then meat. Now bake.',
      recipe_id: 1
    },
    {
      steps: 1,
      instruction: 'Boil Pasta, Add sauce, add meat.',
      recipe_id: 2
    }
  ]);
};