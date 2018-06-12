/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {optionsInstance, optionsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<optionsInstance, optionsAttribute>('options', {
		optionId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'optionId'
		},
		questionId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'questionId'
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'value'
		},
		isAnswer: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'isAnswer'
		}
	}, {
		tableName: 'options',
		timestamps: false
	});
};
