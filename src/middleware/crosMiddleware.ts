/*
 * @Author: 大明冯 
 * @Date: 2017-12-16 23:32:31 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2017-12-18 14:56:09
 */

export default () => {
  return async (ctx: any, next: any) => {
    await next();
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-type');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    ctx.set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Credentials', true)
  };
}