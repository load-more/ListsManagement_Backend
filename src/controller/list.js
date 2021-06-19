const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  createListService,
  editListService,
  deleteListService
} = require('../service/list')
const {
  getAllListsService,
} = require('../service/user')
const {
  createListErrorInfo,
  getAllListsErrorInfo,
  editListErrorInfo,
  deleteListErrorInfo
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

async function editList({ listid, title, description }) {
  const rst = await editListService({ listid, title, description })
  if (rst[0]) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(editListErrorInfo)
}

async function deleteList(listid) {
  const rst = await deleteListService(listid)
  if (rst) {
    return new SuccessModel(rst)
  }
  return new ErrorModel(deleteListErrorInfo)
}

module.exports = {
  createList,
  getAllLists,
  editList,
  deleteList,
}