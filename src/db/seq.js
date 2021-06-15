const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')

// 传入数据库名称，用户名，密码，配置
const seq = new Sequelize(
  MYSQL_CONF.table,
  MYSQL_CONF.username,
  MYSQL_CONF.password,
  MYSQL_CONF.config
)

// 测试连接
seq.authenticate().then(() => {
  console.log('mysql连接成功！');
}).catch(() => {
  console.log('mysql连接失败！');
})

module.exports = seq