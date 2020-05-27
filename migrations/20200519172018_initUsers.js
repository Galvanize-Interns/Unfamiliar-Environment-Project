
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
      table.increments()
  })
};

exports.down = function(knex) {
  
};
