/*
 * @Author: 大明冯 
 * @Date: 2017-12-16 08:19:59 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2017-12-16 11:10:49
 */

interface resConfig {
  errcode?: number,
  data?: object,
  msg?: string
}

export default () => {
  return async (ctx: any, next: any) => {
    ctx.success = (data: any, msg: string) => {
      const res: resConfig = { errcode: 0 };
      if (typeof (data) === 'object') {
        res.data = data;
        res.msg = msg
      } else {
        res.msg = data;
      }
      ctx.body = res;
    }
    ctx.error = (err: string) => {
      ctx.body = {
        errcode: 1,
        msg: err
      };
    }
    await next()
  }
}