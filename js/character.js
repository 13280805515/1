function Special(Chinese,English,Mathe,History,Geography,Politics,Physics,Chemistry,Biology)
{
		this.Chinese=Chinese;
		this.English=English;
		this.Math=Mathe;
		this.History=History;
		this.Geography=Geography;
		this.Politics=Politics;
		this.Physics=Physics;
		this.Chemistry=Chemistry;
		this.Biology=Biology;
}
function gameCharacter()
{
	this.Special=new Special;
	this.GameScore=new gameScore;
}