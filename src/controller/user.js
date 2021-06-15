const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  getUserInfo,
  createUser,
  deleteUser
} = require('../service/user')
const {
  registerUsernameExistInfo,
  registerUsernameNotExistInfo,
  registerFailedInfo,
  loginFailedInfo,
  removeUserErrorInfo
} = require('../model/ErrorInfo')

async function isExist(username) {
  const userInfo = await getUserInfo(username)
  if (userInfo) { // 如果存在userInfo
    return new SuccessModel(userInfo)
  }
  return new ErrorModel(registerUsernameNotExistInfo)
}

async function register({ username, password, nickname }) {
  const userInfo = await getUserInfo(username)
  if (userInfo) { // 用户名已存在
    return new ErrorModel(registerUsernameExistInfo)
  }
  try {
    const rst = await createUser({ username, password, nickname })
    return new SuccessModel(rst)
  } catch (ex) {
    console.error(ex)
    return new ErrorModel(registerFailedInfo)
  }
}

async function login(ctx, username, password) {
  const userInfo = await getUserInfo(username, password)
  if (!userInfo) { // 登录失败
    return new ErrorModel(loginFailedInfo)
  }
  return new SuccessModel(userInfo)
}

module.exports = {
  isExist,
  register,
  login,
}