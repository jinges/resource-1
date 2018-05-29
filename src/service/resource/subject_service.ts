/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 12:00:08 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 16:08:37
 */


import { sequelize, model} from './../../model';
import { subjectTypeAttribute } from './../../model/resource/db'

class SubjectService{
  async editSubject(obj: subjectTypeAttribute){
    return await model.subjectType.findOrCreate({where: {name: obj.name}, defaults: obj})
  }

  async findSubject(params: any) {
    return await model.subjectType.findAll({ where: params})
  }
}

export default new SubjectService()