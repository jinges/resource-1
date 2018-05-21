/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 10:11:23
 */

import { sequelize, model, Op, Sequelize} from './../../model';
import { questionAttribute } from './../../model/resource/db';

class Question{
  async createQuestion(obj: questionAttribute){
    console.log(obj)
    return model.question.findOrCreate({ where: { questionTags: obj.questionTags}, defaults: obj})
  }

  async updateQuestion(questionId: number, obj: questionAttribute) {
    return model.question.update(obj, {where: {questionId}});
  }

  async getPointByLevel(level: number, parentId: string) {
    let sql = '';
    let where = ' 1=1 ';
    if (level > 1) {
      where += `AND PointCode LIKE '${parentId}%'`;
    }
    sql = `SELECT  PointCode,Name FROM questioncurriculumpoint ${where} AND Level=@Level  ORDER BY Sequence `;
    var msgTotalCount = await sequelize.query(sql, {
      plain: true,
      type: Sequelize.QueryTypes.SELECT
    }).then(data => data);
  }
}

export default new Question()