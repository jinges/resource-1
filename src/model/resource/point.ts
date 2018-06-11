/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pointInstance, pointAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<pointInstance, pointAttribute>('point', {
		pointId: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'pointId'
		},
		pointName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'pointName'
		},
		periodId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'periodId'
		},
		curriculumId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'curriculumId'
		},
		pointCode1: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'pointCode1'
		},
		pointCode2: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'pointCode2'
		},
		level: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			field: 'level'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createDate'
		}
	}, {
		tableName: 'point',
		timestamps: false
	});
};
