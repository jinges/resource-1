/*
 * @Author: 大明冯 
 * @Date: 2018-05-21 14:44:52 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-06 15:39:57
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { optionsAttribute } from './../../model/resource/db';

class OptionService {
  async createOption(obj: optionsAttribute){
    return await model.options.findOrCreate({where: {questionId: obj.questionId, value: obj.value}, defaults: obj})
  }

  async findOptions(questionId: number) {
    return sequelize.query(`SELECT * FROM options WHERE questionId = ${questionId}`, {
      type: sequelize.QueryTypes.SELECT
    })
  }
}

export default new OptionService();
