/*
	本游戏基于2020届京津鲁琼选课新课标高考系统
	本类库是分数系统：
		level：等级
				C等级	普高线
				A等级	自招线
		以学科英文名首字母大写命名的成员：各科目分数
*/

const global_subjectIndex={//全局_学科索引
	Chinese:1,
	English:2,
	Math:3,
	History:4,
	Geography:5,
	Politics:6,
	Physics:7,
	Chemistry:8,
	Biology:9
}
function gameScore() {
	this.level = "E";
	this.Chinese = 0;
	this.English = 0;
	this.Math = 0;
	this.History = 0;
	this.Geography = 0;
	this.Politics = 0;
	this.Physics = 0;
	this.Chemistry = 0;
	this.Biology = 0;
	this.Subject = [global_subjectIndex.Physics, global_subjectIndex.Chemistry, global_subjectIndex.Biology];
	this.UpdateGameLevel=()=>{};
}