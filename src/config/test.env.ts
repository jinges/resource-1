/*
 * @Author: 大明冯 
 * @Date: 2017-12-14 09:27:56 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-01-16 14:10:16
 */

const wechat_db = {
  database: 'fl',
  username: 'fl',
  password: 'SiiFFZKfuXxqk0O',
  dbCongig: {
    host: 'mysql1.pstear.com',
    port: 3306,
    dialect: 'mysql',
    sync: { force: true },
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    timezone: '+08:00'
  }
}

const poem_db = {
  database: 'fl_basic',
  username: 'fl',
  password: 'SiiFFZKfuXxqk0O',
  dbCongig: {
    host: 'mysql1.pstear.com',
    port: 3306,
    dialect: 'mysql',
    sync: { force: true },
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    timezone: '+08:00'
  }
}

const api = {
  login: '',
  regist: ''
}

export default {
  port: 8888,
  secret: 'wechat_secret',
  poem_db,
  wechat_db,
  api
}