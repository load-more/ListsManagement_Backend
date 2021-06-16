const List = require('../db/model/list')

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

async function createListService({ title, description, userid }) {
  const rst = await List.create({
    title,
    description,
    userid
  })
  return rst.dataValues
}

module.exports = {
  createListService,
}