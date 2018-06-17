/*
 * @Author: 大明冯 
 * @Date: 2018-05-28 10:07:41 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-15 12:00:43
 */

const Router = require('koa-router')
import { PointController } from './../../controller'

const router = new Router()

router.prefix('/point')
  .post('/add', PointController.addPoint)
  .post('/update', PointController.updatePoint)
  .get('/', PointController.selectPoint)

export default router