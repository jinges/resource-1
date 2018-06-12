/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-12 22:30:31
 */
import { sequelize } from './../../model'
import { questionAttribute } from './../../model/resource/db';
import { QuestionService, OptionService } from './../../service';
import { getNewPontId } from '../../common/util';
import { Transaction } from 'sequelize';

class QuestionController {
  async editQuestion(ctx: any) {
    const obj = ctx.request.body;
    const res = await sequelize.transaction( (t: Transaction) => {
      let questionTask: any;
      if (obj.questionId) {
        questionTask = QuestionService.updateQuestion(obj.questionId, obj, t)
      } else {
        questionTask = QuestionService.createQuestion(obj, t);
      }
      return questionTask.then((question: any) => {
        let res: any;
        const questionRes = question[0] || question[0].dataValues;
        for (let item of obj.answers) {
          item.questionId = questionRes.questionId || obj.questionId
          res = OptionService.editOption(item, t)
        }
        return res
      }).catch((err: any) => {
        console.log(err.message)
        t.rollback()
        throw new Error();
      })
    })

    ctx.success(res)
  }

  async selectQuestion(ctx: any) {
    const { pageIndex, pageSize, pointId, subjectId, startDate, endDate, questionTags} = ctx.query;
    let params = 'WHERE';

    if(pointId) {
      params += ` q.pointId = ${pointId}   AND`
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
        const questionId = item.questionId;
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
