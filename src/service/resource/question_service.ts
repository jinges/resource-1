/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 10:11:23
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

}


export default new Question()