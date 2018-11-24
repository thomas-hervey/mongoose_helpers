const co = require('co') // great util for generators

const iterateCollection = (model, callback, options) => {
	co(function*() {
		const cursor = model.find({}).cursor()
		let counter = 0

		// iterate cursor documents
		for (
			let doc = yield cursor.next()
			doc != null
			doc = yield cursor.next()
		) {
			callback(model, doc, options) // call callback with model and current doc

			// sanity check for current doc
      counter ++
			if (counter % 10000 === 0) {
				console.log(`Current ${model.collection.collectionName} cursor doc iteration: `, counter)
			}
		}
	})
}

export default iterateCollection
