const Router = require('koa-router')
import { PointController } from './../../controller'

const router = new Router()

router.prefix('/point')
    .get('/pointId', PointController)

export default router