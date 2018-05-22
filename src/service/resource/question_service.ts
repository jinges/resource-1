/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 10:11:23
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { questionAttribute } from './../../model/resource/db';

class Question {
  async createQuestion(obj: questionAttribute) {
    console.log(obj)
    return model.question.findOrCreate({ where: { questionTags: obj.questionTags }, defaults: obj })
  }

  async updateQuestion(questionId: number, obj: questionAttribute) {
    return model.question.update(obj, { where: { questionId } });
  }

  /**
   * 根据级别和父级ID查询知识点所有ID列表
   * @param level 级别
   * @param parentId 父级ID
   */
  async getPointByLevel(level: number, parentId: string) {
    let sql = '';
    let WHERE = ' WHERE 1=1 ';
    if (level > 1) {
      WHERE += `AND pointID LIKE '${parentId}%'`;
    }
    sql = `SELECT pointID FROM point ${WHERE} AND Level=${level} ORDER BY createDate DESC LIMIT 1`;
    return await sequelize.query(sql, {
      plain: true,
      type: Sequelize.QueryTypes.SELECT
    })
  }
}

export default new Question()