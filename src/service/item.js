const Item = require('../db/model/item')

async function addItemService({ title, description, userid, listid, status, category }) {
  const rst = await Item.create({
    title,
    description,
    userid,
    listid,
    status,
    category
  })
  return rst.dataValues
}

async function editItemService({ itemid, title, description, status, category }) {
  const rst = await Item.update({
    title,
    description,
    status,
    category
  }, {
    where: {
      id: itemid
    }
  })
  return rst
}

async function removeItemService(itemid) {
  const rst = await Item.destroy({
    where: {
      id: itemid
    }
  })
  return rst
}

async function finishItemService(itemid) {
  const rst = await Item.update({
    status: 1,
  }, {
    where: {
      id: itemid
    }
  })
  return rst
}

module.exports = {
  addItemService,
  editItemService,
  removeItemService,
  finishItemService
}