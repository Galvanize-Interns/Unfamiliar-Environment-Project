async function clear(knex) {
	await knex('book').del()
  };
  
  async function seed(knex) {
	await clear(knex)
	await knex('book').insert({
	  id: ID,
	  title: 'Test action one',
	  complete: false
	});
  
	await knex('book').insert({
	  id:ID,
	  title: 'Test action two',
	  complete: false
	});
  };
  
  module.exports = { clear, seed }