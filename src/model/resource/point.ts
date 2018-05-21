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
			field: 'pointID'
		},
		pointName: {
			type: "VARBINARY(100)",
			allowNull: true,
			field: 'pointName'
		},
		periodId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'periodID'
		},
		curriculumId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'curriculumID'
		},
		pointCode1: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'pointCode1'
		},
		pointCode2: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'pointCode2'
		},
		pointCode3: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'pointCode3'
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
		timestamps: true
	});
};
