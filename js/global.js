
var global=new gameEngine();
var global_gameCharacters=["学习普通，没有加成"];
var global_characterSpecial=[new Special(0,0,0,0,0,0,0,0,0)]
var runGame=function(Character)
{
    global_Character.Special=global_characterSpecial[Character];
    global.addNewProblem("已知集合A={1，2}，集合B满足A∪B={1，2}，则集合B有______个．<br>A.1,B.2,C.4,D.3",4,2,"∵集合A={1，2}有两个元素，<br>若A∪B={1，2}，则B⊆A<br>故满足条件的集合B有22=4个<br>故答案为：C","Chinese");
};