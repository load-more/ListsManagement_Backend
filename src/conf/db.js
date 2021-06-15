let MYSQL_CONF // MySQL参数

MYSQL_CONF = {
  table: 'ListManagement',
  username: 'root',
  password: 'jiayou',
  config: {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+08:00'
  }
}

module.exports = {
  MYSQL_CONF
}