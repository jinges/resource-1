import { getNewPontId } from '../../common/util';
import { pointService } from './../../service';

class PointController {
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
    const maxPoint = await pointService.getPointByLevel(level, parentId);
    let id = maxPoint ? maxPoint.pointID : 0;
    let pId = getNewPontId(id == null ? 0 : id, parentId, level);
    //根据级别返回完整知识点ID
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
export default new PointController()