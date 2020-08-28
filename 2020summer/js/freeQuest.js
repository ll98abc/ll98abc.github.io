function initFreeQuestData(){
	
	/**
	 * var demonic = "魔性";
	 * var necro   = "死靈";
	 * var huge    = "巨大體型";
	 * var beast   = "野獸";
	 * var crab    = "蟹";
	 * var dangerCrab = "危險蟹";
	 * var hog     = "魔豬";
	 * var dangerPig  = "危險魔豬";
	 * var wyvern  = "飛龍";
	 * var dragon  = "巨龍";
	 * var bugs    = "蟲群";
	 * var hornHorse = "雙角馬";
	 * var book    = "魔書";
	 * var basilisk= "蛇蜥"; 
	 * var sphinx  = "斯芬克斯"
	 * var chicken = "雞"
	 * var god     = "神性";
	 * var spriggan= "守寶妖精"
	 * var human   = "人類"
	 * var saber   = "劍兵";
	 * var lancer  = "槍兵";
	 * var caster  = "術職";
	 * var assassin= "殺職";  
	 * var berserker ="狂戰士"; 
	 * var inside  = "屋內";
	 * var outside = "屋外";
	 * var day     = "日間";
	 * var night   = "夜間";
	 */
	
	freeQuestList[0] = {			
		name: "小屋A(日間)",
		cost: "30",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "狼*3+魔豬*5+狼(稀有)",
		drop: "乾柴(多)/野菜(少)/種子",
		locate: "cottage_A_day" ,
		tag: "dangerPig/beast/demonic/lancer/hog/day/outside"
	}
	
	freeQuestList[1] = {			
		name: "小屋B(日間)",
		cost: "30",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "狼*3+魔豬*5+狼(稀有)",
		drop: "乾柴(多)/野菜(少)/種子",
		locate: "cottage_B_day" ,
		tag: "dangerPig/beast/demonic/lancer/hog/day/outside"
	}
			
	freeQuestList[2] = {			
		name: "湖畔A(日間)",
		cost: "35",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "寄居蟹*8+寄居蟹(稀有)",
		drop: "野菜(多)/鏈鋸(少)/貝殼",
		locate: "lakeside_A_day" ,
		tag: "crab/dangerCrab/demonic/saber/day/outside"
	}
	 
	freeQuestList[3] = {			
		name: "湖畔B(日間)",
		cost: "35",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "寄居蟹*8+寄居蟹(稀有)",
		drop: "野菜(多)/鏈鋸(少)/貝殼",
		locate: "lakeside_B_day" ,
		tag: "crab/dangerCrab/demonic/saber/day/outside"
	}
			
	freeQuestList[4] = {			
		name: "深邃森林A(日間)",
		cost: "40",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "巨龍+飛龍*7+飛龍(稀有)",
		drop: "鏈鋸(多)/乾柴(少)/龍鱗",
		locate: "deepForest_A_day" ,
		tag: "dragon/huge/berserker/wyvern/day/outside"
	}
	 
	freeQuestList[5] = {			
		name: "深邃森林B(日間)",
		cost: "40",
		prev: "通過mainQuest.【ちょっと湖畔へ】",
		enemy: "巨龍+飛龍*7+飛龍(稀有)",
		drop: "鏈鋸(多)/乾柴(少)/龍鱗/",
		locate: "deepForest_B_day" ,
		tag: "dragon/huge/berserker/wyvern/day/outside"
	}		
	
	freeQuestList[6] = {			
		name: "洋館A(日間)",
		cost: "40",
		prev: "通過mainQuest.第七節【夢魘．幻影】(1/2)",
		enemy: "奇美拉+蟲群*7+蟲群(稀有)",
		drop: "膽石/髓液/鏈鋸(多)/乾柴(少)",
		locate: "westBuilding_A_day" ,
		tag: "bugs/archer/beast/day/inside"	
	}
	 
	freeQuestList[7] = {			
		name: "洋館B(日間)",
		cost: "40",
		prev: "通過mainQuest.第七節【夢魘．幻影】(1/2)",
		enemy: "娜迦+蟲群*7+蟲群(稀有)",
		drop: "金蛋/髓液/鏈鋸(多)/乾柴(少)",
		locate: "westBuilding_B_day" ,
		tag: "dragon/archer/bugs/god/huge/demonic/day/inside"			
	}
			
	freeQuestList[8] = {			
		name: "大樓A(日間)",
		cost: "40",
		prev: "通過mainQuest.第三節【鬧鬼大樓】 (1/2)",
		enemy: "雙角馬+魔書*7+魔書(稀有)",
		drop: "角角/書頁/三素材混搭",
		locate: "mansion_A_day" ,
		tag: "hornHorse/beast/demonic/archer/book/day/inside"
	}
	 
	freeQuestList[9] = {			
		name: "大樓B(日間)",
		cost: "40",
		prev: "通過mainQuest.第三節【鬧鬼大樓】 (1/2)",
		enemy: "雙角馬+魔書*7+魔書(稀有)",
		drop: "角角/書頁/三素材混搭",
		locate: "mansion_B_day" ,
		tag: "hornHorse/beast/demonic/archer/book/day/inside"
	}
			
	freeQuestList[10] = {			
		name: "市場A(日間)",
		cost: "40",
		prev: "通過mainQuest.第六節【活屍們的一天】(1/2)",
		enemy: "白色狗狗+蛇蜥*7+蛇蜥(稀有)",
		drop: "臭臭泥/龍牙/野菜(多)/鏈鋸(少)",
		locate: "market_A_day" ,
		tag: "soulEater/beast/demonic/god/caster/basilisk/day/inside"
	}
	
	freeQuestList[11] = {			
		name: "市場B(日間)",
		cost: "40",
		prev: "通過mainQuest.第六節【活屍們的一天】(1/2)",
		enemy: "黑色狗狗+蛇蜥*7+蛇蜥(稀有)",
		drop: "臭臭泥/龍牙/野菜(多)/鏈鋸(少)",
		locate: "market_B_day" ,
		tag: "soulEater/beast/demonic/god/caster/basilisk/day/inside"
	}	
	
	freeQuestList[12] = {			
		name: "民家A(日間)",
		cost: "40",
		prev: "通過mainQuest.第四節【詛咒與怨念與錄影帶】(2/2)",
		enemy: "斯芬克斯+雞*7+雞(稀有)",
		drop: "神燈/箭頭/乾柴(多)/野菜(少)",
		locate: "house_A_day" ,
		tag: "sphinx/huge/god/chicken/lancer/day/outside"
	}
	 
	freeQuestList[13] = {			
		name: "民家B(日間)",
		cost: "40",
		prev: "通過mainQuest.第四節【詛咒與怨念與錄影帶】(2/2)",
		enemy: "斯芬克斯+雞*7+雞(稀有)",
		drop: "神燈/箭頭/乾柴(多)/野菜(少)",
		locate: "house_B_day" ,
		tag: "sphinx/huge/god/chicken/lancer/day/outside"		
	}
		
	freeQuestList[14] = {			
		name: "微笑旅社(日間)",
		cost: "40",
		prev: "通過mainQuest.第九節【人魚秘〆】",
		enemy: "呂布+巨石像+猴子*2+猴子(稀有)，1、1、(2+1)配置",
		drop: "三素材混搭/蕃薯藤/頭冠",
		locate: "smilingHotel_day" ,
		tag: "berserker/spriggan/beast/huge/demonic/day/inside"
	}
	 	
	freeQuestList[15] = {			
		name: "小屋A(夜間)",
		cost: "30",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "大鬼*1+小鬼*7+小鬼(稀有)",
		drop: "乾柴(多)/野菜(少)/雙晶",
		locate: "cottage_A_night" ,
		tag: "demonic/huge/lancer/hog/night/outside"
	}
	 	
	freeQuestList[16] = {			
		name: "小屋B(夜間)",		
		cost: "30",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "大鬼*1+小鬼*7+小鬼(稀有)",
		drop: "乾柴(多)/野菜(少)/雙晶",
		locate: "cottage_B_night" ,
		tag: "necro/demonic/huge/lancer/night/outside"		
	}
	 
	freeQuestList[17] = {			
		name: "湖畔A(夜間)",
		cost: "35",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "海魔*8+海魔(稀有)",
		drop: "野菜(多)/鏈鋸(少)/蛇眼",
		locate: "lakeside_A_night" ,
		tag: "demonic/saber/night/outside"
	}			
		
	freeQuestList[18] = {			
		name: "湖畔B(夜間)",
		cost: "35",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "海魔*8+海魔(稀有)",
		drop: "野菜(多)/鏈鋸(少)/蛇眼",
		locate: "lakeside_B_night" ,
		tag: "demonic/saber/night/outside"	
	}				
	 
	freeQuestList[19] = {			
		name: "深邃森林A(夜間)",
		cost: "40",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "大蛇+骷髏兵*7+骷髏兵(稀有)",
		drop: "鏈鋸(多)/乾柴(少)/神酒/大騎士勳章",
		locate: "deepForest_A_night" ,
		tag: "beast/necro/berserker/huge/demonic/night/outside"
	}
	 
	freeQuestList[20] = {			
		name: "深邃森林B(夜間)",
		cost: "40",
		prev: "通過mainQuest.第一節【enjoy holiday】 (2/3)",
		enemy: "大蛇+骷髏兵*7+骷髏兵(稀有)",
		drop: "鏈鋸(多)/乾柴(少)/神酒/大騎士勳章",
		locate: "deepForest_B_night" ,
		tag: "beast/necro/berserker/huge/demonic/night/outside"
	}
	 
	freeQuestList[21] = {			
		name: "洋館A(夜間)",
		cost: "40",
		prev: "通過mainQuest.第七節【夢魘．幻影】(2/2)",
		enemy: "大惡魔/人偶*7+人偶(稀有)",
		drop: "心臟/齒輪/鏈鋸(多)/乾柴(少)",
		locate: "westBuilding_A_night" ,
		tag: "demonic/archer/night/inside"
	}
		
	freeQuestList[22] = {			
		name: "洋館B(夜間)",
		cost: "40",
		prev: "通過mainQuest.第七節【夢魘．幻影】(2/2)",
		enemy: "虎戰車/人偶*7+人偶(稀有)",
		drop: "爐心/齒輪/鏈鋸(多)/乾柴(少)",
		locate: "westBuilding_B_night" ,
		tag: "archer/night/inside"
	}
	
	freeQuestList[23] = {			
		name: "大樓A(夜間)",
		cost: "40",
		prev: "通過mainQuest.第三節【鬧鬼大樓】 (2/2)",
		enemy: "眼球+幽靈*7+幽靈(稀有)",
		drop: "鬼燈/血淚/三素材混搭",
		locate: "mansion_A_night" ,
		tag: "demonic/necro/archer/night/inside"
	}
		
	freeQuestList[24] = {			
		name: "大樓B(夜間)",
		cost: "40",
		prev: "通過mainQuest.第三節【鬧鬼大樓】 (2/2)",
		enemy: "眼球+幽靈*7+幽靈(稀有)",
		drop: "鬼燈/血淚/三素材混搭",
		locate: "mansion_B_night" ,
		tag: "demonic/necro/archer/night/inside"	
	}
	
	freeQuestList[25] = {			
		name: "市場A(夜間)",
		cost: "40",
		prev: "通過mainQuest.第六節【活屍們的一天】(2/2)",
		enemy: "白鳥+喪屍*7+喪屍",
		drop: "羽毛/鐵釘/野菜(多)/鏈鋸(少)",
		locate: "market_A_night" ,
		tag: "necro/beast/demonic/god/caster/human/night/inside"
	} 
	
	freeQuestList[26] = {			
		name: "市場B(夜間)",
		cost: "40",
		prev: "通過mainQuest.第六節【活屍們的一天】(2/2)",
		enemy: "黑鳥+喪屍*7+喪屍",
		drop: "羽毛/鐵釘/野菜(多)/鏈鋸(少)",
		locate: "market_B_night" ,
		tag: "necro/beast/demonic/caster/human/night/inside"
	}
	 
	freeQuestList[27] = {			
		name: "民家A(夜間)",
		cost: "40",
		prev: "通過mainQuest.第四節【詛咒與怨念與錄影帶】(2/2)",
		enemy: "大幽靈+7女鬼+女鬼(稀有)",
		drop: "鏡子/黑粉/乾柴(多)/野菜(少)",
		locate: "house_A_night" ,
		tag: "necro/demonic/huge/human/lancer/night/outside"
	}
		
	freeQuestList[28] = {			
		name: "民家B(夜間)",
		cost: "40",
		prev: "通過mainQuest.第四節【詛咒與怨念與錄影帶】(2/2)",
		enemy: "大幽靈+7女鬼+女鬼(稀有)",
		drop: "鏡子/黑粉/乾柴(多)/野菜(少)",
		locate: "house_B_night" ,
		tag: "necro/demonic/huge/human/lancer/night/outside"
	}
	 
	freeQuestList[29] = {			
		name: "微笑旅社(夜間)",
		cost: "40",
		prev: "通過mainQuest.第九節【人魚秘〆】",
		enemy: "刺繡公/紅毛獅子/殺人鬼*2+殺人鬼(稀有)，1、1、(2+1)配置",
		drop: "三素材混搭/獅子毛/鎖鍊",
		locate: "smilingHotel_night" ,
		tag: "human/berserker/beast/demonic/night/outside"
	}

}
