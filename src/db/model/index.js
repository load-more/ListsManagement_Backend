const User = require('./user')
const List = require('./list')
const Item = require('./item')

// 创建外键，使得查询List，可以关联User
List.belongsTo(User, {
  foreignKey: 'userid'
})

// 创建外键，使得查询User，可以关联List
User.hasMany(List, {
  foreignKey: 'userid'
})

// 创建外键，使得查询Item，可以关联List
Item.belongsTo(List, {
  foreignKey: 'listid'
})

// 创建外键，使得查询List，可以关联Item
List.hasMany(Item, {
  foreignKey: 'listid'
})