import { bulkWrite } from 'mongoose';

const bulkUpdateIndividuals = async (Model, records, filter, updateFunction) => {

  try {
    const res = await Model.bulkWrite(
      records.map((record) => {
        return {
          updateOne: {
            filter: () =>  `${filter}` : filter,
            update: updateFunction(record),
            upsert: true
          }
        }
      })
    )

    console.log(`res: ${res}`)

  } catch (error) {
    console.log(`${Model.collection.collectionName}.bulkWrite error: ${err}`)
  }
}

export default bulkUpdateIndividuals