/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 14:23:49 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 14:38:12
 */

 import { SubjectService } from './../../service';
 import { subjectTypeAttribute } from './../../model/resource/db';

class SubjectController {
  async editSubject(ctx: any){
    const obj: subjectTypeAttribute = ctx.request.body;
    const res = await SubjectService.editSubject(obj);
    ctx.success(res)
  }

  async findSubject(ctx: any) {
    const {id} = ctx.query;
    let params: any
    if(id) {
      params = {id}
    }
    const res = await SubjectService.findSubject(params)
    ctx.success(res);
  }
}

export default new SubjectController()

