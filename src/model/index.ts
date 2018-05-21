/*
 * @Author: 大明冯 
 * @Date: 2018-01-16 11:47:43 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-05-16 15:21:38
 */

import * as Sequelize from 'sequelize'
import * as table from './resource/db.tables'
import config from './../config'

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.dbCongig
)

const model = table.getModels(sequelize)

const Op = Sequelize.Op

export { Sequelize, sequelize, model, Op}