import { getNewPontId } from '../../common/util';
import { PointService } from './../../service';
import { Context } from 'koa';

class PointController {
  async addPoint(ctx: any) {
    const { pointName, periodId, curriculumId, pointCode1, level } = ctx.request.body;
    const intlevel = level * 1;
    console.log(typeof (intlevel));
    const pId = await strPointCode(intlevel, pointCode1);
    let condition: any = {
      pointId: pId,
      pointName,
      periodId,
      curriculumId,
      pointCode1: intlevel == 1 ? pId : pointCode1,
      pointCode2: intlevel == 1 ? '' : pId,
      level,
      createDate: new Date
    };
    const res = await PointService.setPoint(condition);
    ctx.success(res);
  }

  async selectPoint(ctx: any) {
    let { pageIndex, pageSize, level, pointName, periodId, curriculumId} = ctx.query;
    let params = 'WHERE';
    if(level){
      params += ` level = ${level}    AND`
    }
    if (pointName) {
      params += ` pointName LIKE '%${pointName}%'    AND`
    }
    if (periodId) {
      params += ` periodId = ${periodId}    AND`
    }
    if (curriculumId) {
      params += ` curriculumId = ${curriculumId}    AND`
    }
    params = params.substr(0, params.length - 5)
    const count = await PointService.pointCount(params).then(res => {
      if (res.length) {
        return res[0].count
      }
      return 0
    });
    if (!params.length && !pageSize) {
      pageSize = count;
    }
    const rows = await PointService.selectPoint(params, pageIndex, pageSize)
    ctx.success({rows, count})
  }
}

//根据级别创建知识的ID
async function strPointCode(level: number, pointCode1: string) {
  let parentId = '';
  switch (level) {
    case 1:
      parentId = '';
      break;
    case 2:
      parentId = pointCode1;
      break;
  }
  console.log('par', parentId);
  const maxPoint = await PointService.getPointByLevel(level, parentId);
  let id = maxPoint ? maxPoint.pointID : 0;
  let pId = getNewPontId(id, level);
  //根据级别返回完整知识点ID
  switch (level) {
    case 1:
      pId = pId;
      break;
    case 2:
      pId = pointCode1 + pId;
      break;
  }
  return pId;
}

export default new PointController()