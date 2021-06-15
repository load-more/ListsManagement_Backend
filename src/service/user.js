const User = require('../db/model/user')

async function getUserInfo(username, password) {
  const whereOpt = { username } // 默认使用用户名查询
  if (password) { // 如果有密码，使用用户名加密码查询
    Object.assign(whereOpt, { password })
  }
  const res = await User.findOne({
    where: whereOpt
  })
  return res
}

async function createUser({ username, password, nickname }) {
  const rst = await User.create({
    username,
    password: password,
    nickname: nickname ? nickname : username,
  })
  return rst.dataValues
}

module.exports = {
  getUserInfo,
  createUser,
}