import  mongoose from 'mongoose'
const db = mongoose.connection

// NOTE: this *should* add a new field to the schema and add the field with a default,
// but you MUST go back and update the schema file

// @param Model
// @param: field | object | .name, .initValue
const addField = async (Model, field) => {
	const query = {}
	query[field.name] = { $exists: false }

	const newField = {}
	newField[field.name] = field.initValue

  const doc = { $set: newField }

  // sanity check to tell input query and doc to update
	console.log(`addField query: ${query}`)
	console.log(`addField doc: ${doc}`)

	try {
		await Model.update(
			query,
			doc,
			{ multi: true },
			function(err, raw) {
				if (err) console.log(`Error updating model: ${err}`)

        console.log(`The raw addField response from Mongo was: ${raw}`)
      })
    db.close()
	} catch (err) {
		console.log(`Error addField: ${err}`)
	}
}

export default addField