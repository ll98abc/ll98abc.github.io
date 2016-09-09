function initMainQuestData(){
	
	mainQuestList[0] = {			
			name: "prolog 棄てられし少女たちの墓標",
			cost: "5",
			prev: "N/A"
			enemy: "劍麋鹿(6k)*2 + 狂雪人(12k)",
			drop: "DVD/獅子君",
			locate: "中立地帶"
	}

    mainQuestList[1] = {
			name: "おかしなおかしなお菓子の国【Ⅰ】",
			cost: "",
			prev:"mainQuest.prolog 棄てられし少女たちの墓標 clear",
			enemy: "no battle",
			drop: "N/A",
			locate: "中立地帶"
	}
	
	mainQuestList[2] = {
			name: "おかしなおかしなお菓子の国【Ⅱ】",
			cost: "5",
			prev: "mainQuest.おかしなおかしなお菓子の国【Ⅰ】clear",
			enemy: "狂薑餅人(5k) / 狂薑餅人(5k)+狂薑餅人(12k)",
			drop: "布丁",
			locate: "a_1"
	}

	mainQuestList[3] = {
			name: "おかしなおかしなお菓子の国【Ⅲ】",
			cost: "",
			prev: "extraQuest.1 お菓子の国 EXTRA I",
			enemy: "no battle",
			drop: "N/A",
			locate: "a_3"
	}

	mainQuestList[4] = {
			name: "大海原と竜の国【Ⅰ】" ,
			cost: "",
			prev: "mission.3 clear",
			enemy: "no battle",
			drop: "N/A",
			locate: "b_1"
	}
	
	mainQuestList[5] = {			
			name: "大海原と竜の国【Ⅱ】A",
			cost: "5",
			prev: "mainQuest.大海原と竜の国【Ⅰ】clear",
			enemy: "槍龍(7k)/槍龍(9k)*2/槍龍(13k)*2+槍龍(25k)",
			drop: "獅子君",
			locate: "b_1"
			
	}

	mainQuestList[6] = {			
			name: "大海原と竜の国【Ⅱ】B",
			cost: "5"
			prev: "mainQuest.大海原と竜の国【Ⅱ】A clear",
			enemy: "劍龍牙兵(4k)*2+弓龍牙兵(4k)/劍龍牙兵(6k)+弓龍牙兵(6k)*2/劍龍牙兵(23k)*+劍&弓龍牙兵(12k)",
			drop: "布丁",
			locate: "b_1"
	}

	mainQuestList[7] = {
			name: "大海原と竜の国【Ⅲ】",
			cost: ""
			prev: "mainQuest.大海原と竜の国【Ⅱ】B clear",
			enemy: "no battle",
			drop: "布丁",
			locate: "b_4"
	}


	worldMatchList[0] = {			
		name: "worldMatch.1 魔法☆少女童謠醬",
		cost: "10",
		prev:  "mainQuest.1-3 clear",
		emeny: "狂薑餅人(3k)*3/魔神柱(50k)+魔法☆少女童謠醬(35k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[1] = {
		name: "worldMatch.2  魔法☆少女童謠醬",
		cost: "10",
		prev: "mission.24 clear",
		emeny: "狂薑餅人(3k)*3/魔神柱(60k)+魔法☆少女童謠醬(40k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[2] = {			
		name: "worldMatch.3 魔法☆少女童謠醬",
		cost: "10"
		prev: "mission.71 clear",
		emeny: "狂薑餅人(3k)*3/魔神柱(75k)+魔法☆少女童謠醬(62k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[3] = {
		name: "worldMatch.4 治癒☆少女C子蘿",
		cost: "10",
		prev:  "mainQuest.大海原と竜の国【Ⅲ】 clear",
		emeny: "槍龍(6k)*3/劍龍牙兵(45k)*2+治癒☆少女C子蘿(100k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

	worldMatchList[4] = {			
		name: "worldMatch.5 治癒☆少女C子蘿",
		cost: "10",
		prev: "mission.35 clear",
		emeny: "槍龍(6k)*3/劍龍牙兵(60k)*2+治癒☆少女C子蘿(150k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

	worldMatchList[5] = {
		name: "worldMatch.6 治癒☆少女C子蘿",
		cost: "10",
		prev: "mission.27 clear",
		emeny: "槍龍(6k)*3/劍龍牙兵(90k)+治癒☆少女C子蘿(180k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

}