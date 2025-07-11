/**
 * Notes: 报名实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2025-12-30 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class JoinModel extends BaseProjectModel {

}

// 集合名
JoinModel.CL = BaseProjectModel.C('join');

JoinModel.DB_STRUCTURE = {
	_pid: 'string|true',
	JOIN_ID: 'string|true',

	JOIN_EDIT_ADMIN_ID: 'string|false|comment=最近修改的管理员ID',
	JOIN_EDIT_ADMIN_NAME: 'string|false|comment=最近修改的管理员名',
	JOIN_EDIT_ADMIN_TIME: 'int|true|default=0|comment=管理员最近修改的时间',
	JOIN_EDIT_ADMIN_STATUS: 'int|false|comment=最近管理员修改为的状态 ',

	JOIN_IS_ADMIN: 'int|true|default=0|comment=是否管理员添加 0/1',

	JOIN_CODE: 'string|true|comment=核验码15位',
	JOIN_IS_CHECKIN: 'int|true|default=0|comment=是否签到 0/1 ',

	JOIN_USER_ID: 'string|true|comment=用户ID',
	JOIN_MEET_ID: 'string|true|comment=预约PK',
	JOIN_MEET_CATE_ID: 'string|true',
	JOIN_MEET_CATE_NAME: 'string|true',
	JOIN_MEET_TITLE: 'string|true|comment=项目',
	JOIN_MEET_DAY: 'string|true|comment=日期',
	JOIN_MEET_TIME_START: 'string|true|comment=时段开始',
	JOIN_MEET_TIME_END: 'string|true|comment=时段结束',
	JOIN_MEET_TIME_MARK: 'string|true|comment=时段标识',

	JOIN_COMPLETE_END_TIME: 'string|false|comment=完整结束时间',

	JOIN_START_TIME: 'int|true|comment=开始时间戳',

	JOIN_CNT: 'int|true|default=0|comment=人数',

	JOIN_NAME_LIST: 'array|true|default=[]',
	JOIN_FORMS_LIST: 'array|true|default=[]|comment=表单',
	/* title:
	   mark:
	   type:
	   val:
	*/

	JOIN_STATUS: 'int|true|default=1|comment=状态 1=预约成功,10=已取消, 99=系统取消',

	JOIN_REASON: 'string|false|comment=审核拒绝或者取消理由',

	JOIN_ADD_TIME: 'int|true',
	JOIN_EDIT_TIME: 'int|true',
	JOIN_ADD_IP: 'string|false',
	JOIN_EDIT_IP: 'string|false',
};

// 字段前缀
JoinModel.FIELD_PREFIX = "JOIN_";

/**
 * 状态 1=预约成功,10=已取消, 99=后台取消 
 */
JoinModel.STATUS = {
	SUCC: 1,
	CANCEL: 10,
	ADMIN_CANCEL: 99
};

JoinModel.STATUS_DESC = {
	SUCC: '预约成功',
	CANCEL: '已取消',
	ADMIN_CANCEL: '系统取消',
};



module.exports = JoinModel;