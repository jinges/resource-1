/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 14:39:49 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 14:40:35
 */

const Router = require('koa-router')
import { SubjectController } from './../../controller'

const router = new Router()

router.prefix('/subject')
  .post('/edit', SubjectController.editSubject)
  .get('/list', SubjectController.findSubject)

export default router