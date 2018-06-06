/*
 * @Author: 大明冯 
 * @Date: 2017-12-16 08:45:05 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-04 16:33:58
 */

const koabody = require('koa-bodyparser')
const koalog = require('koa-logger')

import pipeMiddleware from './pipeMiddleware'
import crosMiddleware from './crosMiddleware'
import finalMiddleware from './finalMiddleware'
import verifyTokenMiddleware from './verifyTokenMiddleware'



export default (app:any) => {
  app.use(koabody())
  app.use(koalog())

  app.use(crosMiddleware())
  app.use(finalMiddleware())
  app.use(pipeMiddleware())
  app.use(verifyTokenMiddleware)
}