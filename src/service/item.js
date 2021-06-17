const Item = require('../db/model/item')

async function addItemService({ title, description, userid, listid, status }) {
  const rst = await Item.create({
    title,
    description,
    userid,
    listid,
    status
  })
  return rst.dataValues
}

module.exports = {
  addItemService,
}