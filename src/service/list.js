const List = require('../db/model/list')

async function createListService({ title, description, userid }) {
  const rst = await List.create({
    title,
    description,
    userid
  })
  return rst.dataValues
}

module.exports = {
  createListService,
}