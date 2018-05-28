import { each } from "bluebird";
import { stringify } from "qs";
import * as _ from "lodash";

/**
 * 生成新知识点Code
 * @param list 知识点ID列表
 * @param parentId 父级ID
 * @param level 级别
 */
export function getNewPontId(maxPointId: number, parentId: string, level: number) {
  maxPointId = parseInt(maxPointId.toString()) + 1 || 1;
  try {
    let newId = '';
    switch (level) {
      case 1:
        newId = _.padStart(maxPointId.toString(), 4, '0');
        break;
      case 2:
      case 3:
        newId = _.padStart(maxPointId.toString(), 3, '0');
        break;
      case 4:
      case 5:
        newId = _.padStart(maxPointId.toString(), 2, '0');
        break;
    }
    return newId;
  } catch (error) {
    return 0;
  }
}
