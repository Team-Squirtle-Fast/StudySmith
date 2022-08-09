const personalURI = 'postgres://pzllqlln:E2fKwbQhwCUYMjXZul51bFBNu4HAfq0i@lallah.db.elephantsql.com/pzllqlln'

const URI = process.env.PG_URI || personalURI;

module.exports = URI