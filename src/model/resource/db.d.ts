// tslint:disable
import * as Sequelize from 'sequelize';


// table: options
export interface optionsAttribute {
	optionId:number;
	questionId:number;
	value:string;
	isAnswer:boolean;
}
export interface optionsInstance extends Sequelize.Instance<optionsAttribute>, optionsAttribute { }
export interface optionsModel extends Sequelize.Model<optionsInstance, optionsAttribute> { }

// table: point
export interface pointAttribute {
	pointId:string;
	pointName?:any;
	periodId:number;
	curriculumId:number;
	pointCode1?:string;
	pointCode2?:string;
	pointCode3?:string;
	level:number;
	createDate:Date;
}
export interface pointInstance extends Sequelize.Instance<pointAttribute>, pointAttribute { }
export interface pointModel extends Sequelize.Model<pointInstance, pointAttribute> { }

// table: question
export interface questionAttribute {
	questionId?:number;
	questionTags:string;
	pointId:number;
	createDate?:Date;
	qType:number;
	answer:string;
}
export interface questionInstance extends Sequelize.Instance<questionAttribute>, questionAttribute { }
export interface questionModel extends Sequelize.Model<questionInstance, questionAttribute> { }

// table: user
export interface userAttribute {
	userId:number;
	openId:string;
	nickName:string;
	avatarUrl:string;
	gender:boolean;
	city:string;
	province:string;
	createDate:Date;
}
export interface userInstance extends Sequelize.Instance<userAttribute>, userAttribute { }
export interface userModel extends Sequelize.Model<userInstance, userAttribute> { }

// table: subjectType
export interface subjectTypeAttribute {
	id:number;
	name:string;
}
export interface subjectTypeInstance extends Sequelize.Instance<subjectTypeAttribute>, subjectTypeAttribute { }
export interface subjectTypeModel extends Sequelize.Model<subjectTypeInstance, subjectTypeAttribute> { }
