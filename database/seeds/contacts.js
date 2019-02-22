
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          contacts_id:1,
          name:"guyman23",
          address:"guyman23s address",
          mobile:"guyman23s mobile device",
          email:"guyman23@hotmail.com",
          twitter:"guyman23"
        },
        {
          contacts_id:2,
          name:"gene",
          address:"genes address",
          mobile:"genes mobile device",
          email:"genegenie@hotmail.com",
          instagram:"king_gene",
          twitter:"virtualgene"
        },
        {
          contacts_id: 3,
          name:"tyler",
          address:"tylers address",
          mobile:"tylers mobile device",
          email:"guytyler23@hotmail.com",
          twitter:"alexithemia"
        },
        {
          contacts_id:4,
          name:"brad",
          address:"brads address",
          mobile:"brads mobile device",
          email:"badmckinney@hotmail.com",
          twitter:"imbadmckinney"
        }
      ]);
    });
};
