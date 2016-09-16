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
			prev: "mission.96 clear",
			enemy: "殺龍牙兵(6k)*2+槍飛龍(7k)/殺龍牙兵(7k)*2+槍飛龍(9k)/槍飛龍(22k)*2+魔法童女Ｉ★ＢＡＲＡ☆ＫＩ(33k)", 
			drop: "狂銀棋+DVD+獅子君",
			locate: "b_3",
			tag: "rainbowWyvern/chaos/evil"
	}
	
	mainQuestList[12] = {			
			name: "死せる書架の国【Ⅰ】",
			cost: "20",
			prev: "mission.4 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "c_1",
			tag: ""
	}
	
	mainQuestList[13] = {			
			name: "死せる書架の国【Ⅱ】",
			cost: "20",
			prev: "mainQuest.死せる書架の国【Ⅰ】clear",
			enemy: "殺女鬼(31k)*2+殺女鬼(55k)", 
			drop: "DVD",
			locate: "c_1",
			tag: "ghost"
	}
	
	mainQuestList[14] = {			
			name: "死せる書架の国【Ⅲ】",
			cost: "20",
			prev: "mainQuest.死せる書架の国【Ⅱ】clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "c_1",
			tag: ""
	}
	
	mainQuestList[15] = {			
			name: "extraQuest.5 死せる書架の国 EXTRA Ⅰ",
			cost: "20",
			prev: "Mission.40 clear",
			enemy: "術魔書(9k)*3/術魔書(12k)*2/術魔書(21k)*2+病弱☆少女沖田桑", 
			drop: "劍銀棋+獅子君",
			locate: "c_1",
			tag: "spellbook/saber/neutral/normal"
	}
	
	mainQuestList[16] = {			
			name: "extraQuest.6 死せる書架の国 EXTRA Ⅱ",
			cost: "20",
			prev: "Mission.47 clear",
			enemy: "殺女鬼(9k)*3/殺女鬼(12k)*2/殺女鬼(14k)*2+魔王☆少女信長公", 
			drop: "弓銀棋+DVD",
			locate: "c_1",
			tag: "ghost/archer/lawful/normal"
	}
	
	mainQuestList[17] = {			
			name: "雪華とハチミツの国【Ⅰ】",
			cost: "20",
			prev: "Mission.5 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "d_1",
			tag: ""
	}
	
	mainQuestList[18] = {			
			name: "雪華とハチミツの国【Ⅱ】",
			cost: "20",
			prev: "mainQuest.雪華とハチミツの国【Ⅰ】 clear",
			enemy: "劍麋鹿(7k)*2+狂雪人(9k)/槍麋鹿(10k)*2+狂雪人(14k)/槍麋鹿(19k)+劍麋鹿(19k)+狂雪人(60k)", 
			drop: "DVD",
			locate: "d_1",
			tag: "horn/snowMan"
	}
	
	mainQuestList[19] = {			
			name: "雪華とハチミツの国【Ⅲ】",
			cost: "20",
			prev: "mainQuest.雪華とハチミツの国【Ⅱ】 clear",
			enemy: "殺麋鹿(9k)*3/殺麋鹿(10k)*2+劍麋鹿(14k)/狂雪人(16k)+使魔‧庫醬(64k)", 
			drop: "DVD+獅子君",
			locate: "d_1",
			tag: "horn/snowMan/berserk/chaos/evil"
	}
	
	mainQuestList[20] = {			
			name: "雪華とハチミツの国【Ⅳ】",
			cost: "20",
			prev: "mainQuest.雪華とハチミツの国【Ⅲ】 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "d_1",
			tag: ""
	}
	
	mainQuestList[21] = {			
			name: "雪華とハチミツの国 EXTRA Ⅰ",
			cost: "20",
			prev: "mission.63 clear",
			enemy: "狂雪人(15k)*3/狂雪人(20k)*2+狂雪人(25k)/狂雪人(45k)*2+軍神☆少女阿提拉", 
			drop: "劍銀棋+獅子君",
			locate: "d_1",
			tag: "snowMan/saber/chaos/good"
	}
	
	mainQuestList[22] = {			
			name: "雪華とハチミツの国 EXTRA Ⅱ",
			cost: "20",
			prev: "unknown",
			enemy: "弓手(13k)*3/弓手(19k)*3/弓手(37k)*2+魔法☆幼女傑克醬", 
			drop: "殺銀棋+布丁",
			locate: "d_1",
			tag: "assassin/chaos/evil"
	}
	
	mainQuestList[23] = {			
			name: "星原と水晶の国【Ⅰ】",
			cost: "20",
			prev: "Mission.6 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "e_1",
			tag: ""
	}
	
	mainQuestList[24] = {			
			name: "星原と水晶の国【Ⅱ】",
			cost: "20",
			prev: "mainQuest.星原と水晶の国【Ⅰ】 clear",
			enemy: "殺術狂魔杖(10k)/殺魔杖(14k)*3/殺術魔杖(22k)+狂魔杖(72k)", 
			drop: "布丁+DVD+獅子君",
			locate: "e_1",
			tag: "wand"
	}
	
	mainQuestList[25] = {			
			name: "星原と水晶の国【Ⅲ】",
			cost: "20",
			prev: "mainQuest.星原と水晶の国【Ⅱ】 clear",
			enemy: "狂魔杖(9k)+殺魔杖(10k)/殺魔杖(12k)+術魔杖(16k)*2/殺魔杖(12k)*2+術魔杖(90k)", 
			drop: "布丁+DVD+獅子君",
			locate: "e_1",
			tag: ""
	}
	
	mainQuestList[26] = {			
			name: "星原と水晶の国【Ⅳ】",
			cost: "20",
			prev: "mainQuest.星原と水晶の国【Ⅲ】 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "e_1",
			tag: ""
	}
	
	mainQuestList[27] = {			
			name: "終幕",
			cost: "20",
			prev: "擊破強吻♡少女小★黑",
			enemy: "no battle", 
			drop: "N/A",
			locate: "e_1",
			tag: ""
	}
	
	mainQuestList[28] = {			
			name: "魔法♂紳士 開幕",
			cost: "20",
			prev: "完成第一階段主線任務",
			enemy: "no battle", 
			drop: "N/A",
			locate: "z_0",
			tag: ""
	}
	
	mainQuestList[29] = {			
			name: "魔法♂紳士 A",
			cost: "20",
			prev: "mission.26 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "a_3",
			tag: ""
	}
	
	mainQuestList[30] = {			
			name: "魔法♂紳士 B",
			cost: "20",
			prev: "mission.44 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "b_4",
			tag: ""
	}
	
	mainQuestList[31] = {			
			name: "魔法♂紳士 C",
			cost: "20",
			prev: "mission.69 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "c_2",
			tag: ""
	}
	
	mainQuestList[32] = {			
			name: "魔法♂紳士 D",
			cost: "20",
			prev: "mission.70 clear",
			enemy: "no battle", 
			drop: "N/A",
			locate: "d_1",
			tag: ""
	}
	
	
	worldMatchList[0] = {			
		name: "worldMatch.1 魔法☆少女童謠醬【Ⅰ】",
		cost: "10",
		prev:  "mainQuest.1-3 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(50k)+魔法☆少女童謠醬(35k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[1] = {
		name: "worldMatch.2  魔法☆少女童謠醬【Ⅱ】",
		cost: "10",
		prev: "mission.24 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(60k)+魔法☆少女童謠醬(40k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[2] = {			
		name: "worldMatch.3 魔法☆少女童謠醬【Ⅲ】",
		cost: "10",
		prev: "mission.71 clear",
		enemy: "狂薑餅人(3k)*3/魔神柱(75k)+魔法☆少女童謠醬(62k)",
		drop: "布丁+DVD+獅子君",
		locate: "a_3"
	}

	worldMatchList[3] = {
		name: "worldMatch.4 治癒☆少女C子蘿【Ⅰ】",
		cost: "10",
		prev:  "mainQuest.大海原と竜の国【Ⅲ】 clear",
		enemy: "槍龍(6k)*3/劍龍牙兵(45k)*2+治癒☆少女C子蘿(100k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

	worldMatchList[4] = {			
		name: "worldMatch.5 治癒☆少女C子蘿【Ⅱ】",
		cost: "10",
		prev: "mission.35 clear",
		enemy: "槍龍(6k)*3/劍龍牙兵(60k)*2+治癒☆少女C子蘿(150k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}

	worldMatchList[5] = {
		name: "worldMatch.6 治癒☆少女C子蘿【Ⅲ】",
		cost: "10",
		prev: "mission.27 clear",
		enemy: "槍龍(6k)*3/劍龍牙兵(90k)+治癒☆少女C子蘿(180k)",
		drop: "DVD+獅子君",
		locate: "b_4"
	}
	
	worldMatchList[6] = {
		name: "worldMatch.7 文學☆少女艾蓮娜【Ⅰ】",
		cost: "10",
		prev: "unknown",
		enemy: "術女鬼(9k)*3/術魔書(42k)*2+文學☆少女艾蓮娜(180k)",
		drop: "布丁+DVD",
		locate: "c_1"
	}
	
	worldMatchList[7] = {
		name: "worldMatch.8 文學☆少女艾蓮娜【Ⅱ】",
		cost: "10",
		prev: "mission.38 clear",
		enemy: "術女鬼(9k)*3/術魔書(52k)*2+文學☆少女艾蓮娜(220k)",
		drop: "布丁+DVD",
		locate: "c_1"
	}
	
	worldMatchList[8] = {
		name: "worldMatch.9 文學☆少女艾蓮娜【Ⅲ】",
		cost: "10",
		prev: "mission.49 clear",
		enemy: "術女鬼(9k)*3/術魔書(58k)*2+文學☆少女艾蓮娜(300k)",
		drop: "布丁+DVD",
		locate: "c_1"
	}
	
	worldMatchList[9] = {
		name: "worldMatch.10 文學☆少女艾蓮娜【Ⅳ】",
		cost: "10",
		prev: "mission.29 clear",
		enemy: "術女鬼(9k)*3/術魔書(80k)+文學☆少女艾蓮娜(360k)",
		drop: "布丁+DVD",
		locate: "c_1"
	}
	
	worldMatchList[10] = {
		name: "worldMatch.11 婊子☆天使梅芙【Ⅰ】",
		cost: "10",
		prev: "mainQuest.星原と水晶の国【Ⅳ】 clear",
		enemy: "狂雪人(10k)+殺麋鹿(10k)*2/使魔‧庫醬(100k)+婊子☆天使梅芙(240k)",
		drop: "DVD+獅子君",
		locate: "d_1"
	}
	
	worldMatchList[11] = {
		name: "worldMatch.12 婊子☆天使梅芙【Ⅱ】",
		cost: "10",
		prev: "mission.58 clear",
		enemy: "狂雪人(10k)+殺麋鹿(10k)*2/使魔‧庫醬(120k)+婊子☆天使梅芙(300k)",
		drop: "DVD+獅子君",
		locate: "d_1"
	}

	worldMatchList[12] = {
		name: "worldMatch.13 婊子☆天使梅芙【Ⅲ】",
		cost: "10",
		prev: "mission.42 clear",
		enemy: "狂雪人(11k)+殺麋鹿(11k)*2/使魔‧庫醬(140k)+婊子☆天使梅芙(360k)",
		drop: "DVD+獅子君",
		locate: "d_1"
	}
	
	worldMatchList[13] = {
		name: "worldMatch.14 婊子☆天使梅芙【Ⅳ】",
		cost: "10",
		prev: "mission.52 clear",
		enemy: "狂雪人(12k)+殺麋鹿(12k)*2/使魔‧庫醬(160k)+婊子☆天使梅芙(400k)",
		drop: "DVD+獅子君",
		locate: "d_1"
	}
	
	worldMatchList[14] = {
		name: "worldMatch.15 強吻♡少女小★黑【Ⅰ】",
		cost: "10",
		prev: "mainQuest.星原と水晶の国【Ⅳ】 clear",
		enemy: "強吻♡少女小★黑(200k)",
		drop: "獅子君",
		locate: "e_1"
	}
	
	worldMatchList[15] = {
		name: "worldMatch.16 強吻♡少女小★黑【Ⅱ】",
		cost: "10",
		prev: "unknown",
		enemy: "殺魔杖(10k)*3/狂魔杖(48k)+術魔杖(73k)+強吻♡少女小★黑(240k)",
		drop: "布丁+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[16] = {
		name: "worldMatch.17 強吻♡少女小★黑【Ⅲ】",
		cost: "10",
		prev: "mission.60 clear",
		enemy: "殺魔杖(11k)*3/狂魔杖(51k)+術魔杖(78k)+強吻♡少女小★黑(300k)",
		drop: "布丁+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[17] = {
		name: "worldMatch.18 強吻♡少女小★黑【Ⅳ】",
		cost: "10",
		prev: "mission.34 clear",
		enemy: "殺術狂魔杖(16k)/強吻♡少女小★黑(380k)",
		drop: "布丁+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[18] = {
		name: "worldMatch.19 強吻♡少女小★黑【Ⅳ】",
		cost: "10",
		prev: "mission.64 clear",
		enemy: "殺術狂魔杖(22k)/強吻♡少女小★黑(400k)",
		drop: "布丁+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[19] = {
		name: "worldMatch.20 白面♂紳士歌劇魅影【Ⅰ】",
		cost: "10",
		prev: "mission.26 clear",
		enemy: "狂薑餅人(27k)*3/狂薑餅人(71k)*2+白面♂紳士歌劇魅影(350k)",
		drop: "布丁",
		locate: "a_3"
	}
	
	worldMatchList[20] = {
		name: "worldMatch.21 白面♂紳士歌劇魅影【Ⅱ】",
		cost: "10",
		prev: "worldMatch.20 clear",
		enemy: "狂薑餅人(29k)*3/狂薑餅人(75k)*2+白面♂紳士歌劇魅影(450k)",
		drop: "布丁",
		locate: "a_3"
	}
	
	worldMatchList[21] = {
		name: "worldMatch.22 白面♂紳士歌劇魅影【Ⅲ】",
		cost: "10",
		prev: "worldMatch.21 clear",
		enemy: "狂薑餅人(30k)*3/狂薑餅人(77k)*2+白面♂紳士歌劇魅影(700k)",
		drop: "布丁",
		locate: "a_3"
	}
	
	worldMatchList[22] = {
		name: "worldMatch.23 紳士♂海賊黑鬍子【Ⅰ】",
		cost: "10",
		prev: "mission.44 clear",
		enemy: "槍飛龍(15k)*3/槍飛龍(56k)*2+紳士♂海賊黑鬍子(320k)",
		drop: "獅子君",
		locate: "b_4"
	}
	
	worldMatchList[23] = {
		name: "worldMatch.24 紳士♂海賊黑鬍子【Ⅱ】",
		cost: "10",
		prev: "worldMatch.23 clear",
		enemy: "槍飛龍(16k)*3/槍飛龍(58k)*2+紳士♂海賊黑鬍子(470k)",
		drop: "獅子君",
		locate: "b_4"
	}
	
	worldMatchList[24] = {
		name: "worldMatch.25 紳士♂海賊黑鬍子【Ⅲ】",
		cost: "10",
		prev: "worldMatch.24 clear",
		enemy: "槍飛龍(17k)*3/槍飛龍(60k)*2+紳士♂海賊黑鬍子(710k)",
		drop: "獅子君",
		locate: "b_4"
	}
	
	worldMatchList[25] = {
		name: "worldMatch.26 魔法♂旦那藍鬍子【Ⅰ】",
		cost: "10",
		prev: "mission.69 clear",
		enemy: "術魔書(18k)*3/術魔書(59k)*2+魔法♂旦那藍鬍子(500k)",
		drop: "獅子君",
		locate: "c_2"
	}
	
	worldMatchList[26] = {
		name: "worldMatch.27 魔法♂旦那藍鬍子【Ⅱ】",
		cost: "10",
		prev: "worldMatch.26 clear",
		enemy: "術魔書(19k)*3/術魔書(64k)*2+魔法♂旦那藍鬍子(600k)",
		drop: "獅子君",
		locate: "c_2"
	}
	
	worldMatchList[27] = {
		name: "worldMatch.28 魔法♂旦那藍鬍子【Ⅲ】",
		cost: "10",
		prev: "worldMatch.27 clear",
		enemy: "術魔書(20k)*3/術魔書(69k)*2+魔法♂旦那藍鬍子(900k)",
		drop: "獅子君",
		locate: "c_2"
	}
	
	worldMatchList[28] = {
		name: "worldMatch.29 杯具♂紳士刷子哥【Ⅰ】",
		cost: "10",
		prev: "mission.70 clear",
		enemy: "槍麋鹿(12k)*3/槍麋鹿(70k)*2+杯具♂紳士刷子哥(480k)",
		drop: "DVD",
		locate: "d_1"
	}
	
	worldMatchList[29] = {
		name: "worldMatch.30 杯具♂紳士刷子哥【Ⅱ】",
		cost: "10",
		prev: "worldMatch.29 clear",
		enemy: "槍麋鹿(13k)*3/槍麋鹿(73k)*2+杯具♂紳士刷子哥(590k)",
		drop: "DVD",
		locate: "d_1"
	}
	
	worldMatchList[30] = {
		name: "worldMatch.31 杯具♂紳士刷子哥【Ⅲ】",
		cost: "10",
		prev: "worldMatch.30 clear",
		enemy: "槍麋鹿(14k)*3/槍麋鹿(75k)*2+杯具♂紳士刷子哥(930k)",
		drop: "DVD",
		locate: "d_1"
	}
	
	worldMatchList[31] = {
		name: "worldMatch.32 黑魔☆少女伊莉雅【Ⅰ】",
		cost: "10",
		prev: "mission.12 clear",
		enemy: "殺術狂魔杖(17k~20k)*3/術魔杖(68k)+狂魔杖(51k)+黑魔☆少女伊莉雅(680k)",
		drop: "布丁+DVD+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[32] = {
		name: "worldMatch.33 黑魔☆少女伊莉雅【Ⅱ】",
		cost: "10",
		prev: "worldMatch.32 clear",
		enemy: "殺術狂魔杖(17k~20k)*3/術魔杖(68k)+狂魔杖(51k)+黑魔☆少女伊莉雅(680k)",
		drop: "布丁+DVD+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[33] = {
		name: "worldMatch.34 黑魔☆少女伊莉雅【Ⅲ】",
		cost: "10",
		prev: "worldMatch.33 clear",
		enemy: "殺術狂魔杖(17k~20k)*3/術魔杖(68k)+狂魔杖(51k)+黑魔☆少女伊莉雅(680k)",
		drop: "布丁+DVD+獅子君",
		locate: "e_1"
	}
	
	worldMatchList[34] = {
		name: "worldMatch.35 黑魔☆少女伊莉雅【Ⅳ】",
		cost: "10",
		prev: "worldMatch.34 clear",
		enemy: "殺術狂魔杖(17k~20k)*3/術魔杖(68k)+狂魔杖(51k)+黑魔☆少女伊莉雅(680k)",
		drop: "布丁+DVD+獅子君",
		locate: "e_1"
	}
}
