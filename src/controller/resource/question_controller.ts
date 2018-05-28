/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-28 10:18:23
 */

import { questionAttribute } from './../../model/resource/db';
import { QuestionService } from './../../service';
import { getNewPontId } from '../../common/util';

class QuestionController {
  async editQuestion(ctx: any) {
    const obj = ctx.request.body;
    let res: any;

    if (obj.questionId) {
      res = await QuestionService.updateQuestion(obj.questionId, obj)
    } else {
      res = await QuestionService.createQuestion(obj);
    }
    ctx.success(ctx)
  }
}

export default new QuestionController()
