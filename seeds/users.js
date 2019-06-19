exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
      
        {
        id: 11,
          first_name: "Robert",
          middle_name: "",
          last_name: "Willoughby",
          address: "whanganui street",
          email: "robert@gmail.com"
        },
        {
          id: 12,
          first_name: "Rangi",
          middle_name: "",
          last_name: "Leaf",
          address: "essex street",
          email: "rangi@gmail.com"
        },
        {
          id: 13,
          first_name: "Aperahama",
          middle_name: "",
          last_name: "Edwards",
          address: "Kensington blvd",
          email: "aperahama@gmail.com"
        },
        {
          id: 14,
          first_name: "Edward",
          middle_name: "",
          last_name: "Ashby",
          address: "Sorghum place",
          email: "edward@gmail.com"
        }
      ]);
    });
};
