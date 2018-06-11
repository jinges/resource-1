/*
 * @Author: 大明冯 
 * @Date: 2018-05-21 14:44:52 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-11 17:56:02
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { optionsAttribute } from './../../model/resource/db';
import { Transaction } from 'sequelize';

class OptionService {
  async editOption(obj: optionsAttribute, t?: Transaction){
    // return await model.options.findOrCreate({where: {questionId: obj.questionId, value: obj.value}, defaults: obj})
    let params = {validate: true};
    if (t) {
      Object.assign(params, { transaction: t })
    }
    return await model.options.upsert(obj, params)
  }

  async findOptions(questionId: number) {
    return sequelize.query(`SELECT * FROM options WHERE questionId = ${questionId}`, {
      type: sequelize.QueryTypes.SELECT
    })
  }
}

export default new OptionService();
