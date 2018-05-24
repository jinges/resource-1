/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 10:28:44 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 10:31:02
 */


const Router = require('koa-router')
import { OptionController } from './../../controller'

const router = new Router()

router.prefix('/option')
  .post('/edit', OptionController.editOption)
  .get('/list', OptionController.optionList)

export default router