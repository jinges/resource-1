/*
 * @Author: 大明冯 
 * @Date: 2017-12-16 23:02:52 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2017-12-19 18:12:28
 */

const koajwt = require('koa-jwt')
import config from './../config'

export default koajwt({
  'secret': config.secret,
  getToken: (ctx: any)=>{
    const token = ctx.header.auth_token
    return token 
  }
}).unless({
  path: [/^(?!.*\/user\/)/] //数组中的路径不需要通过jwt验证
})