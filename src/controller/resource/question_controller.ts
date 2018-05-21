/*
 * @Author: 大明冯 
 * @Date: 2018-05-16 15:24:21 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-21 12:10:24
 */

import { questionAttribute } from './../../model/resource/db';
import { questionService } from './../../service';

class QuestionController{
  async editQuestion(ctx: any){
    const obj = ctx.request.body;
    let res:any;
    console.log(obj)
    if (obj.questionId) {
      res = await questionService.updateQuestion(obj.questionId, obj)
    } else {
      res = await questionService.createQuestion(obj);
    }
    ctx.success(ctx)
  }

    //根据级别创建知识的ID
    async strPointCode(level:number,pointCode1?:string,pointCode2?:string) {
      const parentId='';
      switch(level)
      {
        case 1:
          parentId =='';
          break;
        case 2:
          parentId == pointCode1;
          break;
        case 3:
          parentId == pointCode2;
          break;
      }
      let pointList=await questionService.getPointByLevel(level,parentId);
  
      return parentId;
    }
}

export default new QuestionController()
