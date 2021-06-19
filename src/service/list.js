const List = require('../db/model/list')
const Item = require('../db/model/item')

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
  // 级联删除，先删除关联的子项，后删除列表
  await Item.destroy({
    where: {
      listid
    }
  })
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