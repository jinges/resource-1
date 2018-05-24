/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:31:59 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 10:29:43
 */


const Router = require('koa-router')
import { QuestionController } from './../../controller'

const router = new Router()

router.prefix('/question')
  .post('/edit', QuestionController.editQuestion)
  .get('/pointId',QuestionController.strPoint)

export default router