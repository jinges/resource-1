/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:31:59 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-05 18:42:12
 */


const Router = require('koa-router')
import { QuestionController } from './../../controller';

const router = new Router()

router.prefix('/question')
  .post('/edit', QuestionController.editQuestion)
  .get('/', QuestionController.selectQuestion)

export default router