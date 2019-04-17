function initFreeQuestData(){
	
	/**
	 * var demonic = "魔性";
	 * var beast   = "野獸";
	 * var human   = "人類";
	 * var lawful  = "秩序";
	 * var evil    = "邪惡";
	 * var earth   = "地之力";
	 * var eastern = "東洋";
	 * var lancer  = "槍兵";
	 * var caster  = "術職";
	 * var assassin= "殺職";
	 * var mag_a   = "魔力A以上";
	 * var sta_a   = "耐久A以上";
	 * var shores  = "海邊";
         * var north   = "事務所以北";
         * var south   = "事物所以南";
         * var back_north   = "裡事務所以北";
         * var back_south   = "裡事物所以南";
	 * var float   = "浮游"
	 * var danger  = "巨大危險"
	 * var Qnobu   = "信信";
	 * var silverNobu = "銀信";
	 * var goldNobu= "金信";
	 * var bigNobu = "巨大信";
	 * var mechNobu= "機械信";
         * var sabaSoldier = "英靈兵":
	 */
	
	freeQuestList[0] = {			
		name: "探偵調查‧新宿",
		cost: "40",
		prev: "通過mainQuest.第二節",
		enemy: "刷哥*1/魔豬*5/nobu*3",
		drop: "火藥/種子/銀青蛙/布",
		locate: "shinjuku" ,
		tag: "lawful/beast/Qnobu/earth/lancer/demonic"
	}	
	
	freeQuestList[1] = {			
		name: "探偵調查‧坂本探偵事務所",
		cost: "40",
		prev: "通過mainQuest.第二節",
		enemy: "騎金時*1/巨大銀色nobu*3/狼*5",
		drop: "羽毛/種子/金青蛙/銀青蛙",
		locate: "sakamoto" ,
		tag: "lawful/earth/eastern/beast/Qnobu/silverNobu/bigNobu"
	}
	
	freeQuestList[2] = {			
		name: "探偵調查‧築地",
		cost: "40",
		prev: "Mission.32 clear",
		enemy: "孔明*1/迷你銀色機械nobu*3/海賊*5",
		drop: "八連雙晶/黨證/金青蛙/布",
		locate: "tsukiji" ,
		tag: "caster/eastern/Qnobu/silverNobu/mechNobu/mag_a/human/south"
	}
	
	freeQuestList[3] = {			
		name: "探偵調查‧高円寺",
		cost: "40",
		prev: "Mission.17 clear",
		enemy: "亨利杰基爾*1/迷你銀色nobu*3/失心者*5",
		drop: "火藥/笨蛋鎖/銀青蛙/布",
		locate: "kouEnTera" ,
		tag: "lawful/assassin/earth/human/Qnobu/silverNobu/north"				
	}		
		
	freeQuestList[4] = {			
		name: "探偵調查‧目青不動",
		cost: "40",
		prev: "Mission.18 clear",
		enemy: "寶藏院*1/迷你金色機械nobu*3/鬼武者*5",
		drop: "勾玉/八連雙晶/金青蛙/銀青蛙",
		locate: "blueTemple" ,
		tag: "lancer/eastern/demonic/Qnobu/goldNobu/mechNobu/south"				
	}
	
	freeQuestList[5] = {			
		name: "探偵調查‧目黑不動",
		cost: "40",
		prev: "Mission.16 clear",
		enemy: "歌劇魅影*1/巨大金色nobu*3/幽靈*5",
		drop: "羽毛/鬼燈/金青蛙/布",
		locate: "blackTemple" ,
		tag: "assassin/evil/earth/float/demonic/Qnobu/goldNobu/bigNobu/south"				
	}
	
	freeQuestList[6] = {			
		name: "探偵調查‧江古田",
		cost: "40",
		prev: "Mission.20 clear",
		enemy: "美艷人妻C狐*1/迷你金色nobu*3/黑道*5",
		drop: "火藥/髓液/金青蛙/銀青蛙/布",
		locate: "ekoda" ,
		tag: "caster/evil/eastern/mag_a/human/Qnobu/goldNobu/north"				
	}
	
	freeQuestList[7] = {			
		name: "探偵調查‧目白不動",
		cost: "40",
		prev: "Mission.22 clear",
		enemy: "JK狐*1/新選nobu*3/海賊*5",
		drop: "大騎士勳章/黨政/金青蛙/布",
		locate: "whiteTemple" ,
		tag: "eastern/evil/Qnobu/human/north"				
	}
	
	freeQuestList[8] = {			
		name: "探偵調查‧芝公園",
		cost: "40",
		prev: "Mission.35 clear",
		enemy: "B狐*1/迷你銀色機械nobu*3/魔豬*5",
		drop: "八連雙晶/種子/銀青蛙/布",
		locate: "shibaGarden" ,
		tag: "shores/earth/mag_a/beast/demonic/Qnobu/silverNobu/mechNobu/south"				
	}
	
	freeQuestList[9] = {			
		name: "探偵調查‧田端",
		cost: "40",
		prev: "Mission.23 clear",
		enemy: "海賊雙子(騎)*1/UFO nobu*3/狼*5",
		drop: "書頁/種子/金青蛙/銀青蛙",
		locate: "tabata" ,
		tag: "evil/Qnobu/float/beast/north"				
	}
	
	freeQuestList[10] = {			
		name: "探偵調查‧木場",
		cost: "40",
		prev: "Mission.29 clear",
		enemy: "清姬(狂)*1/迷你nobu*3/鬼武者*5",
		drop: "勾玉/火藥/布",
		locate: "kiba" ,
		tag: "shores/evil/earth/eastern/demonic/Qnobu/south"				
	}
	
	freeQuestList[11] = {			
		name: "探偵調查‧目赤不動",
		cost: "40",
		prev: "Mission.26 clear",
		enemy: "小金閃*1/迷你nobu*3/失心者*5",
		drop: "齒輪/笨蛋鎖/銀青蛙",
		locate: "redTemple" ,
		tag: "Qnobu/human/north"				
	}
	
	freeQuestList[12] = {			
		name: "探偵調查‧目黃不動",
		cost: "40",
		prev: "Mission.25 clear",
		enemy: "靜謐*1/巨大金色nobu*3/幽靈*5",
		drop: "羽毛/鬼燈/金青蛙",
		locate: "yellowTemple" ,
		tag: "lawful/assassin/evil/float/demonic/Qnobu/goldNobu/bigNobu/north"				
	}
	
	freeQuestList[13] = {			
		name: "探偵調查‧裡新宿",
		cost: "40",
		prev: "通過mainQuest.我ら帝都が七本槍",
		enemy: "巖窟王*1+巨大魔豬*1/巨大銀色nobu*3/魔豬*3",
		drop: "膽石/黑粉/金青蛙/銀青蛙/布",
		locate: "back_shinjuku" ,
		tag: "danger/evil/sta_a/demonic/beast/Qnobu/silverNobu/bigNobu"				
	}
	
	freeQuestList[14] = {			
		name: "探偵調查‧裡目白不動",
		cost: "40",
		prev: "Mission.36 clear",
		enemy: "黑傻巴*1+大黑狗*1/新選nobu/鬼武者*3",
		drop: "勾玉/地溝油/大騎士勳章/銀青蛙/布",
		locate: "back_whiteTemple" ,
		tag: "lawful/evil/mag_a/sta_a/demonic/beast/Qnobu/back_north"				
	}
	freeQuestList[15] = {			
		name: "探偵調查‧裡目赤不動",
		cost: "40",
		prev: "Mission.37 clear",
		enemy: "黑A*1+大眼怪*1/UFO nobu*3/海賊*3",
		drop: "血淚石/火藥/黨證/金青蛙/銀青蛙",
		locate: "back_redTemple" ,
		tag: "evil/eastern/demonic/float/Qnobu/human/back_north"				
	}
	freeQuestList[16] = {			
		name: "探偵調查‧裡目青不動",
		cost: "40",
		prev: "Mission.38 clear",
		enemy: "伊莉莎白*1+大蛇*1/迷你機械金色nobu*3/失心者*3",
		drop: "神酒/八連雙晶/笨蛋鎖/金青蛙/布",
		locate: "back_blueTemple" ,
		tag: "lancer/danger/evil/mag_a/demonic/beast/Qnobu/goldNobu/mechNobu/human/back_south"				
	}
	
	freeQuestList[17] = {			
		name: "探偵調查‧裡目黃不動",
		cost: "40",
		prev: "Mission.39 clear",
		enemy: "術狗*1+惡魔*1/UFO nobu*3/黑道*3",
		drop: "心臟/書頁/髓液/布",
		locate: "back_yellowTemple" ,
		tag: "lawful/caster/demonic/Qnobu/float/human/back_north"				
	}
	freeQuestList[18] = {			
		name: "探偵調查‧裡坂本探偵事務所",
		cost: "40",
		prev: "Mission.40 clear",
		enemy: "船長*1+雙角馬*1/迷你nobu*3/狼*3",
		drop: "馬角/齒輪/種子/銀青蛙",
		locate: "back_sakamoto" ,
		tag: "evil/beast/Qnobu/demonic"				
	}
	
	freeQuestList[19] = {			
		name: "探偵調查‧裡目黑不動",
		cost: "40",
		prev: "Mission.41 clear",
		enemy: "超高校級艷后*1+古戰場英雄(歿)/迷你銀色機械nobu/幽靈*3",
		drop: "鬼燈/八連雙晶/金青蛙",
		locate: "back_blackTemple" ,
		tag: "lawful/assassin/float/demonic/danger/Qnobu/silverNobu/mechNobu/back_south"				
	}
	
	freeQuestList[20] = {			
		name: "探偵調查‧裡芝公園",
		cost: "40",
		prev: "Mission.42 clear",
		enemy: "茨木*1+人面獅身*1/巨大nobu*3/英靈兵*3",
		drop: "聖甲蟲/羽毛/黑粉/金青蛙/銀青蛙/布",
		locate: "back_shibaGarden" ,
		tag: "demonic/evil/earth/eastern/sta_a/danger/sabaSoldier/Qnobu/bigNobu/back_south"				
	}
	 
	freeQuestList[21] = {			
		name: "探偵調查‧聖杯研究所",
		cost: "40",
		prev: "mainQuest.第12節 clear",
		enemy: "豆爸*1+迷你金色nobu*3/英靈兵*5",
		drop: "雙晶/黑粉/金青蛙/銀青蛙/布",
		locate: "holyGrail" ,
		tag: "caster/mag_a/Qnobu/goldNobu/mechNobu/sabaSoldier"				
	}
}
