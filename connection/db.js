const { Pool } = require('pg')

const dbPool = new Pool({
    database: 'test',
    port: 5432,
    user: 'postgres',
    password: 'dimasdimas'
})

module.exports = dbPool