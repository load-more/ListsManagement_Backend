const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  createListService,
} = require('../service/list')
const {
  getAllListsService,
} = require('../service/user')
const {
  createListErrorInfo,
  getAllListsErrorInfo
} = require('../model/ErrorInfo')

async function createList({ title, description, userid }) {
  const rst = await createListService({ title, description, userid })
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(createListErrorInfo)
}

async function getAllLists(userid) {
  const rst = await getAllListsService(userid)
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(getAllListsErrorInfo)
}

module.exports = {
  createList,
  getAllLists,
}