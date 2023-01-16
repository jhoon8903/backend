require('dotenv').config();
const env = process.env;

const development = {
  username: env.username,
  password: env.password,
  database: env.database,
  host: env.host,
  dialect: 'mysql',
  timezone: '+09:00',
  dateStrings: true,
  logging: false,
};

const test = {
  username: env.username,
  password: env.password,
  database: env.database,
  host: env.host,
  dialect: 'mysql',
  timezone: '+09:00',
  dateStrings: true,
  logging: false,
};

const production = {
  username: env.username,
  password: env.password,
  database: env.database,
  host: env.host,
  dialect: 'mysql',
  timezone: '+09:00',
  dateStrings: true,
  logging: false,
};

module.exports = { development, production, test };
