
import { pointAttribute } from './../../model/resource/db';
import { sequelize, model, Op, Sequelize } from './../../model';

class point {
  /**
   * 根据级别和父级ID查询知识点所有ID列表
   * @param level 级别
   * @param parentId 父级ID
   */
  async getPointByLevel(level: number, parentId: string) {
    let params = `WHERE level = ${level}   AND`;
    if (level > 1) {
      params += ` pointId LIKE '${parentId}%'   AND`
    }
    
    params = params.substr(0, params.length - 5)
    return await sequelize.query(`SELECT pointId FROM point ${params} ORDER BY createDate DESC LIMIT 1 `, {
      type: sequelize.QueryTypes.SELECT,
      plain: true,
      raw: true,
    })
  }

  /**
   * 添加知识点
   * @param point 
   */
  async addPoint(point: pointAttribute) {
    return await model.point.create(point);
  }

  async updatePoint(point: pointAttribute, pointId: string) {
    return await model.point.update(point, {where: {pointId}})
  }

  /**
   * 根据条件查询记录
   * @param params 
   * @param pageIndex 
   * @param pageSize 
   */
  async selectPoint(params: any, pageIndex: number = 1, pageSize: number = 10) {
    return await sequelize.query(`SELECT * FROM point
      ${params}
      ORDER BY pointId DESC
      LIMIT ${(pageIndex - 1) * pageSize}, ${pageSize}`,
      {
         type: sequelize.QueryTypes.SELECT
      })
  }
  
  /**
   * 根据条件查询记录总条数
   * @param params 
   */
  async pointCount(params: any) {
    return await sequelize.query(`SELECT COUNT(pointId) AS count FROM point
      ${params}`,
      {
        type: sequelize.QueryTypes.SELECT
      })
  }
}
export default new point()