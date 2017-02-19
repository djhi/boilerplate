const config = require('config');
const omit = require('lodash.omit');

// This file will build a db-migrate configuration especially for database creation
// In this specific case, we must set the database property to the default postgres database,
// otherwise, it will try to connect to our application's database which doesn't exist yet.

// Don't set it to undefined or null either, as postgres will then defaults to the current OS user
const dev = Object.assign({}, omit(config.db, 'database'), {
    database: 'postgres',
});

module.exports = {
    dev,
};
