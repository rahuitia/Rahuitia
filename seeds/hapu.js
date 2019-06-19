exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("hapu")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hapu").insert([
        
        {
          id: 81,
          user_id: 11,
          hapu_name: JSON.stringify(["Ngati Kuta", "Patukeha ki Te Rawhiti"])  
        },
        {
          id: 82,
          user_id: 12,
          hapu_name: JSON.stringify(["Ngati Kere", "Ngati Kere" ])
        },
        {
          id: 83,
          user_id: 13,
          hapu_name: JSON.stringify(["Ngāti Ueroa", "Ngati Kere" ])
        },
        {
          id: 84,
          user_id: 14,
          hapu_name: JSON.stringify(["Takapuwahia", "Ngāti Taukaka" ])
        }
      ]);
    });
};