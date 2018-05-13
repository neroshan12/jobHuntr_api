require('dotenv').config();

const path = require('path');
const BASE_PATH = path.join(__dirname, 'db');
const DATABASE = process.env.DATABASE_NAME

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:5432/${DATABASE}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds/dev'),
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds/dev'),
    }
  }

};