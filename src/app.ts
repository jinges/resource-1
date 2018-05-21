/*
 * @Author: 大明冯 
 * @Date: 2018-01-11 10:21:43 
 * @Last Modified by:   大明冯 
 * @Last Modified time: 2018-01-11 10:21:43 
 */

import * as Koa from 'koa'
import config from './config'
import router from './routes'
import middleware from './middleware'

const app = new Koa()

middleware(app)

router(app)

app.on('err', (err: any, ctx: any) => {
  console.log('server error', err, ctx)
})

app.listen(config.port, () => console.info(`The server is running at http://localhost:${config.port}/`));