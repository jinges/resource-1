/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {questionInstance, questionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<questionInstance, questionAttribute>('question', {
		questionId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'questionId'
		},
		questionTags: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'questionTags'
		},
		pointId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'pointId'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'createDate'
		},
		qType: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			field: 'qType'
		},
		answer: {
			type: DataTypes.STRING(10),
			allowNull: false,
			field: 'answer'
		}
	}, {
		tableName: 'question',
		timestamps: false
	});
};
