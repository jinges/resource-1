/*
 * @Author: 大明冯 
 * @Date: 2017-12-14 09:27:56 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-01-16 14:09:38
 */

const db = {
  database: 'resourse_test',
  username: 'root',
  password: 'root',
  dbCongig: {
    host: '192.168.1.49',
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
  port: 80,
  secret: 'wechat_secret',
  db,
  api
}