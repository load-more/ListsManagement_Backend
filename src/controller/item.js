const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  addItemService,
  editItemService,
  removeItemService,
  finishItemService
} = require('../service/item')
const {
  addItemErrorInfo,
  editItemErrorInfo,
  removeItemErrorInfo,
  finishItemErrorInfo
} = require('../model/ErrorInfo')

async function addItem({ title, description, userid, listid, status, category }) {
  const rst = await addItemService({ title, description, userid, listid, status, category })
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(addItemErrorInfo)
}

async function editItem({ itemid, title, description, status, category }) {
  const rst = await editItemService({ itemid, title, description, status, category })
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

async function finishItem(itemid) {
  const rst = await finishItemService(itemid)
  if (rst[0]) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(finishItemErrorInfo)
}

module.exports = {
  addItem,
  editItem,
  removeItem,
  finishItem
}