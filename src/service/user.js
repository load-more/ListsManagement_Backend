const List = require('../db/model/list')
const User = require('../db/model/user')
const Item = require('../db/model/item')

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

async function getAllListsService(userid) {
  // 连表查询，获取用户所有列表，其中包含列表和子项
  const rst = await User.findAndCountAll({
    where: {
      id: userid
    },
    include: [
      {
        association: User.hasMany(List, {
          foreignKey: 'userid'
        }),
        include: [
          {
            association: List.hasMany(Item, {
              foreignKey: 'listid'
            }),
          }
        ]
      },
    ]
  })
  if (!rst.count) {
    return 0
  }
  const res = {}
  const temp = rst.rows[0].dataValues
  res.id = temp.id
  res.username = temp.username
  res.nickname = temp.nickname
  res.lists = []
  temp.lists.forEach(item => {
    const temp = item.dataValues
    temp.items = []
    item.items.forEach(i => {
      temp.items.push(i.dataValues)
    })
    res.lists.push(temp)
  })
  console.log(res.lists[2].items);
  // return res
}

module.exports = {
  getUserInfo,
  createUser,
  getAllListsService
}