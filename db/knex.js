const environment = process.env.NODE_ENV || 'development'
const config = require('/Users/poli.gonzalez/Desktop/Unfamiliar-Environment-Project/knexfile.js')
module.exports = require('knex')(config)