
var global_Character= new gameCharacter;
/*
	本游戏基于2020届京津鲁琼选课新课标高考系统
	本类库是游戏控制系统：
		runGame：游戏运行函数
		getSubjectById：通过ID得到学科	内部ID与“显式命名”互换
		tagsList：在document.main这个<div>中新增的元素
		addNewProblem(Describe,CountOfNumber,Answer,Solution,Subject)：新增一道题目，描述是Describe，有CountOfNumber个选项，答案由Answer决定，显示Solution答案，隶属于Subject（学科ID）展现按照(char) ((int)"A"+i)的方式
		addNewSelection(Describe,SelectFunction)：新增一个选择，描述是Describe，有SelectFunction.length个选项，每个选项的行为由SelectFunction决定，展现按照(char) ((int)"A"+i)的方式
		addNewStory()：将NewStory这段由HTML写成的故事显示在页面上
		以学科英文名首字母大写命名的成员：各科目分数
*/

function gameEngine()//游戏控制
{
	this.runGame=function()
	{
		global.addNewProblem("已知集合A={1，2}，集合B满足A∪B={1，2}，则集合B有______个．<br>A.1,B.2,C.4,D.3",4,2,"∵集合A={1，2}有两个元素，<br>若A∪B={1，2}，则B⊆A<br>故满足条件的集合B有22=4个<br>故答案为：C","Chinese");
	};
	//var score=new Score();
	this.getSubjectById=function(Id)//通过ID得到学科
	{
		switch (Id)
		{
			case 1:
				return "Chinese";
			case 2:
				return "English";
			case 3:
				return "Math";
			case 4:
				return "History";
			case 5:
				return "Geography";
			case 6:
				return "Politics";
			case 7:
				return "Physics";
			case 8:
				return "Chemistry";
			case 9:
				return "Biology";
			default:
				return undefined;
		}
	};

	this.tagsList=new Array();
	//tagsOnClick=[];
	this.addNewProblem=function(Describe,CountOfNumber,Answer,Solution,Subject)
	{
		var main=document.getElementById("main");
		this.tagsList[this.tagsList.length]=document.createElement("div");
		main.appendChild(this.tagsList[this.tagsList.length-1]);
		this.tagsList[this.tagsList.length-1].innerHTML=Describe;
		this.tagsList[this.tagsList.length-1].id="generate";
		for(var i=0;i<CountOfNumber;i++)
		{
		this.tagsList[this.tagsList.length]=document.createElement("button");
		main.appendChild(this.tagsList[this.tagsList.length-1]);
		this.tagsList[this.tagsList.length-1].onclick=(Answer==i)?()=>{
				alert("正解！");
				for(var j=this.tagsList.length-1;j>=this.tagsList.length-5;j--)this.tagsList[j].disabled=true;
				global_Character.GameScore[Subject]++;
				
				this.tagsList[this.tagsList.length]=document.createElement("div");
				main.appendChild(this.tagsList[this.tagsList.length-1]);
				this.tagsList[this.tagsList.length-1].innerHTML=Solution;
							this.tagsList[this.tagsList.length]=document.createElement("hr");
			main.appendChild(this.tagsList[this.tagsList.length-1]);
				}
				:
				()=>{
			alert("错误答案！");
			
				for(var j=this.tagsList.length-1;j>=this.tagsList.length-CountOfNumber*2;j--)this.tagsList[j].disabled=true;

			this.tagsList[this.tagsList.length]=document.createElement("div");
			main.appendChild(this.tagsList[this.tagsList.length-1]);
			this.tagsList[this.tagsList.length-1].innerHTML=Solution;
						this.tagsList[this.tagsList.length]=document.createElement("hr");
			main.appendChild(this.tagsList[this.tagsList.length-1]);
		}
		this.tagsList[this.tagsList.length-1].innerText=String.fromCharCode("A".charCodeAt()+i);
					this.tagsList[this.tagsList.length]=document.createElement("hr");
			main.appendChild(this.tagsList[this.tagsList.length-1]);
		
		}
	}
	this.addNewSelection=function(Describe,SelectFunction)
	{
		var main=document.getElementById("main");
		this.tagsList[this.tagsList.length]=document.createElement("div");
		main.appendChild(this.tagsList[this.tagsList.length-1]);
		this.tagsList[this.tagsList.length-1].innerHTML=Describe;
		this.tagsList[this.tagsList.length-1].id="generate";
		for(var i=0;i<SelectFunction.length;i++)
		{
		this.tagsList[this.tagsList.length]=document.createElement("button");
		main.appendChild(this.tagsList[this.tagsList.length-1]);
		this.tagsList[this.tagsList.length-1].onclick=SelectFunction[i](global_Character);
		this.tagsList[this.tagsList.length-1].innerText=String.fromCharCode("A".charCodeAt()+i);
					this.tagsList[this.tagsList.length]=document.createElement("hr");
			main.appendChild(this.tagsList[this.tagsList.length-1]);
		
		}
	}
	this.addNewStory=function(NewStory)
	{
		console.log(NewStory);
		var NStory=document.createElement("div");
		document.getElementById("main").appendChild(NStory);
		console.log(NStory);
		NStory.innerHTML=NewStory;
		var hr=document.createElement("hr");
		document.getElementById("main").appendChild(hr);
	}
}
var global=new gameEngine();
global.runGame();