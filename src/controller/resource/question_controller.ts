/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-06 15:53:42
 */

import { questionAttribute } from './../../model/resource/db';
import { QuestionService } from './../../service';
import { getNewPontId } from '../../common/util';

import { OptionService } from "./../../service";

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

  async selectQuestion(ctx: any) {
    const { pageIndex, pageSize, pointId, subjectId, startDate, endDate, questionTags} = ctx.query;
    let params = 'WHERE';

    if(pointId) {
      params += ` q.pointID = ${pointId}   AND`
    }
    if(subjectId) {
      params += ` q.qType = ${subjectId}   AND`
    }
    if(questionTags) {
      params += ` q.questionTags LIKE '%${questionTags}%'   AND`
    }
    if (startDate && endDate) {
      params += ` TO_DAYS(q.createDate) - TO_DAYS(${startDate}) >=1 AND TO_DAYS(q.createDate) - TO_DAYS(${endDate}) < 1   AND`
    }
    params = params.substr(0, params.length - 5)

    const rows = await QuestionService.selectQuestion(params, pageIndex, pageSize);
    if(rows.length) {
      for(let item of rows) {
        const questionId = item.questionID;
        const answers = await OptionService.findOptions(questionId);
        item.answers = answers;
      }
    }
    const count = await QuestionService.questionCount(params).then(res => {
      if(res.length) {
        return res[0].count
      }
      return 0
    });
    ctx.success({rows, count})
  }
}
export default new QuestionController()
