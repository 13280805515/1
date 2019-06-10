/*
	本游戏基于2020届京津鲁琼选课新课标高考系统
*/
function gameScript()
{
	this.gameSelection=0;
	this.gameMode=0;
	this.selectMode(Mode,Selected)
	{
		gameMode=Mode;
		gameSelection=Selected;
	};
	this.gameModeChoice=
	{
		Student:0,
		Teacher:1
	}
	this.getChoiceById(Id)//0~学生 1~教师
	{
		if(Id==0)
			return "Student";
		else
			return "Teacher";
	}
	this.getSelectionById(Id)
	{
		
	}
}