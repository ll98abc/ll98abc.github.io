function initMissionData(){
	
	missionList[0] = {
		name : "Mission1",
		target: "mainQuest.【ちょっと湖畔へ】 clear",
		prev: "--",
		reward: "金蘋果",
		tag: ""
	}

	missionList[1] = {
		name : "Mission2",
		target: "入手全部文件檔案",
		prev: "mainQuest.最終節【悲傷的後日談】 clear",
		reward: "開啟extra關卡【サーヴァント・サマーキャンプⅡ】(1/2)",
		tag: ""
	}

	missionList[2] = {
		name : "Mission3 【學姊寶具UP】",
		target: "extraQuest.續篇Battle 1 clear",
		prev: "extra關卡【サーヴァント・サマーキャンプⅡ】(1/2) clear",
		reward: "泳裝學姊*1",
		tag: ""
	}

    	missionList[3] = {
		name : "Mission4 【學姊寶具UP】",
		target: "extraQuest.續篇Battle 2 clear",
		prev: "extra關卡【サーヴァント・サマーキャンプⅡ】(1/2) clear",
		reward: "泳裝學姊*1",
		tag: ""
	}

	missionList[4] = {
		name : "Mission5 【學姊寶具UP】",
		target: "extraQuest.續篇Battle 3 clear",
		prev: "通過extra關卡【サーヴァント・サマーキャンプⅡ】(1/2)",
		reward: "泳裝學姊*1",
		tag: ""
	}

	missionList[5] = {
		name : "Mission6 【學姊寶具UP】",
		target: "extraQuest.續篇Battle 4 clear",
		prev: "extra關卡【サーヴァント・サマーキャンプⅡ】(1/2) clear",
		reward: "泳裝學姊*1",
		tag: ""
	}

    	missionList[6] = {
		name : "Mission7",
		target: "全部的extraQuest.續篇Battle clear",
		prev: "extra關卡【サーヴァント・サマーキャンプⅡ】(1/2) clear",
		reward: "心臟",
        	tag: ""
	}

    	missionList[7] = {
		name : "Mission8",
		target: "extra關卡【サーヴァント・サマーキャンプⅡ】(2/2) clear",
        	prev: "Mission.7 clear",
        	reward: "金蛋",
        	tag: ""
	}

    	missionList[8] = {
		name : "Mission9",
		target: "打倒10隻「魔豬」",
        	prev: "",
		reward: "劍輝石、開啟mainQuest.第一節【enjoy holiday】(2/3)",
		tag: "hog"
	}

	missionList[9] = {
		name : "Mission10",
		target: "打倒20隻「寄居蟹」",
        	prev: "mainQuest.第二節【仮面の殺人鬼たち】 clear",
		reward: "哈達王子角、開啟mainQuest.幕間【夏之御山四天王】",
        	tag: "crab"
	}
	
	missionList[10] = {
		name : "Mission11 【良玉禮裝】",
		target: "打倒20隻「飛龍」",
		prev: "mainQuest.幕間【夏之御山四天王】 clear",
		reward: "良玉禮裝、開啟mainQuest.第三節【鬧鬼大樓】(1/2)",
		tag: "wyvern"
	}

	missionList[11] = {
		name : "Mission12",
		target: "打倒6隻「danger魔豬」",
		prev: "mainQuest.第三節【鬧鬼大樓】(2/2) clear，天亮之後開啟",
		reward: "銀蘋果、開啟mainQuest.幕間【湖上驚魂】",
		tag: "dangerPig"
	}

	missionList[12] = {
		name : "Mission13",
		target: "通過8次渡假小屋(日)的關卡",
		prev: "mainQuest.幕間【湖上驚魂】 clear",
		reward: "槍輝石、開啟mainQuest.幕間【要上了！ VR新陰流！】",
		tag: ""
	}

    	missionList[13] = {
		name : "Mission14",
		target: "打倒20隻「魔書」",
		prev: "mainQuest.幕間【要上了！ VR新陰流！】 clear",
		reward: "黑粉、開啟mainQuest第四節【詛咒與怨念與錄影帶】(1/2)",
		tag: "book"
	}

	missionList[14] = {
		name : "Mission15 【良玉禮裝】",
		target: "打倒6隻「雙角馬」",
		prev: "mainQuest第四節【詛咒與怨念與錄影帶】(1/2) clear",
		reward: "良玉禮裝、開啟mainQuest.第四節【詛咒與怨念與錄影帶】(2/2)",
		tag: "hornHorse"
	}

	missionList[15] = {
		name : "Mission16",
		target: "打倒6隻「danger寄居蟹」",
		prev: "mainQuest.第四節【詛咒與怨念與錄影帶】(2/2) clear",
		reward: "書頁、開啟mainQuest.幕間【上吧！鬼魂討伐隊！】",
		tag: "dangerCrab"
	}

    	missionList[16] = {
		name : "Mission17",
		target: "通過9次湖畔(日)的關卡",
        	prev: "mainQuest.幕間【上吧！鬼魂討伐隊！】 clear",
		reward: "銀蘋果、開啟mainQuest.第五節【smiling】 (1/2)",
	    tag: ""
	}

    	missionList[17] = {
		name : "Mission18",
		target: "通過9次大樓(夜)的關卡",
        	prev: "mainQuest.第五節【smiling】 (1/2) clear",
        	reward: "開啟mainQuest.第五節【smiling】 (2/2)",
        	tag: ""
	}

    	missionList[18] = {
		name : "Mission19 【良玉禮裝】",
		target: "打倒6隻「龍」",
        	prev: "mainQuest.第五節【smiling】 (2/2) clear，天亮之後開啟",
		reward: "良玉禮裝、開啟mainQuest.幕間【歡迎來到怪談小屋】",
		tag: "dragon"
	}

	missionList[19] = {
		name : "Mission20",
		target: "通過9次深邃森林(日)的關卡",
        	prev: "mainQuest.幕間【歡迎來到怪談小屋】 clear",
		reward: "騎魔石、開啟mainQuest.第六節【活屍們的一天】(1/2)",
        	tag: ""
	}

	missionList[20] = {
		name : "Mission21",
		target: "打倒20隻「雞」",
		prev: "mainQuest.第六節【活屍們的一天】(1/2) clear",
		reward: "書頁、開啟mainQuest.第六節【活屍們的一天】(2/2)",
		tag: "chicken"
	}

	missionList[21] = {
		name : "Mission22",
		target: "打倒6隻「斯芬克斯」",
		prev: "mainQuest.第六節【活屍們的一天】(2/2) clear，天亮之後開啟",
		reward: "銀蘋果、開啟mainQuest.第七節【夢魘．幻影】(1/2)",
		tag: "sphinx"
	}

	missionList[22] = {
		name : "Mission23",
		target: "打倒20隻蛇蜥",
		prev: "mainQuest.第七節【夢魘．幻影】(2/2) clear",
		reward: "綠方、開啟mainQuest.【探索到晚上】",
		tag: "basilisk"
	}

	missionList[23] = {
		name : "Mission24",
		target: "打倒6隻「soulEater」",
		prev: "mainQuest.mainQuest.第八節【懲罰者女孩】 (1/2) clear",
		reward: "槍魔石、開啟mainQuest.第八節【懲罰者女孩】 (2/2)",
		tag: "soulEater"
	}

	missionList[24] = {
		name : "Mission25",
		target: "打倒20隻「蟲群」",
		prev: "mainQuest.第九節【人魚秘〆】 clear，天亮之後開啟",
		reward: "蹄鐵、開啟mainQuest.第十節【兩千年與三千人的壞人們】",
		tag: "bugs"
	}

	missionList[25] = {
		name : "Mission26",
		target: "打倒3隻「守寶妖精」 【復刻修改為「娜迦(黃金龍)」=洋館B(日)】",
		prev: "mainQuest.第十節【兩千年與三千人的壞人們】 clear",
		reward: "鬼燈、開啟mainQuest.第十一節【等待在死亡與恐怖之側的事物】",
		tag: "spriggan_naga"
	}

	missionList[26] = {
		name : "Mission27",
		target: "打倒15隻「魔書」或「死靈」",
	    	prev: "mainQuest.第三節【鬧鬼大樓】 (2/2) clear",
		reward: "開啟文件檔案 1",
	    	tag: "necro_book",	    
	}

	missionList[27] = {
		name : "Mission28",
		target: "通過1次市場(不分日夜)的關卡",
        	prev: "mainQuest.第六節【活屍們的一天】(1/2) clear",
        	reward: "鐵釘、開啟文件檔案 2",
        	tag: ""
	}

    	missionList[28] = {
		name : "Mission29",
		target: "通過3次大樓(不分日夜)的關卡",
        	prev: "mainQuest.第三節【鬧鬼大樓】(2/2) clear",
		reward: "種子、開啟文件檔案 3",
		tag: ""
	}

	missionList[29] = {
		name : "Mission30",
		target: "通過3次市場(不分日夜)的關卡",
        	prev: "mainQuest.第六節【活屍們的一天】(2/2) clear",
		reward: "殺魔石、開啟文件檔案 5",
        	tag: ""
	}

	missionList[30] = {
		name : "Mission31",
		target: "通過3次洋館的關卡",
		prev: "mainQuest.第七節【夢魘．幻影】(2/2) clear",
		reward: "黑粉、開啟文件檔案 6",
		tag: ""
	}

	missionList[31] = {
		name : "Mission32",
		target: "通過3次微笑旅舍的關卡",
		prev: "mainQuest.第八節【懲罰者女孩】 (2/2) clear",
		reward: "齒輪、開啟文件檔案 7",
		tag: ""
	}

	missionList[32] = {
		name : "Mission33 【學姊靈基UP】",
		target: "打倒20隻「猛獸」",
		prev: "Mission.1 clear",
		reward: "學姊靈基道具",
		tag: "beast"
	}

    	missionList[33] = {
		name : "Mission34",
		target: "打倒30隻「猛獸」",
		prev: "Mission.33 clear",
		reward: "黑粉",
		tag: "beast"
	}

	missionList[34] = {
		name : "Mission35",
		target: "打倒40隻「猛獸」",
		prev: "Mission.34 clear",
		reward: "綠方",
		tag: "beast"
	}

	missionList[35] = {
		name : "Mission36",
		target: "打倒60隻「猛獸」",
		prev: "Mission.35 clear",
		reward: "番薯藤",
		tag: "beast"
	}

    	missionList[36] = {
		name : "Mission37",
		target: "打倒20名「人類」或是「雞」",
        	prev: "mainQuest.第四節【詛咒與怨念與錄影帶】(2/2) clear",
		reward: "哈達王子角、開啟文件檔案 4",
        	tag: "human_chicken"
	}

    	missionList[37] = {
		name : "Mission38",
		target: "打倒30名「人類」或是「雞」",
        	prev: "Mission.37 clear",
        	reward: "劍魔石",
        	tag: "human_chicken"
	}

    	missionList[38] = {
		name : "Mission39",
		target: "打倒40名「人類」或是「雞」",
        	prev: "Mission.38 clear",
		reward: "殺秘石",
		tag: "human_chicken"
	}

	missionList[39] = {
		name : "Mission40",
		target: "打倒60名「人類」或是「雞」",
        	prev: "Mission.39 clear",
		reward: "馬角",
        	tag: "human_chicken"
	}
	
	missionList[40] = {
		name : "Mission41 【學姊靈基UP】",
		target: "打倒20隻「魔性」敵人",
		prev: "Mission.1 clear",
		reward: "學姊靈基道具",
		tag: "demonic"
	}

	missionList[41] = {
		name : "Mission42",
		target: "打倒30隻「魔性」敵人",
		prev: "Mission.41 clear",
		reward: "黨證",
		tag: "demonic"
	}

	missionList[42] = {
		name : "Mission43",
		target: "打倒40隻「魔性」敵人",
		prev: "Mission.42 clear",
		reward: "箭頭",
		tag: "demonic"
	}

    	missionList[43] = {
		name : "Mission44",
		target: "打倒5隻「巨大生物」",
		prev: "Mission.1 clear",
		reward: "騎輝石",
		tag: "huge"
	}

	missionList[44] = {
		name : "Mission45",
		target: "打倒10隻「巨大生物」",
		prev: "Mission.44 clear",
		reward: "綠方",
		tag: "huge"
	}

	missionList[45] = {
		name : "Mission46",
		target: "打倒15隻「巨大生物」",
		prev: "Mission.45 clear",
		reward: "蹄鐵",
		tag: "huge"
	}

    	missionList[46] = {
		name : "Mission47",
		target: "打倒20隻「巨大生物」",
		prev: "Mission.46 clear",
		reward: "槍秘石",
        	tag: "huge"
	}

    	missionList[47] = {
		name : "Mission48",
		target: "打倒5隻「神性」敵人",
        	prev: "mainQuest.幕間【上吧！鬼魂討伐隊！】",
        	reward: "刻印．真紅仙女的令印",
        	tag: "god"
	}

    	missionList[48] = {
		name : "Mission49",
		target: "打倒10隻「神性」敵人",
        	prev: "Mission.48 clear",
		reward: "騎魔石",
		tag: "god"
	}

	missionList[49] = {
		name : "Mission50",
		target: "打倒15隻「神性」敵人",
        	prev: "Mission.49 clear",
		reward: "鬼燈",
        	tag: "god"
	}

	missionList[50] = {
		name : "Mission51",
		target: "打倒30隻「saber」",
		prev: "Mission.1 clear",
		reward: "殺輝石",
		tag: "saber"
	}

	missionList[51] = {
		name : "Mission52",
		target: "打倒60隻「saber」",
		prev: "Mission.51 clear",
		reward: "劍魔石",
		tag: "saber"
	}

	missionList[52] = {
		name : "Mission53",
		target: "打倒90隻「saber」",
		prev: "Mission.52 clear",
		reward: "羽毛",
		tag: "saber"
	}
	
	missionList[53] = {
		name : "Mission54",
		target: "打倒30隻「archer」",
		prev: "mainQuest.第三節【鬧鬼大樓】(1/2) clear",
		reward: "種子",
		tag: "archer"
	}

	missionList[54] = {
		name : "Mission55",
		target: "打倒90隻「archer」",
		prev: "Mission.54 clear",
		reward: "綠方",
		tag: "archer"
	}

	missionList[55] = {
		name : "Mission56",
		target: "打倒90隻「archer」",
		prev: "Mission.55 clear",
		reward: "獅子毛",
		tag: "archer"
	}

    	missionList[56] = {
		name : "Mission57 【學姊靈基UP】",
		target: "打倒30隻「lancer」",
        	prev: "Mission.1 clear",
		reward: "學姊靈基道具",
        	tag: "lancer"
	}

    	missionList[57] = {
		name : "Mission58",
		target: "打倒60隻「lancer」",
        	prev: "Mission.57 clear",
		reward: "殺魔石",
        	tag: "lancer"
	}

    	missionList[58] = {
		name : "Mission59",
		target: "打倒90隻「lancer」",
		prev: "Mission.58 clear",
		reward: "心臟",
        	tag: "lancer"
	}

	missionList[59] = {
		name : "Mission60",
		target: "打倒30隻「caster」",
        	prev: "mainQuest.第六節【活屍們的一天】(1/2) clear",
		reward: "黨證",
        	tag: "caster"
	}
	
	missionList[60] = {
		name : "Mission61",
		target: "打倒60隻「caster」",
        	prev: "Mission.60 clear",
		reward: "刻印．羅龍面具",
        	tag: "caster"
	}

	missionList[61] = {
		name : "Mission62",
		target: "打倒90隻「caster」",
        	prev: "Mission.61 clear",
		reward: "馬角",
        	tag: "caster"
	}

	missionList[62] = {
		name : "Mission63",
		target: "打倒30隻「berserker」",
		prev: "Mission.1 clear",
		reward: "劍輝石",
		tag: "berserker"
	}

    	missionList[63] = {
		name : "Mission64",
		target: "打倒5隻稀有怪",
		prev: "mainQuest.幕間【夏之御山四天王】",
		reward: "綠方",
		tag: ""
	}

	missionList[64] = {
		name : "Mission65",
		target: "打倒10隻稀有怪",
		prev: "Mission.64 clear",
		reward: "槍魔石",
		tag: ""
	}

	missionList[65] = {
		name : "Mission66",
		target: "打倒15隻稀有怪",
		prev: "Mission.65 clear",
		reward: "書頁",
		tag: ""
	}

    	missionList[66] = {
		name : "Mission67",
		target: "打倒20隻稀有怪",
		prev: "Mission.66 clear",
		reward: "劍秘石",
        	tag: ""
	}

	missionList[67] = {
		name : "Mission68",
		target: "打倒25隻稀有怪",
		prev: "Mission.67 clear",
		reward: "獅子毛",
        	tag: ""
	}

    	missionList[68] = {
		name : "Mission69",
		target: "打倒30隻稀有怪",
		prev: "Mission.68 clear",
		reward: "金蛋",
		tag: ""
	}

	missionList[69] = {
		name : "Mission70",
		target: "通過10次「屋內」的關卡",
        	prev: "mainQuest.第三節【鬧鬼大樓】(1/2) clear",
		reward: "種子",
        	tag: "inside"
	}

	missionList[70] = {
		name : "Mission71",
		target: "通過20次「屋內」的關卡",
		prev: "Mission.70 clear",
		reward: "箭頭",
		tag: "inside"
	}

	missionList[71] = {
		name : "Mission72",
		target: "通過10次「屋外」的關卡",
		prev: "Mission.1 clear",
		reward: "蹄鐵",
		tag: "outside"
	}
	
	missionList[72] = {
		name : "Mission73",
		target: "通過20次「屋外」的關卡",
		prev: "Mission.74 clear",
		reward: "鬼燈",
		tag: "outside"
	}

    	missionList[73] = {
		name : "Mission74",
		target: "通過10次「日間」的關卡",
		prev: "Mission.1 clear",
		reward: "哈達王子角",
		tag: "day"
	}

	missionList[74] = {
		name : "Mission75",
		target: "通過20次「日間」的關卡",
		prev: "Mission.74 clear",
		reward: "鬼燈",
		tag: "day"
	}

	missionList[75] = {
		name : "Mission76",
		target: "通過10次「夜間」的關卡",
		prev: "mainQuest.第一節【enjoy holiday】(3/3) clear",
		reward: "鐵釘",
		tag: "night"
	}

    	missionList[76] = {
		name : "Mission77",
		target: "通過15次「夜間」的關卡",
        	prev: "Mission.76 clear",
		reward: "齒輪",
        	tag: "night"
	}

    	missionList[77] = {
		name : "Mission78",
		target: "通過30次「日間」的關卡",
        	prev: "mainQuest.最終節【悲傷的後日談】 clear",
        	reward: "神燈、開啟extraQuest【喂、這森林該不會出不去了吧？】",
        	tag: ""
	}

    	missionList[78] = {
		name : "Mission79",
		target: "通過20次「夜間」的關卡",
        	prev: "mainQuest.最終節【悲傷的後日談】 clear",
		reward: "金狗",
		tag: ""
	}

	missionList[79] = {
		name : "Mission80",
		target: "獲得200個鍊鋸",
        	prev: "Mission.1 clear",
		reward: "黨證",
        	tag: ""
	}

	missionList[80] = {
		name : "Mission81",
		target: "獲得400個鍊鋸",
		prev: "Mission.80 clear",
		reward: "齒輪",
		tag: ""
	}

	missionList[81] = {
		name : "Mission82",
		target: "獲得600個鍊鋸",
		prev: "mainQuest.最終節【悲傷的後日談】 clear",
		reward: "神燈",
		tag: ""
	}

	missionList[82] = {
		name : "Mission83",
		target: "獲得200個野菜",
		prev: "Mission.1 clear",
		reward: "騎輝石",
		tag: ""
	}

    	missionList[83] = {
		name : "Mission84",
		target: "獲得400個野菜",
		prev: "Mission.83 clear",
		reward: "番薯藤",
		tag: ""
	}

	missionList[84] = {
		name : "Mission85",
		target: "獲得600個野菜",
		prev: "mainQuest.最終節【悲傷的後日談】 clear",
		reward: "騎秘石",
		tag: ""
	}

	missionList[85] = {
		name : "Mission86 【學姊靈基UP】",
		target: "獲得200個乾柴",
		prev: "Mission.1 clear",
		reward: "學姊靈基道具",
		tag: ""
	}

    	missionList[86] = {
		name : "Mission87",
		target: "獲得400個乾柴",
        	prev: "Mission.86 clear",
		reward: "綠方",
        	tag: ""
	}

    	missionList[87] = {
		name : "Mission88",
		target: "獲得600個乾柴",
        	prev: "mainQuest.最終節【悲傷的後日談】 clear",
        	reward: "羽毛",
        	tag: ""
	}

    	missionList[88] = {
		name : "Mission89",
		target: "泳裝學姊靈基強化1",
        	prev: "mainQuest.第一節【enjoy holiday】 (2/3) clear",
		reward: "槍輝石",
		tag: ""
	}

	missionList[89] = {
		name : "Mission90",
		target: "泳裝學姊靈基強化3",
        	prev: "Mission.89 clear",
		reward: "銀蘋果",
        	tag: ""
	}
	
	missionList[90] = {
		name : "Mission91",
		target: "泳裝學姊絆等級3",
		prev: "mainQuest.最終節【悲傷的後日談】 clear",
		reward: "箭頭、開啟extraQuest「幽靈少女的夏天」",
		tag: ""
	}

	missionList[91] = {
		name : "Mission92",
		target: "帶著泳裝學姊打10次關卡",
		prev: "mainQuest.第一節【enjoy holiday】 (2/3) clear",
		reward: "鐵釘",
		tag: ""
	}

	missionList[92] = {
		name : "Mission93",
		target: "帶著泳裝學姊打15次關卡",
		prev: "Mission.92 clear",
		reward: "綠方",
		tag: ""
	}

    	missionList[93] = {
		name : "Mission94",
		target: "帶著泳裝學姊打20次關卡",
		prev: "mainQuest.第十一節【等待在死亡與恐怖之側的事物】clear",
		reward: "金狗、開啟文件檔案 9",
		tag: ""
	}

	missionList[94] = {
		name : "Mission95",
		target: "解掉10個任務",
		prev: "Mission.1 clear",
		reward: "銀蘋果",
		tag: ""
	}

	missionList[95] = {
		name : "Mission96",
		target: "解掉30個任務",
		prev: "Mission.95 clear",
		reward: "綠方",
		tag: ""
	}

    	missionList[96] = {
		name : "Mission97 【良玉禮裝】",
		target: "解掉50個任務",
        	prev: "Mission.96 clear",
		reward: "良玉禮裝",
        	tag: ""
	}

    	missionList[97] = {
		name : "Mission98",
		target: "解掉70個任務",
        	prev: "mainQuest.第十一節【等待在死亡與恐怖之側的事物】clear",
        	reward: "刻印．皇家兔女郎、開啟文件檔案 8",
        	tag: ""
	}

    	missionList[98] = {
		name : "Mission99",
		target: "解掉90個任務",
        	prev: "Mission.98 clear",
		reward: "金狗",
		tag: ""
	}

	missionList[99] = {
		name : "Mission100",
		target: "解掉其他所有任務",
        	prev: "extraQuest.サーヴァント・サマーキャンプⅡ(1/2) clear",
		reward: "傳承結晶",
        	tag: ""
	}
}
