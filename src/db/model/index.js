const User = require('./user')
const List = require('./list')

// 创建外键，使得查询List，可以关联User
List.belongsTo(User, {
  foreignKey: 'userid'
})

// 创建外键，使得查询User，可以关联List
User.hasMany(List, {
  foreignKey: 'userid'
})
