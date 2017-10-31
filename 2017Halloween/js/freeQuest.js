function initFreeQuestData(){

	wantedQuestList[0] = {			
			name: "extra.1 No data",
			cost: "0",
			prev: "--",
			enemy: "--", 
			drop: "--",
			locate: "castleTower",
			tag: "--"
	}
        /*
	wantedQuestList[1] = {			
			name: "",
			cost: "",
			prev: "",
			enemy: "", 
			drop: "",
			locate: "",
			tag: ""
	}
        */
	
	freeQuestList[0] = {			
			name: "賽伊特‧食料庫",
			cost: "0",
			prev: "Mission.21 clear",
			enemy: "金屬南瓜骷髏(14k狂)*2+自動人偶(25k騎)/自動人偶(28k騎)+金屬南瓜骷髏(21k狂)/金屬南瓜骷髏(39k狂)+大米射手俵藤太(80k弓)", 
			drop: "黑粉/龍牙/飛彈汽水/鑽頭軟糖",
			locate: "foodDepot",
			tag: "archer/170cm/m_skeleton/pumpkin/mech/automata"
	}	
	 
	freeQuestList[1] = {
			name: "賽伊特‧貴賓室",
			cost: "0",
			prev: "mainQuest.第二節 clear",
			enemy: "南瓜骷髏(6k槍)*2+南瓜騎士(6k騎)/南瓜騎士(19k騎)+月之王子阿斯托爾福(20k騎)", 
			drop: "鑽頭軟糖/熱線餅乾/大騎士勳章/兇骨",
			locate: "vipRoom",
			tag: "chaos/rider/p_knight/p_skeleton/demonic/pumpkin"
	}


	freeQuestList[2] = {
                        name: "賽伊特‧監視塔",
			cost: "0",
			prev: "Mission.75 clear",
			enemy: "南瓜骷髏(9k弓)*2+南瓜騎士(9k騎)/南瓜騎士(9k騎)+投石之王大衛(20k弓)", 
			drop: "鑽頭軟糖/兇骨",
			locate: "monitorTower",
			tag: "lawful/archer/170cm/p_skeleton/demonic/pumpkin"	
        }

	freeQuestList[3] = {
			name: "賽伊特‧宝物庫",
			cost: "0",
			prev: "Mission.98 clear",
			enemy: "金屬南瓜骷髏(15k狂)*2+機械兵(23k劍)/金屬南瓜骷髏(15k狂)+逃げ出した家畜(巨大魔豬86k狂)/金屬南瓜骷髏(15k狂)+機械兵(44k劍)+竜魔戦士SUMANAI(抱歉哥140k劍)", 
			drop: "膽石/龍牙/劍魔石/飛彈汽水/鑽頭軟糖",
			locate: "treasureRoom",
			tag: "chaos/170cm/m_skeleton/demonic/drone/mech/huge"
	}

	freeQuestList[4] = {			
			name: "賽伊特‧城門",
			cost: "0",
			prev: "mainQuest.第七節 clear",
			enemy: "金屬南瓜骷髏(12k狂)+金屬南瓜骷髏(12k弓)/金屬南瓜骷髏(22k弓)*2/金屬南瓜骷髏(39k狂)*2+魔淑女Ｃ子(76k術)", 
			drop: "弓輝石/術金棋/鑽頭軟糖/龍牙",
			locate: "gate",
			tag: "evil/mag_A/mech/pumpkin/m_skeleton/demonic"
	}
	
	freeQuestList[5] = {			
			name: "地下工場",
			cost: "0",
			prev: "Mission.78 clear",
			enemy: "量產型eli(31k狂)+量產型eli(殺21k)*2/量產型eli(25k騎)+量產型eli(21k殺)+量產型eli(31k狂)/量產型eli(43k騎)+量產型eli(50k狂)+量產型eli(163k騎)", 
			drop: "熱線餅乾/黨證",
			locate: "factory",
			tag: "mech/mech_eli"
	}
	
	freeQuestList[6] = {
			name: "古井戶",
			cost: "0",
			prev: "Mission.81 clear",
			enemy: "金屬南瓜騎士(23k弓)*3/金屬南瓜騎士(27k弓)+黒い瑠璃(九頭蛇81K弓)/金屬南瓜騎士(30k弓)*2+大教授ニコラ(156k弓)", 
			drop: "八連雙晶/奇奇神酒/熱線餅乾",
			locate: "obsoleteWell",
			tag: "chaos/170cm/archer/m_knight/demonic/mech/huge"
	}

	freeQuestList[7] = {			
			name: "金字塔‧從者の間",
			cost: "0",
			prev: "mainQuest.第三節 clear",
			enemy: "南瓜幽靈(12k殺)+人造人(12k殺)/南瓜幽靈(11k殺)*2/挖ㄟ馬卡龍咧...？(肥木33k狂)+人造人(14k殺)", 
			drop: "飛彈汽水/鑽頭軟糖/鬼燈/狂銀棋/人造人胚胎",
			locate: "servantRoom",
			tag: "chaos/evil/demonic/berserker/japanese/p_scarecrow/homunculus"
	}

	freeQuestList[8] = {			
			name: "金字塔‧玄室",
			cost: "0",
			prev: "Mission.43 clear",
			enemy: "金屬南瓜骷髏(13k狂)+金屬南瓜骷髏(19k狂)*2/金屬南瓜骷髏(26k狂)+大毛狗(70k騎)/金屬南瓜骷髏(39k狂)*2+太陽の威光(略)フハハハ(140k騎)", 
			drop: "龍牙/產毛/鑽頭軟糖",
			locate: "entertainmentRoom",
			tag: "chaos/god/rider/mag_A/m_skeleton/p_skeleton/pumpkin/mech/demonic"
	}


	freeQuestList[9] = {			
			name: "金字塔‧祈りの間",
			cost: "0",
			prev: "Mission.28 clear",
			enemy: "人造人(12k殺)+南瓜騎士(10k槍)/南瓜騎士(15k槍)*2/人造人(14k殺)+巡邏之犬(Proto狗哥35k槍)", 
			drop: "熱線餅乾/飛彈汽水/大騎士勳章/人造人胚胎",
			locate: "meditationRoom",
			tag: "lawful/170cm/agi_A/god/p_knight/pumpkin/homunculus"
	}

	freeQuestList[10] = {			
			name: "金字塔‧通風口",
			cost: "0",
			prev: "Mission.66 clear",
			enemy: "金屬南瓜騎士(17k狂)+機械兵(14k劍)/機械兵(15k劍)+機械兵(44k劍)+金屬南瓜騎士(20k狂)/機械兵(44k劍)+大神官マー(丸太91k騎)", 
			drop: "熱線餅乾/飛彈汽水/笨蛋鎖/騎金棋/八連雙晶/劍藍石",
			locate: "ventilator",
			tag: "lawful/god/mag_A/rider/m_knight/pumpkin/mech/drone"
	}

	freeQuestList[11] = {			
			name: "金字塔‧大階段",
			cost: "0",
			prev: "Mission.95 clear",
			enemy: "南瓜骷髏(10k弓)+南瓜騎士(10k弓)/南瓜骷髏(10弓)+南瓜騎士(14k騎)/南瓜騎士(14k騎)+艷后？還早呢！(二姊47k弓)", 
			drop: "熱線餅乾/鑽頭軟糖/大騎士勳章/兇骨/槍藍石",
			locate: "greatLadder",
			tag: "chaos/god/mag_A/archer/p_knight/p_skeleton/pumpkin"
	}

	freeQuestList[12] = {			
			name: "金字塔‧大回廊",
			cost: "0",
			prev: "Mission.76 clear",
			enemy: "南瓜機械兵(8k騎)*2/南瓜機械兵(8k騎)+大眼南瓜(25k騎)/南瓜機械兵(9k騎)*2+事件撮影班(聖喬治46k騎)", 
			drop: "飛彈汽水/血淚石/齒輪/騎藍石",
			locate: "greatCorridor",
			tag: "lawful/rider/170cm/pumpkin/mech/drone/demonic/p_bigEye"
	}

	freeQuestList[13] = {			
			name: "金字塔‧隱し通路",
			cost: "0",
			prev: "Mission.53 clear",
			enemy: "自動人偶(11k騎)*2+自動人偶(20k騎)/大眼南瓜(52k騎)+自動人偶(25k騎)/自動人偶(25k騎)+自動人偶(12k騎)+鋼鐵看護(88k狂)", 
			drop: "飛彈汽水/黑粉/血淚石",
			locate: "secretPassages",
			tag: "lawful/pumpkin/demonic/mech/automata/p_bigEye"
	}


	freeQuestList[14] = {			
			name: "姬路城‧破風の間",
			cost: "0",
			prev: "Mission.55 clear",
			enemy: "機械兵(17k劍)*2+金屬幽靈(16k殺)/石巨人(44k劍)+機械兵(79k劍)/機械兵(28k劍)+金屬幽靈(23k殺)+玉藻喵喵(135k狂)", 
			drop: "飛彈汽水/鑽頭軟糖/蕃薯藤/蹄鐵/笨蛋鎖",
			locate: "windRoom",
			tag: "chaos/berserker/agi_A/mag_A/m_scarecrow/drone/mech"
	}

	freeQuestList[15] = {			
			name: "姬路城‧武者走り",
			cost: "0",
			prev: "mainQuest.第四節 clear",
			enemy: "人造人(10k殺)+南瓜騎士(19k槍)/人造人(9k)*2+南瓜騎士(18k槍)/南瓜騎士(19k)+病例「坐骨神經痛」(赫克托59k槍)", 
			drop: "熱線餅乾/飛彈汽水/槍銀棋/槍紅石/殺藍石/大騎士勳章",
			locate: "samuraiWay",
			tag: "lawful/agi_A/170cm/p_knight/homunculus/pumpkin"
	}

	freeQuestList[16] = {			
			name: "姬路城‧二重扉",
			cost: "0",
			prev: "Mission.46 clear",
			enemy: "南瓜骷髏(8k狂)+南瓜騎士(11k弓)/奇美拉(22k狂)+機械兵(12k騎)/南瓜骷髏(8k狂)+機械兵(12k騎)+症例「乾眼症」叔父大人(48k狂)", 
			drop: "兇骨/齒輪/爪爪/熱線餅乾/飛彈汽水/鑽頭軟糖",
			locate: "doubleDoor",
			tag: "chaos/evil/berserker/170cm/p_knight/p_skeleton/pumpkin/demonic/mech/drone"
	}	


	freeQuestList[17] = {			
			name: "姬路城‧武具庫",
			cost: "0",
			prev: "Mission.62 clear",
			enemy: "南瓜骷髏(8k狂)*2+南瓜騎士(7k)/南瓜骷髏(8k狂)+巨大魔豬(34k騎)/南瓜骷髏(8k狂)+南瓜騎士(8k騎)+症例「血液循環不良」阿提拉(44k劍)", 
			drop: "熱線餅乾/鑽頭軟糖/膽結石/大騎士勳章/兇骨",
			locate: "weaponDepot",
			tag: "chaos/god/agi_A/p_knight/p_skeleton/pumpkin/demonic/huge"
	}

	freeQuestList[18] = {			
			name: "姬路城‧石落とし",
			cost: "0",
			prev: "Mission.60 clear",
			enemy: "金屬幽靈(18k殺)*2+金屬幽靈(12k殺)/金屬幽靈(18k殺)+大黑狗(83k殺)/金屬幽靈(18k殺)*2+「鳥鳥」崔斯坦(86k弓)", 
			drop: "地溝油/蹄鐵/鑽頭軟糖",
			locate: "stoneDrop",
			tag: "lawful/agi_A/archer/170cm/m_scarecrow/demonic/mech"
	}

	freeQuestList[19] = {			
			name: "姬路城‧石打棚",
			cost: "0",
			prev: "Mission.39 clear",
			enemy: "金屬南瓜騎士(16k槍)*2+自動人偶(12k騎)/金屬南瓜騎士(22k槍)+人面獅身(56k槍)/自動人偶(18k騎)+金屬南瓜騎士(22k槍)+假面騎士金時(109k騎)", 
			drop: "聖甲蟲/雙晶/笨蛋鎖/熱線餅乾/飛彈汽水",
			locate: "stoneShelf",
			tag: "lawful/god/170cm/m_knight/mech/automata/huge"
	}

	freeQuestList[20] = {			
			name: "姬路城‧武者隠し",
			cost: "0",
			prev: "Mission.19 clear",
			enemy: "南瓜骷髏(10k槍)*2+機械兵(11k騎)/南瓜骷髏(10k槍)+人面獅身(42k槍)/機械兵(11k騎)+南瓜骷髏(10k槍)+神代第一清道夫師匠", 
			drop: "兇骨/齒輪/聖甲蟲/鑽頭軟糖/飛彈汽水",
			locate: "samuraiChamber",
			tag: "agi_A/p_skeleton/pumpkin/demonic/mech/drone/huge"
	}

	freeQuestList[21] = {			
			name: "姬路城‧高窓",
			cost: "0",
			prev: "Mission.56 clear",
			enemy: "人造人(10k殺)+人造人(12k殺)/人造人(10k殺)+大黑狗(40k殺)/人造人(12k殺)*2+現代第一處分人切肆爸爸(52k殺)", 
			drop: "地溝油/人造人胚胎/飛彈汽水",
			locate: "lookoutWindow",
			tag: "agi_A/evil/chaos/japanese/homunculus/demonic/170cm"
	}
	  
	freeQuestList[22] = {			
			name: "姬路城‧大千鳥破風",
			cost: "0",
			prev: "Mission.49 clear",
			enemy: "金屬南瓜騎士(15k狂)+金屬南瓜騎士(20k狂)*2/金屬南瓜骷髏(32k狂)+大眼南瓜(80k騎)/金屬南瓜騎士(20k狂)+金屬南瓜骷髏(32k狂)+大幹部赤紅短劍德雷克(138k騎)", 
			drop: "熱線餅乾/鑽頭軟糖/龍牙/雙晶/血淚石",
			locate: "chitori",
			tag: "rider/evil/chaos/m_knight/m_skeleton/mech/demonic/pumpkin/p_bigEye"
	}
	 
	freeQuestList[23] = {			
			name: "姬路城‧西大柱",
			cost: "0",
			prev: "Mission.77 clear",
			enemy: "南瓜幽靈(12k殺)*2+南瓜幽靈(7k殺)/南瓜幽靈(14k殺)+石巨人(42k劍)/南瓜幽靈(15k殺)*2+馬卡龍超好吃茶茶(54k狂)", 
			drop: "鬼燈/蕃薯藤/鑽頭軟糖",
			locate: "westPillar",
			tag: "chaos/berserker/japanese/p_scarecrow/demonic/huge"
	}
	 
	freeQuestList[24] = {			
			name: "姬路城‧東大柱",
			cost: "0",
			prev: "mainQuest.第五節 clear",
			enemy: "南瓜騎士(9k騎)+南瓜騎士(13k弓)*2/機械兵(15k騎)+巨龍(42k騎)/南瓜騎士(9k騎)*2+來自金星的匿名神秘妖艷美女神遠坂凜(72k弓)", 
			drop: "熱線餅乾/飛彈汽水/龍鱗/齒輪/大騎士勳章",
			locate: "eastPillar",
			tag: "lawful/god/archer/mag_A/p_knight/pumpkin/mech/drone/huge"
	}
	
	freeQuestList[25] = {			
			name: "姬路城‧左鯱",
			cost: "0",
			prev: "Mission.25 clear",
			enemy: "金屬南瓜骷髏(17k狂)*2+機械兵(20k劍)/金屬南瓜騎士(25k狂)+奇美拉(76k狂)/金屬南瓜骷髏(16k狂)+機械兵(53k劍)+宇宙土方(139k狂)", 
			drop: "熱線餅乾/飛彈汽水/螺旋軟糖/爪爪/雙晶/龍牙/笨蛋鎖",
			locate: "leftWhale",
			tag: "lawful/evil/170cm/berserk/m_knight/mskeletoon/drone/mech/pumpkin"
	}
	
	freeQuestList[26] = {			
			name: "姬路城‧右鯱",
			cost: "0",
			prev: "Mission.64 clear",
			enemy: "自動人偶(14k騎)*2+自動人偶(27k騎)/自動人偶(33k騎)+巨龍(76k騎)/自動人偶(22k騎)+自動人偶(33k騎)+大幹部毛衣卿梅芙", 
			drop: "黑粉/龍鱗/飛彈汽水",
			locate: "rightWhale",
			tag: "chaos/evil/rider/mech/automata/huge"
	}
/*
	freeQuestList[27] = {			
			name: "",
			cost: "",
			prev: "",
			enemy: "", 
			drop: "",
			locate: "",
			tag: ""
	}

	freeQuestList[28] = {			
			name: "",
			cost: "",
			prev: "",
			enemy: "", 
			drop: "",
			locate: "",
			tag: ""
	}
*/
}
