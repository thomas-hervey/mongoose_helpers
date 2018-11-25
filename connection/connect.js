const { connect, connection } = require('mongoose')

function connectDB(address, port, database) {
	const mongo_address = `mongodb://${address}:${port}/${database}`
	connect(mongo_address)

  mongoose.Promise = global.Promise // Get Mongoose to use the global promise library

  const db = connection

  db.on('connected', () => {
		console.log(`Mongoose default connection open to ${mongo_address}`)
	})

  db.on('error', console.error.bind(console, 'connection error:'))

  db.on('disconnected', () => {
		console.log(
			`Mongoose default connection disconnected from ${mongo_address}`
		)
	})

  return db
}

module.exports = connectDB
