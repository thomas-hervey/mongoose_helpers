const { connectDB } = require('./connection')
const { bulkUpdateIndividuals, addField } = require('./update')
const { iterateCollection, listDuplicates } = require('./utils')

module.exports = {
  connectDB,
  bulkUpdateIndividuals,
  addField,
  iterateCollection,
  listDuplicates
}