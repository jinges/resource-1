/*
 * @Author: 大明冯 
 * @Date: 2018-01-11 10:23:11 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-06 12:20:20
 */

import question from './resource/question_router'
import option from './resource/option_router'
import subject from './resource/subject_router'
import point from './resource/point_router'

const routes: Array<Object> = [question, option, subject, point]

export default ((app: any) => {
  routes.forEach((route: any) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
})