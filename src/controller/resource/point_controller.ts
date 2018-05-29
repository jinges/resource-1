import { getNewPontId } from '../../common/util';
import { pointService } from './../../service';
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
        const res = await pointService.setPoint(condition);
        ctx.success(res);
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
    const maxPoint = await pointService.getPointByLevel(level, parentId);
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


// async function addPoint(obj: any) {
//     const { pointName, periodID, curriculumID, pointCode1, pointCode2, pointCode3, level } = obj;
//     let condition: any = {
//         pointID: strPointCode(level * 1, pointCode1, pointCode2),
//         pointName,
//         periodID,
//         curriculumID,
//         pointCode1,
//         pointCode2,
//         level,
//         createDate: new Date
//     };
//     pointService.setPoint(condition);
// }
export default new PointController()