exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("iwi")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("iwi").insert([
        
        {
          id: 102,
          user_id: 11,
          iwi_name: JSON.stringify(["Ngāti Paoa", "Te Atiawa o Te Waka-a-Māui"])
        },
        {
          id: 103,
          user_id: 12,
          iwi_name: JSON.stringify(["Ngāti Korokī Kahukura", "Ngāti Toa Rangatira"])
        },
        {
          id: 104,
          user_id: 13,
          iwi_name: JSON.stringify(["Ngāti Korokī Kahukura", "Muaūpoko"])
        },
        {
          id: 105,
          user_id: 14,
          iwi_name: JSON.stringify(["Te Patukirikiri", "Ngāti Mutunga o Wharekauri"])
        }
      ]);
    });
};