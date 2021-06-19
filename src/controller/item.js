const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  addItemService,
  editItemService,
  removeItemService
} = require('../service/item')
const {
  addItemErrorInfo,
  editItemErrorInfo,
  removeItemErrorInfo
} = require('../model/ErrorInfo')

async function addItem({ title, description, userid, listid, status }) {
  const rst = await addItemService({ title, description, userid, listid, status })
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(addItemErrorInfo)
}

async function editItem({ itemid, title, description, status }) {
  const rst = await editItemService({ itemid, title, description, status })
  if (rst[0]) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(editItemErrorInfo)
}

async function removeItem(itemid) {
  const rst = await removeItemService(itemid)
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(removeItemErrorInfo)
}

module.exports = {
  addItem,
  editItem,
  removeItem
}