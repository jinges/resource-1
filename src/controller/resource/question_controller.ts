/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 12:10:24
 */

import { questionAttribute } from './../../model/resource/db';
import { questionService } from './../../service';
import { getNewPontId } from '../../common/util';

class QuestionController {
  async editQuestion(ctx: any) {
    const obj = ctx.request.body;
    let res: any;
    console.log(obj)
    if (obj.questionId) {
      res = await questionService.updateQuestion(obj.questionId, obj)
    } else {
      res = await questionService.createQuestion(obj);
    }
    ctx.success(ctx)
  }

  async strPoint(ctx: any) {
    const { level, pointCode1, pointCode2 } = ctx.query;
    const res = await strPointCode(level * 1, pointCode1, pointCode2);
    ctx.success(res);
  }


}

//根据级别创建知识的ID
async function strPointCode(level: number, pointCode1: string, pointCode2: string) {
  let parentId = '';
  switch (level) {
    case 1:
      parentId = '';
      break;
    case 2:
      parentId = pointCode1;
      break;
    case 3:
      parentId = pointCode2;
      break;
  }
  console.log('par', parentId);
  const maxPoint = await questionService.getPointByLevel(level, parentId);
  let id = maxPoint ? maxPoint.pointID : 0;
  let pId = getNewPontId(id == null ? 0 : id, parentId, level);
  switch (level) {
    case 1:
      pId = pId;
      break;
    case 2:
      pId = pointCode1 + pId;
      break;
    case 3:
      pId = pointCode1 + pointCode2 + pId;
      break;
  }
  return pId;
}

export default new QuestionController()
