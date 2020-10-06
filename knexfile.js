// Update with your config settings.

module.exports = {
  // configuration for the development environment 
  development: {
    client: 'sqlite3',
    connection: {
      //filename: './dev.sqlite3'   // while file the code is using 
      filename: './database/food.db3',
    },
    useNullAsDefault: true      // required for sqlite3 ONLY
  },

  // Luis deleted staging
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

  // configuration for rthe production environment db connection

  production: {
    client: 'pg',
    connection: {
      host: 'postgresql://pgontheweb.com',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
