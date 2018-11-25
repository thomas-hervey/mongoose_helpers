
const listDuplicates = (Model, groupAttribute) => {
  const aggregation = Model.aggregate([
    {
      $group: {
        _id: { groupAttribute: `$${groupAttribute}` },
        uniqueIds: { $addToSet: "$_id" },
        count: { $sum: 1 }
      }
    },
    {
      $match: {
        count: { "$gt": 1 }
      }
    },
    {
      $sort: {
        count: -1
      }
    }
  ])
  aggregation.options = { allowDiskUse: true }

  return aggregation
}

module.exports = listDuplicates
