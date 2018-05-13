let knex = require('./knex.js')

const getAll = tableName => {
    return knex(tableName).select();
}

module.exports = { getAll }