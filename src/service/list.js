const List = require('../db/model/list')

async function createListService({ title, description, userid }) {
  const rst = await List.create({
    title,
    description,
    userid
  })
  return rst.dataValues
}

async function editListService({listid, title, description}) {
  const rst = await List.update({
    title,
    description
  }, {
    where: {
      id: listid
    }
  })
  return rst
}

async function deleteListService(listid) {
  const rst = await List.destroy({
    where: {
      id: listid
    }
  })
  return rst
}

module.exports = {
  createListService,
  editListService,
  deleteListService,
}