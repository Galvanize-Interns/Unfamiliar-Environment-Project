// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection:{
          database: 'Positions',
          user:     'root',
          password: 'Spears03'
        },
    migrations: {
        directory: __dirname + '/migrations'
    },
    seeds: {
        directory: __dirname + '/seeds'
    }
  },
};

// `mysql://localhost:3000/${Positions}`

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
