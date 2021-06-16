const seq = require('../seq')
const { STRING, TEXT, INTEGER } = require('../types')

// 创建 List 模型，数据表的名字是 lists
const List = seq.define('list', {
  // id 会自动创建，并设为主键、自增
  // 自动创建 createdAt、updatedAt
  title: {
    type: STRING, // varchar(255)
    allowNull: false,
    comment: '列表标题，不为空'
  },
  description: {
    type: TEXT,
    allowNull: false,
    comment: '列表描述，不为空'
  },
  userid: {
    type: INTEGER,
    allowNull: false,
    comment: '外键，不为空'
  }
})

module.exports = List