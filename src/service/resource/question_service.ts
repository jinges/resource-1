/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-11 17:19:05
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { questionAttribute, pointAttribute } from './../../model/resource/db';
import { Transaction } from 'sequelize';

class Question {
  async createQuestion(obj: questionAttribute, t?: Transaction) {
    let params = { where: { questionTags: obj.questionTags }, defaults: obj}
    if(t) {
      Object.assign(params, {transaction: t })
    }
    return model.question.findOrCreate(params)
  }

  async updateQuestion(questionId: number, obj: questionAttribute, t?: Transaction) {
    let params = { where: { questionId }}
    if (t) {
      Object.assign(params, { transaction: t })
    }
    return model.question.update(obj, params);
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