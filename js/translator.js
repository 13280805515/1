
function gameTranslator_zh(Target)
{
		switch (Target)
		{
			case "Chinese":
				return "语文";
			case "English":
				return "英语";
			case "Math":
				return "数学";
			case "History":
				return "历史";
			case "Geography":
				return "地理";
			case "Politics":
				return "政治";
			case "Physics":
				return "物理";
			case "Chemistry":
				return "化学";
			case "Biology":
				return "生物";
			case "Student":
				return "学生";
			case "Teacher":
				return "教师";
			default:
				return undefined;
		}
}
