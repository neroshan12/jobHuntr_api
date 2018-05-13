exports.up = function (knex, Promise) {
    return knex.schema.createTable('jobs', (table) => {
      table.increments('id').primary();
      table.string('business');
      table.string('role');
      table.date('closing_date'); 
      table.string('location');    
      table.string('link');
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('jobs');
  };