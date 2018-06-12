/*
 * @Author: 大明冯 
 * @Date: 2018-05-21 14:44:52 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-12 22:54:31
 */

import { sequelize, model, Op, Sequelize } from './../../model';
import { optionsAttribute } from './../../model/resource/db';
import { Transaction } from 'sequelize';

class OptionService {
  async editOption(obj: any, t?: Transaction){
    let params: any = {};
    if (t) {
      Object.assign(params, { transaction: t })
    }
    if (obj.optionId) {
      Object.assign(params, { where: { optionId: obj.optionId } })
      return await model.options.update(obj, params)
    } else {
      Object.assign(params, { where: {value: obj.value}, defaults: obj })
      console.log(obj)
      return await model.options.findOrCreate(params)
    }
  }

  async findOptions(questionId: number) {
    return sequelize.query(`SELECT * FROM options WHERE questionId = ${questionId}`, {
      type: sequelize.QueryTypes.SELECT
    })
  }
}

export default new OptionService();
