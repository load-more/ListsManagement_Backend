const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  createListService,
} = require('../service/list')
const {
  createListErrorInfo
} = require('../model/ErrorInfo')

async function createList({ title, description, userid }) {
  const rst = await createListService({ title, description, userid })
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(createListErrorInfo)
}

module.exports = {
  createList,
}