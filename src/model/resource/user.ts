/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userInstance, userAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<userInstance, userAttribute>('user', {
		userId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'userID'
		},
		openId: {
			type: DataTypes.STRING(200),
			allowNull: false,
			unique: true,
			field: 'openID'
		},
		nickName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'nickName'
		},
		avatarUrl: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'avatarUrl'
		},
		gender: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'gender'
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'city'
		},
		province: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'province'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createDate'
		}
	}, {
		tableName: 'user',
		timestamps: true
	});
};
