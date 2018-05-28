/*
 * @Author: 大明冯 
 * @Date: 2017-12-16 11:09:55 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2017-12-18 14:55:48
 */

export default () => {
  return async (ctx: any, next: any) => {
    await next().catch((err: any) => {
      ctx.body = {
        errcode: 1,
        message: err.message,
      };
    })
  }
}
