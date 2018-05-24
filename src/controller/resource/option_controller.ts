/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 09:33:31 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-24 10:30:57
 */

import { optionService } from "./../../service";

class OptionController {
  async editOption(ctx: any){
    const params = ctx.request.body;
    const res = await optionService.createOption(params);
    ctx.success(res);
  }

  async optionList(ctx: any) {
    const { questionId } = ctx.query;
    let params = '';
    if (questionId) {
      params = `WHERE questionId = ${questionId}`
    }
    const res = await optionService.findOptions(params)
    ctx.success(res)
  }
}

export default new OptionController()