const Router = require('koa-router')
import { PointController } from './../../controller'

const router = new Router()

router.prefix('/point')
    .post('/add', PointController.addPoint)

export default router