/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 10:13:46
 */

import { questionAttribute } from './../../model/resource/db';
import { questionService } from './../../service';

class QuestionController{
  async editQuestion(ctx: any){
    const obj = ctx.request.body;
    let res:any;
    console.log(obj)
    if (obj.questionId) {
      res = await questionService.updateQuestion(obj.questionId, obj)
    } else {
      res = await questionService.createQuestion(obj);
    }
    console.log(res)
    ctx.success(ctx)
  }
}

export default new QuestionController()
