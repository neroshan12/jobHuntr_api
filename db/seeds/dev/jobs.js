exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 1, business: 'Facebook', role:'Junior Consumer Data Harvester', closing_date:'2018-01-01', location:'Menlo Park', link:'https://www.facebook.com/careers'},
        {id: 2, business: 'Google', role:'Junior Customer Information Tracker', closing_date:'2018-02-02', location:'Mountain View', link:'https://www.google.com/careers'},
      ]);
    });
};