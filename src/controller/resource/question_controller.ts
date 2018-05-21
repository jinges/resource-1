/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-16 16:28:42
 */

import { questionAttribute } from './../../model/resource/db';
import { questionService } from './../../service';

class QuestionController{
  async editQuestion(ctx: any){
    const { questionId, tags, pointId, qType, answer } = ctx.request.body;
    const params: questionAttribute = { questionId, questionTags: tags, pointId, qType, answer };
    console.log({ questionId, tags, pointId, qType })
    // if (questionId) {
    //   Object.assign(params, { questionId})
    //   return questionService.updateQuestion(questionId, params)
    // }
    return questionService.createQuestion(params);
  }

  async ad(){
    
  }
}

export default new QuestionController()
