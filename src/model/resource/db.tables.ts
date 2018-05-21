// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	options:def.optionsModel;
	point:def.pointModel;
	question:def.questionModel;
	subjectType:def.subjectTypeModel;
	user:def.userModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		options: seq.import(path.join(__dirname, './options')),
		point: seq.import(path.join(__dirname, './point')),
		question: seq.import(path.join(__dirname, './question')),
		subjectType: seq.import(path.join(__dirname, './subject_type')),
		user: seq.import(path.join(__dirname, './user')),
	};
	return tables;
};
