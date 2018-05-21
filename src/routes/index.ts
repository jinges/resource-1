/*
 * @Author: 大明冯 
 * @Date: 2018-01-11 10:23:11 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-16 15:35:01
 */

import question from './resource/question_router'

const routes: Array<Object> = [question]

export default ((app: any) => {
  routes.forEach((route: any) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
})