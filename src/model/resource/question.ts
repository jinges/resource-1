/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {questionInstance, questionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<questionInstance, questionAttribute>('question', {
		questionId: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			field: 'questionID'
		},
		questionTags: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'questionTags'
		},
		pointId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'pointID'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
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
		timestamps: true
	});
};
