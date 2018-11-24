import Schema from 'mongoose'

const createSchema = schema => new Schema(schema)
const createModel = (schema, schemaName) => mongoose.model(schemaName, schema)

export default { createSchema, createModel }