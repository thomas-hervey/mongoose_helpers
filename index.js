const { connectDB } = require('./connection')
const { bulkUpdateIndividuals, addField } = require('./update')
const { iterateCollection, listDuplicates } = require('./utils')

module.exports = {
  connectDB: connectDB,
  bulkUpdateIndividuals: bulkUpdateIndividuals,
  addField: addField,
  iterateCollection: iterateCollection,
  listDuplicates: listDuplicates
}