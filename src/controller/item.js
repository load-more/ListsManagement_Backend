const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  addItemService
} = require('../service/item')
const {
  addItemErrorInfo
} = require('../model/ErrorInfo')

async function addItem({ title, description, userid, listid, status }) {
  const rst = await addItemService({ title, description, userid, listid, status })
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(addItemErrorInfo)
}

module.exports = {
  addItem,
}