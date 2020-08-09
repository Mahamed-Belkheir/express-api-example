const { Pool } = require('pg')

dbConfig = {
    user: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASS || 'password',
    database: process.env.POSTGRES_DB || 'example_db',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432
}

const pool = new Pool(dbConfig)


module.exports = pool