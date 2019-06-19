exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tautoko")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tautoko").insert([
        {
          id: 41,
          user_id: 11,
          rahui_id: 31
        },
        {
          id: 42,
          user_id: 12,
          rahui_id: 32
        },
        {
          id: 43,
          user_id: 13,
          rahui_id: 33
        },
        {
          id: 44,
          user_id: 14,
          rahui_id: 34
        }
      ]);
    });
};
