const { Pool } = require('pg')
require('dotenv').config()

const URI = process.env.personalURI;
console.log('URI', URI)

const pool = new Pool({
    connectionString: URI
  })
  
  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', callback)
      return pool.query(text, params, callback)
    }
  }