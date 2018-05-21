/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {subjectTypeInstance, subjectTypeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<subjectTypeInstance, subjectTypeAttribute>('subjectType', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Id'
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'Name'
		}
	}, {
		tableName: 'subject_type',
		timestamps: true
	});
};
