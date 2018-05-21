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
			field: 'optionID'
		},
		questionId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'questionID'
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'value'
		},
		isAnswer: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'isAnswer'
		}
	}, {
		tableName: 'options',
		timestamps: true
	});
};
