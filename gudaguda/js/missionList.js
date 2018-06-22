function initMissionData(){
	
	missionList[0] = {
		name : "Mission1",
		target: "通過mainQuest.第二節「脈動」",
		prev: "--",
		reward: "金蘋果",
		tag: ""
	}

	missionList[1] = {
		name : "Mission2",
		target: "壓制一個青之陣地",
		prev: "Mission.1 clear",
		reward: "3M QP/開放mainQuest.第三節「人斬り」",
		tag: ""
	}

	missionList[2] = {
		name : "Mission3",
		target: "壓制一個白之陣地",
		prev: "mainQuest.第三節「人斬り」 clear",
		reward: "綠方*50/開放mainQuest.第四節「戰線」",
		tag: ""
	}

	missionList[3] = {
		name : "Mission4",
		target: "壓制三個青之陣地",
		prev: "mainQuest.第四節「戰線」 clear",
		reward: "呼符/開放mainQuest.第五節「才」",
		tag: ""
	}

	missionList[4] = {
		name : "Mission5",
		target: "合計壓制三個橙之陣地",
		prev: "Mission.18 clear",
		reward: "3M QP/開放mainQuest.第六節「約定」",
		tag: ""
	}

	missionList[5] = {
		name : "Mission6",
		target: "合計壓制三個白之陣地",
		prev: "mainQuest.第六節「約定」 clear",
		reward: "呼符/開放mainQuest.第七節「記憶」",
		tag: ""
	}

	missionList[6] = {
		name : "Mission7",
		target: "合計壓制兩個赤之陣地",
	        prev: "Mission.22 clear",
		reward: "3M QP/開放mainQuest.第八節「天海」",
        	tag: ""
	}

	missionList[7] = {
		name : "Mission8",
		target: "合計壓制16個陣地",
	        prev: "mainQuest.第八節「天海」 clear",
        	reward: "綠方*100/開放mainQuest.第九節「突入」",
	        tag: ""
	}

	missionList[8] = {
		name : "Mission9 *龍馬靈基道具",
		target: "壓制所有橙之陣地",
	        prev: "mainQuest.第六節「約定」 clear",
		reward: "海援隊旗",
		tag: ""
	}

	missionList[9] = {
		name : "Mission10",
		target: "壓制所有陣地",
	        prev: "Mission.30 clear",
		reward: "金狗",
        	tag: ""
	}
	
	missionList[10] = {
		name : "Mission11",
		target: "通過三種「七本槍」的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "綠方*100",
		tag: ""
	}

	missionList[11] = {
		name : "Mission12",
		target: "通過五種「七本槍」的關卡",
		prev: "Mission.11 clear",
		reward: "呼符",
		tag: ""
	}

	missionList[12] = {
		name : "Mission13",
		target: "通過所有「七本槍」的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "金狗",
		tag: ""
	}

	missionList[13] = {
		name : "Mission14",
		target: "打倒『アヴェンジャー・淀』",
		prev: "Mission.13 clear",
		reward: "四星禮裝肥",
		tag: ""
	}

	missionList[14] = {
		name : "Mission15",
		target: "打倒8隻nobu",
		prev: "Mission.1 clear",
		reward: "笨蛋鎖*5",
		tag: "Qnobu"
	}

	missionList[15] = {
		name : "Mission16",
		target: "打倒8個「秩序」鯖",
		prev: "mainQuest.第三節「人斬り」 clear",
		reward: "龍牙*5",
		tag: "lawful"
	}

	missionList[16] = {
		name : "Mission17",
		target: "打倒30個「魔性」敵人",
	        prev: "mainQuest.第四節「戰線」 clear",
		reward: "鬼燈*5",
		tag: "demonic"
	}

	missionList[17] = {
		name : "Mission18",
		target: "mainQuest.第五節「才」 clear",
        	prev: "Mission.4 clear",
	        reward: "3星禮裝肥",
	        tag: ""
	}

	missionList[18] = {
		name : "Mission19 *龍馬靈基道具",
		target: "打倒20隻銀色nobu",
        	prev: "mainQuest.第三節「人斬り」 clear",
		reward: "海援隊旗",
		tag: "silverNobu"
	}

	missionList[19] = {
		name : "Mission20",
		target: "打倒40隻金色nobu",
	        prev: "mainQuest.第六節「約定」 clear",
		reward: "種子*5/開放FreeQuest：江古田",
        	tag: "goldNobu"
	}

	missionList[20] = {
		name : "Mission21",
		target: "打倒40名「人類」敵人",
		prev: "Mission.20 clear",
		reward: "勾玉*5",
		tag: "human"
	}

	missionList[21] = {
		name : "Mission22",
		target: "mainQuest.第七節「記憶り」 clear",
		prev: "Mission.6 clear",
		reward: "3M/開放FreeQuest：目白不動",
		tag: ""
	}

	missionList[22] = {
		name : "Mission23",
		target: "打倒140隻nobu",
		prev: "Mission.22 clear",
		reward: "3星禮裝肥",
		tag: "Qnobu"
	}

	missionList[23] = {
		name : "Mission24",
		target: "打倒60隻機械nobu",
		prev: "Mission.23 clear",
		reward: "龍牙*5",
		tag: "mechNobu"
	}

	missionList[24] = {
		name : "Mission25",
		target: "打倒100隻「猛獸」敵人",
		prev: "mainQuest.第八節「天海」 clear",
		reward: "槍餅乾/開放FreeQuest：目黃不動",
		tag: "beast"
	}

	missionList[25] = {
		name : "Mission26",
		target: "完成50個任務",
		prev: "mainQuest.第八節「天海」 clear",
		reward: "4星禮裝肥",
		tag: ""
	}

	missionList[26] = {
		name : "Mission27",
		target: "打倒120隻銀色nobu",
		prev: "Mission.30 clear",
		reward: "殺輝石*5",
  	    	tag: "silverNobu"
	}

	missionList[27] = {
		name : "Mission28",
		target: "打倒120隻「浮游」敵人",
	        prev: "Mission.30 clear",
        	reward: "馬角*5",
	        tag: "float"
	}

	missionList[28] = {
		name : "Mission29",
		target: "打倒15個caster鯖",
	        prev: "Mission.30 clear",
		reward: "勾玉*5/開放FreeQuest：木場",
		tag: "caster"
	}

	missionList[29] = {
		name : "Mission30",
		target: "打倒15個assassin鯖",
	        prev: "mainQuest.第九節「突入」 clear",
		reward: "殺魔石",
        	tag: "assassin"
	}

	missionList[30] = {
		name : "Mission31",
		target: "完成70個任務",
		prev: "Mission.30 clear",
		reward: "奇奇神酒*5",
		tag: ""
	}

	missionList[31] = {
		name : "Mission32",
		target: "打倒20隻「猛獸」敵人",
		prev: "Mission.1 clear",
		reward: "書頁*5/開放FreeQuest：築地",
		tag: "beast"
	}

	missionList[32] = {
		name : "Mission33",
		target: "通過10次偵探所南方的關卡",
		prev: "Mission.18 clear",
		reward: "種子*5",
		tag: "south"
	}

	missionList[33] = {
		name : "Mission34",
		target: "打倒10個lancer鯖",
		prev: "Mission.33 clear",
		reward: "槍魔石",
		tag: "lancer"
	}

	missionList[34] = {
		name : "Mission35",
		target: "打倒15個「惡」屬性鯖",
		prev: "mainQuest.第六節「約定」 clear",
		reward: "蛇眼/開放FreeQuest：芝公園",
		tag: "evil"
	}

	missionList[35] = {
		name : "Mission36",
		target: "打倒160隻巨大nobu",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "聖甲蟲*5/開放FreeQuest.裡目白不動",
		tag: "bigNobu"
	}

	missionList[36] = {
		name : "Mission37",
		target: "打倒20隻lancer鯖",
	        prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "奇奇神酒*5/開放FreeQuest.裡目赤不動",
        	tag: "lancer"
	}

	missionList[37] = {
		name : "Mission38",
		target: "打倒20隻「秩序」鯖",
        	prev: "mainQuest.我ら帝都が七本槍 clear",
	        reward: "殺餅乾*5/開放FreeQuest.裡目青不動",
	        tag: "lawful"
	}

	missionList[38] = {
		name : "Mission39",
		target: "完成80個任務",
        	prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "金狗/開放FreeQuest.裡目赤不動",
		tag: ""
	}

	missionList[39] = {
		name : "Mission40",
		target: "打倒130隻機械nobu",
	        prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "聖甲蟲*5/開放FreeQuest.裡坂本探偵事務所",
        	tag: "mechNobu"
	}
	
	missionList[40] = {
		name : "Mission41",
		target: "打倒50隻英靈兵",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "金狗/開放FreeQuest.裡目黑不動",
		tag: "sabaSoldier"
	}

	missionList[41] = {
		name : "Mission42",
		target: "打倒120名「人類」敵人",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "*5/開放FreeQuest.裡芝公園",
		tag: "human"
	}

	missionList[42] = {
		name : "Mission43",
		target: "打倒80個nobu",
		prev: "Mission.15 clear",
		reward: "笨蛋鎖*5",
		tag: "Qnobu"
	}

	missionList[43] = {
		name : "Mission44",
		target: "打倒220隻nobu",
		prev: "Mission.23 clear",
		reward: "劍餅乾",
		tag: "Qnobu"
	}

	missionList[44] = {
		name : "Mission45",
		target: "打倒40隻大型nobu",
		prev: "maiinQuest.第四節「戰線」 clear",
		reward: "黑粉*5",
		tag: "bigNobu"
	}

	missionList[45] = {
		name : "Mission46",
		target: "打倒70隻大型nobu",
		prev: "mission.45 clear",
		reward: "黑粉*5",
		tag: "bigNobu"
	}

	missionList[46] = {
		name : "Mission47",
		target: "打倒120隻大型nobu",
	        prev: "mission.46 clear",
		reward: "黑粉*5",
	        tag: "bigNobu"
	}

	missionList[47] = {
		name : "Mission48",
		target: "打倒80隻銀色nobu",
        	prev: "Mission.19 clear",
	        reward: "龍牙*5",
	        tag: "silverNobu"
	}

	missionList[48] = {
		name : "Mission49",
		target: "打倒160隻銀色nobu",
	        prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "金狗",
		tag: "silverNobu"
	}

	missionList[49] = {
		name : "Mission50 *龍馬靈基道具",
		target: "打倒80隻金色nobu",
	        prev: "Mission.20 clear",
		reward: "海援隊旗",
        	tag: "goldNobu"
	}

	missionList[50] = {
		name : "Mission51",
		target: "打倒120隻金色nobu",
		prev: "Mission.50 clear",
		reward: "殺輝石*5",
		tag: "goldNobu"
	}

	missionList[51] = {
		name : "Mission52 *龍馬寶具任務",
		target: "打倒160隻金色nobu",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "坂本龍馬",
		tag: "goldNobu"
	}

	missionList[52] = {
		name : "Mission53",
		target: "打倒40隻機械nobu",
		prev: "Mission.18 clear",
		reward: "笨蛋鎖*5",
		tag: "mechNobu"
	}

	missionList[53] = {
		name : "Mission54",
		target: "打倒30隻「英靈兵」",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "騎輝石*5",
		tag: "sabaSoldier"
	}
	missionList[54] = {
		name : "Mission55",
		target: "打倒80隻「魔性」敵人",
		prev: "Mission.17 clear」",
		reward: "鬼燈*5",
		tag: "demonic"
	}

	missionList[55] = {
		name : "Mission56",
		target: "打倒130隻「魔性」敵人",
		prev: "mainQuest.第十節「降誕」 clear",
		reward: "開放mainQuest.第11節「抑止」",
		tag: "demonic"
	}

	missionList[56] = {
		name : "Mission57",
		target: "打倒80名「人類」敵人",
        	prev: "Mission.21 clear",
		reward: "蛇眼*5",
	        tag: "human"
	}

	missionList[57] = {
		name : "Mission58",
		target: "打倒70隻「猛獸」敵人",
        	prev: "Mission.32 clear",
	        reward: "書頁*5",
	        tag: "beast"
	}

	missionList[58] = {
		name : "Mission59",
		target: "打倒40隻「浮游」的敵人",
	        prev: "Mission.22 clear",
		reward: "鬼燈*5",
		tag: "float"
	}

	missionList[59] = {
		name : "Mission60",
		target: "打倒70隻「浮游」的敵人",
	        prev: "Mission.59 clear",
		reward: "書頁*5",
        	tag: "float"
	}
	
	missionList[60] = {
		name : "Mission61",
		target: "打倒10隻大型危險生物",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "劍輝石",
		tag: "danger"
	}

	missionList[61] = {
		name : "Mission62 *龍馬寶具任務",
		target: "打倒15隻大型危險生物",
		prev: "Mission.61 clear",
		reward: "坂本龍馬",
		tag: "danger"
	}

	missionList[62] = {
		name : "Mission63",
		target: "打倒15隻lancer鯖",
		prev: "Mission.34 clear",
		reward: "騎魔石*5",
		tag: "lancer"
	}

	missionList[63] = {
		name : "Mission64",
		target: "打倒10隻caster鯖",
		prev: "Mission.18 clear",
		reward: "勾玉*5",
		tag: "caster"
	}

	missionList[64] = {
		name : "Mission65",
		target: "打倒20隻caster鯖",
		prev: "Mission.29 clear",
		reward: "金狗",
		tag: "caster"
	}

	missionList[65] = {
		name : "Mission66",
		target: "打倒10隻assassin鯖",
		prev: "mainQuesst.第八節「天海」 clear",
		reward: "殺魔石",
		tag: "assassin"
	}

	missionList[66] = {
		name : "Mission67",
		target: "打倒20隻assassinx鯖",
        	prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "地溝油",
	        tag: "assassin"
	}

	missionList[67] = {
		name : "Mission68",
		target: "打倒15隻「秩序」鯖",
	        prev: "Mission.16 clear",
	        reward: "騎魔石",
	        tag: "lawful"
	}

	missionList[68] = {
		name : "Mission69",
		target: "打倒10個「惡」鯖",
	        prev: "Mission.18 clear",
		reward: "蛇眼*5",
		tag: "evil"
	}

	missionList[69] = {
		name : "Mission70",
		target: "打倒20個「惡」鯖",
	        prev: "Mission.35 clear",
		reward: "金狗",
        	tag: "evil"
	}

	missionList[70] = {
		name : "Mission71",
		target: "打倒10個「地」鯖",
		prev: "mainQuest.第四節「戰線」 clear",
		reward: "劍魔石",
		tag: "earth"
	}

	missionList[71] = {
		name : "Mission72",
		target: "打倒15個「地」鯖",
		prev: "Mission.71 clear",
		reward: "劍魔石",
		tag: "earth"
	}
	missionList[72] = {
		name : "Mission73",
		target: "打倒20個「地」鯖",
		prev: "mainQuest.第九節「突入」 clear",
		reward: "馬角*5/開啟mainQuest.第十節‧「降誕」",
		tag: "earth"
	}
	
	missionList[73] = {
		name : "Mission74 *龍馬靈基道具",
		target: "打倒10個東洋鯖",
		prev: "mainQuest.第四節「戰線」 clear",
		reward: "海援隊旗",
		tag: "eastern"
	}

	missionList[74] = {
		name : "Mission75",
		target: "打倒10個魔力A以上的鯖",
		prev: "Mission.18 clear",
		reward: "4M qp",
		tag: "mag_a"
	}

	missionList[75] = {
		name : "Mission76 *龍馬寶具任務",
		target: "打倒10個耐久A以上的鯖",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "坂本龍馬",
		tag: "sta_a"
	}

	missionList[76] = {
		name : "Mission77",
		target: "通過10次「沿海」的關卡",
        	prev: "mainQuest.第六節「約定」 clear",
		reward: "槍輝石",
	        tag: "shores"
	}

	missionList[77] = {
		name : "Mission78",
		target: "通過10次偵探事務所北邊的關卡",
        	prev: "Mission.18 clear",
	        reward: "水兵小姐禮裝",
	        tag: "north"
	}

        missionList[78] = {
		name : "Mission79",
		target: "通關所有「沿海」的關卡",
        	prev: "Mission.30 clear",
		reward: "種子*5",
		tag: "shores"
	}

	missionList[79] = {
		name : "Mission80",
		target: "通過所有偵探事務所北邊的關卡",
	        prev: "mainQurst.第八節「天海」 clear",
		reward: "4M QP",
        	tag: "north"
	}

	missionList[80] = {
		name : "Mission81",
		target: "通過所有偵探事務所南邊的關卡",
		prev: "Mission.30 clear",
		reward: "3星禮裝肥",
		tag: "south"
	}

	missionList[81] = {
		name : "Mission82",
		target: "通關10次裡帝都偵探事務所北邊的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "騎輝石*5",
		tag: "back_north"
	}

	missionList[82] = {
		name : "Mission83",
		target: "通關10次裡帝都偵探事務所南邊的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "3星禮裝肥",
		tag: "back_south"
	}

	missionList[83] = {
		name : "Mission84",
		target: "通過所有裡帝都偵探事務所北邊的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "黑爪*5",
		tag: "back_north"
	}

	missionList[84] = {
		name : "Mission85",
		target: "通過所有裡帝都偵探事務所南邊的關卡",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "騎餅乾",
		tag: "back_south"
	}

	missionList[85] = {
		name : "Mission86 *龍馬寶具任務",
		target: "所有關卡通關1次",
		prev: "mainQuest.我ら帝都が七本槍 clear",
		reward: "坂本龍馬*1",
		tag: ""
	}

	missionList[86] = {
		name : "Mission87",
		target: "獲得200個布",
        	prev: "Mission.1 clear",
		reward: "3M qp",
	        tag: ""
	}

	missionList[87] = {
		name : "Mission88",
		target: "獲得400個布",
        	prev: "Mission.87 clear",
	        reward: "綠方*50",
	        tag: ""
	}

	missionList[88] = {
		name : "Mission89",
		target: "Mission.1 clear",
        	prev: " 獲得200個銀青蛙",
		reward: "3M QP",
		tag: ""
	}


	missionList[89] = {
		name : "Mission90",
		target: "Mission.89 clear",
        	prev: " 獲得400個銀青蛙",
		reward: "綠方*50",
		tag: ""
	}

	missionList[90] = {
		name : "Mission91",
		target: "獲得200個金青蛙",
	        prev: "mainQuest.第三節「人斬り」 clear",
		reward: "3M qp",
        	tag: ""
	}
	
	missionList[91] = {
		name : "Mission92",
		target: "獲得400個金青蛙",
		prev: "Mission.91 clear",
		reward: "3星禮裝肥",
		tag: ""
	}
	

	missionList[92] = {
		name : "Mission93",
		target: "龍馬靈基1",
		prev: "mainQuest.第四節「戰線」clear",
		reward: "劍輝石*5",
		tag: ""
	}

	missionList[93] = {
		name : "Mission94",
		target: "龍馬靈基3",
		prev: "Mission.93 clear",
		reward: "槍魔石",
		tag: ""
	}

	missionList[94] = {
		name : "Mission95",
		target: "龍馬絆3",
		prev: "mainQuest.第四節「戰線」clear",
		reward: "綠方*100",
		tag: ""
	}

	missionList[95] = {
		name : "Mission96",
		target: "帶著龍馬通關10次",
		prev: "mainQuest.第四節「戰線」clear",
		reward: "槍輝石",
		tag: ""
	}

	missionList[96] = {
		name : "Mission97",
		target: "帶著龍馬通關15次",
        	prev: "Mission.96 clear",
		reward: "4星禮裝肥",
	        tag: ""
	}

	missionList[97] = {
		name : "Mission98",
		target: "帶著龍馬通關20次",
	        prev: "Mission.97 clear",
        	reward: "金狗",
	        tag: ""
	}

	missionList[98] = {
		name : "Mission99",
		target: "通過30個任務",
	        prev: "mainQuest.第四節「戰線」clear",
		reward: "呼符",
		tag: ""
	}

	missionList[99] = {
		name : "Mission100",
		target: "完成所有任務",
	        prev: "Mission.39 clear",
		reward: "傳承結晶",
        	tag: ""
	}


}
