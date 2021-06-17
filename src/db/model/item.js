const seq = require('../seq')
const { STRING, TEXT, INTEGER, DECIMAL } = require('../types')

// 创建 Item 模型，数据表的名字是 items
const Item = seq.define('item', {
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
  listid: {
    type: INTEGER,
    allowNull: false,
    comment: '外键，不为空'
  },
  status: {
    type: DECIMAL,
    allowNull: false,
    comment: '状态，不为空，0为to do，1为done，2为deleted'
  }
})

module.exports = Item