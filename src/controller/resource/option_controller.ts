/*
 * @Author: 大明冯 
 * @Date: 2018-05-24 09:33:31 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-13 09:08:40
 */

import { OptionService } from "./../../service";

class OptionController {
  async editOption(ctx: any){
    // const params = ctx.request.body;
    // const res = await OptionService(params);
    // ctx.success(res);
  }

  async optionList(ctx: any) {
    const { questionId } = ctx.query;

    const res = await OptionService.findOptions(questionId)
    ctx.success(res)
  }
}

export default new OptionController()