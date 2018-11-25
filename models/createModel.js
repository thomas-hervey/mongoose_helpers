const { Schema } = require('mongoose')

const createSchema = schema => new Schema(schema)
const createModel = (schema, schemaName) => mongoose.model(schemaName, schema)

module.exports = { createSchema, createModel }