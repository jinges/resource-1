/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:09:45 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-16 16:04:21
 */

import { sequelize, model, Op} from './../../model';
import { questionAttribute } from './../../model/resource/db';

class Question{
  async createQuestion(obj: questionAttribute){
    return await model.question.create(obj)
  }

  async updateQuestion(questionId: number, obj: questionAttribute) {
    return await model.question.update(obj, {where: {questionId}});
  }
}

export default new Question()