
import { pointAttribute } from './../../model/resource/db';
import { sequelize, model, Op, Sequelize } from './../../model';

class point {
  /**
   * 根据级别和父级ID查询知识点所有ID列表
   * @param level 级别
   * @param parentId 父级ID
   */
  async getPointByLevel(level: number, parentId: string) {
    let sql = '';
    let WHERE = ' WHERE 1=1 ';
    if (level > 1) {
      WHERE += `AND pointID LIKE '${parentId}%'`;
    }
    sql = `SELECT pointID FROM point ${WHERE} AND Level=${level} ORDER BY createDate DESC LIMIT 1`;
    return await sequelize.query(sql, {
      plain: true,
      raw: true,
      type: Sequelize.QueryTypes.SELECT
    })
  }

  /**
   * 添加知识点
   * @param point 
   */
  async setPoint(point: pointAttribute) {
    return await model.point.create(point);
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