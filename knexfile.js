// Update with your config settings

module.exports = {

    development: {
      client: 'mysql',
      connection:{
            database: 'Books',
            user: process.env.DB_USER,
            password: process.env.DB_PASS
          },
      migrations: {
          directory: '/Users/poli.gonzalez/Desktop/Unfamiliar-Environment-Project/db/migrations'
      },
      seeds: {
          directory: 'db/Users/poli.gonzalez/Desktop/Unfamiliar-Environment-Project/db/seeds'
      }
    },
  };
  