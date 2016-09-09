function initFreeQuestsData(){

	extraQuestList[0] = {
			name: "extraQuest.1 お菓子の国 EXTRA I",
			cost: "10",
			prev: "mainQuest.おかしなおかしなお菓子の国【Ⅱ】 clear",
			enemy: "狂薑餅人(3k)*3/狂薑餅人(4k)*2+玉藻貓(7k)",
			drop: "狂銀棋+布丁",
			locate: "a_1",
			tag : "biscuitGolem/berserker/chaos/good"
	}

	extraQuestList[1] = {
			name: "extraQuest.2 お菓子の国 EXTRA II",
			cost: "10",
			prev: "mainQuest.おかしなおかしなお菓子の国【Ⅲ】 clear",
			enemy: "槍骨兵(3k)*3 /槍骨兵(5k)+阿芙(17k)",
			drop: "騎銀棋+DVD",
			locate: "a_1",
			tag: "biscuitGolem/rider/chaos/good"
	}

	extraQuestList[2] = {			
			name: "extraQuest.3 大海原と竜の国 EXTRA I" ," 
			cost: "20",
			prev: "對治癒☆少女C子蘿造成200k傷害(擊倒2次)",
			enemy: "殺幽靈(5k)*3/殺幽靈(6k)*2/殺幽靈(14k)*2+魔法年上★酒吞(32k)", 
			drop: "殺銀棋+布丁",
			locate: "b_2",
			tag: "ghost/assassin/chaos/evil/dragon"
	}

	extraQuestList[3] = {			
			name: "extraQuest.4 大海原と竜の国 EXTRA II",
			cost: "20",
			prev: "extraQuest.3 clear",
			enemy: "殺龍牙兵(6k)*2+槍飛龍(7k)/殺龍牙兵(7k)*2+槍飛龍(9k)/槍飛龍(22k)*2+魔法童女Ｉ★ＢＡＲＡ☆ＫＩ(33k)", 
			drop: "狂銀棋+DVD+獅子君",
			locate: "b_3",
			tag: "rainbowWyvern/chaos/evil"
	}
 
    
	freeQuestList[0] = {			
			name: "freeQuest.1 お菓子の国 rank D",
			cost: "15",
			prev: "對魔法☆少女童謠醬造成35k傷害 (擊倒1次)",
			emeny: "狂薑餅人(7k)*3 / 狂薑餅人(8k)*2+德翁(19k)",
			drop: "布丁"
			locate: "a_4" ,
			tag: "biscuitGolem/saber/neutral/normal"
	}

	freeQuestList[1] = {
			name: "freeQuest.2 お菓子の国 rank C",
			cost: "15",
			prev: "對魔法☆少女童謠醬造成100k傷害 (擊倒3次)",
			emeny: "弓骨兵(5k)*3 / 弓骨兵(8k)*2+阿塔喵喵(26k)",
			drop: "DVD",
			locate: "a_2",
			tag: "skeleton/archer/neutral/evil"
	}


	freeQuestList[2] = {
			name: "freeQuest.3 お菓子の国 rank B",
			cost: "15",
			prev: "對魔法☆少女童謠醬造成100k傷害 (擊倒3次)",
			emeny: "殺人馬(5k)*3 / 殺人馬(8k)*2+嫁怪芙蘭(25k),
			drop: "獅子君",
			locate: "a_4",
			tag: "horseman/berserker/chaos/normal"
	}

	freeQuestList[3] = {
			name: "freeQuest.4 お菓子の国 rank A",
			cost: "20",
			prev: "mission.3", 
			emeny: "槍人馬(6k)*2+狂薑餅人(8k) / 槍人馬(13k)*2+狂薑餅人(13k) / 奇美拉(22k)+黑槍傻(26k)",
			drop: "布丁+DVD+獅子君",
			locate: "a_1",
			tag: "biscuitGolem/horseman/lancer/lawful/evil/dragon"
	}

	freeQuestList[4] = {			
			name: "freeQuest.5 大海原と竜の国 rank D",
			cost: "20",
			prev: "對治癒☆少女C子蘿造成200k傷害(擊倒2次)",
			emeny: "弓龍牙兵(8k)*2+殺幽靈 (8k) / 弓龍牙兵(9k)*2+殺幽靈 (9k) / 殺幽靈(11k)+瑪塔‧哈里(53k)",
			drop: "布丁+DVD",
			locate: "b_3",
			tag: "skeleton/ghost/assassin/chaos/normal"
	}
	
	freeQuestList[5] = {			
			name: "freeQuest.6 大海原と竜の国 rank C",
			cost: "20",
			prev: "對治癒☆少女C子蘿造成200k傷害(擊倒2次)",
			emeny: "槍飛龍(8k)+殺龍牙兵(8k) / 槍飛龍(10k)*2+殺龍牙兵(10k) / 槍飛龍(15k)*2+槍龍娘(43k)",
			drop: "布丁+DVD+獅子君",
			locate: "b_1",
			tag: "rainbowWyvern/skeleton/lancer/chaos/evil/dragon"
	}
	
	freeQuestList[6] = {
			name: "freeQuest.7 大海原と竜の国 rank B",
			cost: "20",
			prev: "對治癒☆少女C子蘿造成200k傷害(擊倒2次)",
			emeny: "殺幽靈(9k)*2+槍飛龍(9k) / 殺幽靈(10k)*2+殺幽靈(11k) / 槍飛龍(15k)*2+美杜莎(43k)",
			drop: "DVD+獅子君",
			locate: "b_1",
			tag: "ghose/rainbowWyvern/rider/chaos/good/god"
	}

	freeQuestList[7] = {			
			name: "freeQuest.8 大海原と竜の国 rank A",
			cost: "20",
			prev: "對治癒☆少女C子蘿造成500k傷害(擊倒4次)",
			emeny: "劍龍牙兵(8k)*3 / 殺巨龍(53k) / 劍龍牙兵(12k)+藍傻(50k)",
			drop: "布丁+DVD+獅子君",
			locate: "b_2",
			tag: "skeleton/saber/lawful/good/dragon"
	}
	
}