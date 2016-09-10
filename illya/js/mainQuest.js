function initMainQuestData(){
	
	mainQuestList[0] = {			
			name: "prolog 棄てられし少女たちの墓標",
			cost: "5",
			prev: "N/A",
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
			name: "extraQuest.1 お菓子の国 EXTRA I",
			cost: "10",
			prev: "mainQuest.おかしなおかしなお菓子の国【Ⅱ】 clear",
			enemy: "狂薑餅人(3k)*3/狂薑餅人(4k)*2+玉藻貓(7k)",
			drop: "狂銀棋+布丁",
			locate: "a_1",
			tag : "biscuitGolem/berserker/chaos/good"
	}

	mainQuestList[4] = {
			name: "おかしなおかしなお菓子の国【Ⅲ】",
			cost: "",
			prev: "extraQuest.1 お菓子の国 EXTRA I",
			enemy: "no battle",
			drop: "N/A",
			locate: "a_3"
	}
	
	mainQuestList[5] = {
			name: "extraQuest.2 お菓子の国 EXTRA II",
			cost: "10",
			prev: "mainQuest.おかしなおかしなお菓子の国【Ⅲ】 clear",
			enemy: "槍骨兵(3k)*3 /槍骨兵(5k)+阿芙(17k)",
			drop: "騎銀棋+DVD",
			locate: "a_1",
			tag: "biscuitGolem/rider/chaos/good"
	}

	mainQuestList[6] = {
			name: "大海原と竜の国【Ⅰ】" ,
			cost: "",
			prev: "mission.3 clear",
			enemy: "no battle",
			drop: "N/A",
			locate: "b_1"
	}
	
	mainQuestList[7] = {			
			name: "大海原と竜の国【Ⅱ】A",
			cost: "5",
			prev: "mainQuest.大海原と竜の国【Ⅰ】clear",
			enemy: "槍龍(7k)/槍龍(9k)*2/槍龍(13k)*2+槍龍(25k)",
			drop: "獅子君",
			locate: "b_1"
			
	}

	mainQuestList[8] = {			
			name: "大海原と竜の国【Ⅱ】B",
			cost: "5",
			prev: "mainQuest.大海原と竜の国【Ⅱ】A clear",
			enemy: "劍龍牙兵(4k)*2+弓龍牙兵(4k)/劍龍牙兵(6k)+弓龍牙兵(6k)*2/劍龍牙兵(23k)*+劍&弓龍牙兵(12k)",
			drop: "布丁",
			locate: "b_1"
	}

	mainQuestList[9] = {
			name: "大海原と竜の国【Ⅲ】",
			cost: "",
			prev: "mainQuest.大海原と竜の国【Ⅱ】B clear",
			enemy: "no battle",
			drop: "布丁",
			locate: "b_4"
	}	

	mainQuestList[10] = {			
			name: "extraQuest.3 大海原と竜の国 EXTRA I", 
			cost: "20",
			prev: "對治癒☆少女C子蘿造成200k傷害(擊倒2次)",
			enemy: "殺幽靈(5k)*3/殺幽靈(6k)*2/殺幽靈(14k)*2+魔法年上★酒吞(32k)", 
			drop: "殺銀棋+布丁",
			locate: "b_2",
			tag: "ghost/assassin/chaos/evil/dragon"
	}

	mainQuestList[11] = {			
			name: "extraQuest.4 大海原と竜の国 EXTRA II",
			cost: "20",
			prev: "extraQuest.3 3 大海原と竜の国 EXTRA I clear",
			enemy: "殺龍牙兵(6k)*2+槍飛龍(7k)/殺龍牙兵(7k)*2+槍飛龍(9k)/槍飛龍(22k)*2+魔法童女Ｉ★ＢＡＲＡ☆ＫＩ(33k)", 
			drop: "狂銀棋+DVD+獅子君",
			locate: "b_3",
			tag: "rainbowWyvern/chaos/evil"
	}
	
	worldMatchList[0] = {			
		name: "worldMatch.1 魔法☆少女童謠醬",
		cost: "10",
		prev:  "mainQuest.1-3 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(50k)+魔法☆少女童謠醬(35k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[1] = {
		name: "worldMatch.2  魔法☆少女童謠醬",
		cost: "10",
		prev: "mission.24 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(60k)+魔法☆少女童謠醬(40k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[2] = {			
		name: "worldMatch.3 魔法☆少女童謠醬",
		cost: "10",
		prev: "mission.71 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(75k)+魔法☆少女童謠醬(62k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[3] = {
		name: "worldMatch.4 治癒☆少女C子蘿",
		cost: "10",
		prev:  "mainQuest.大海原と竜の国【Ⅲ】 clear",
		enemy: "槍龍(6k)*3/劍龍牙兵(45k)*2+治癒☆少女C子蘿(100k)",
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
		enemy: "槍龍(6k)*3/劍龍牙兵(90k)+治癒☆少女C子蘿(180k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

}