/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-06 15:45:14
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { questionAttribute, pointAttribute } from './../../model/resource/db';

class Question {
  async createQuestion(obj: questionAttribute) {
    console.log(obj)
    return model.question.findOrCreate({ where: { questionTags: obj.questionTags }, defaults: obj })
  }

  async updateQuestion(questionId: number, obj: questionAttribute) {
    return model.question.update(obj, { where: { questionId } });
  }

  async selectQuestion(params: any, pageIndex: number = 1, pageSize: number = 10) {
    return sequelize.query(`SELECT * FROM  question q 
      INNER JOIN point p
      ON q.pointID = p.pointId
      INNER JOIN subject_type s
      ON s.Id = q.qType
      ${params}
      ORDER BY q.questionID DESC
      LIMIT ${(pageIndex - 1) * pageSize}, ${pageSize}`,
      {
        type: sequelize.QueryTypes.SELECT
      }
    )
  }

  async questionCount(params: any, pageIndex: number = 1, pageSize: number = 10) {
    return sequelize.query(`SELECT COUNT(q.questionId) AS count FROM  question q 
      INNER JOIN point p
      ON q.pointID = p.pointId
      INNER JOIN subject_type s
      ON s.Id = q.qType
      ${params}`,
      {
        type: sequelize.QueryTypes.SELECT
      }
    )
  }
}

export default new Question()