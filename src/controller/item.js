const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  addItemService,
  editItemService
} = require('../service/item')
const {
  addItemErrorInfo,
  editItemErrorInfo
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
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(editItemErrorInfo)
}

module.exports = {
  addItem,
  editItem
}