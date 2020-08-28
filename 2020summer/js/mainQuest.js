function initMainQuestData(){
	
	mainQuestList[0] = {			
			name: "開幕「show time」",
			cost: "0",
			prev: "N/A",
			enemy: "no battle",
			drop: "",
			locate: "--"
	}

	mainQuestList[1] = {			
			name: "開幕「show time(2/2)」III",
			cost: "5",
			prev: "N/A",
			enemy: "狼(rider)*3，HP 28k & 16k & 16k",
			drop: "",
			locate: "--"
	}
		
	mainQuestList[2] = {			
			name: "第一節【enjoy holiday】 (1/3)",
			cost: "0",
			prev: "N/A",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}

	mainQuestList[3] = {			
			name: "幕間【ちょっと湖畔へ】",
			cost: "5",
			prev: "N/A",
			enemy: "雞(avenger)*6，(HP6k~20k)",
			drop: "乾柴",
			locate: "--"
	}

	mainQuestList[4] = {			
			name: "第一節【enjoy holiday】 (2/3)",
			cost: "5",
			prev: "Mission No.9",
			enemy: "no battle",
			drop: "",
			locate: "--"
	}

	mainQuestList[5] = {			
			name: "第一節【enjoy holiday】 (3/3) >",
			cost: "5",
			prev: "N/A",
			enemy: "殺人魔(berserker)*4，HP 24k~45k",
			drop: "乾柴",
			locate: "--"
	}

	mainQuestList[6] = {			
			name: "第一節【enjoy holiday】 (3/3) >>",
			cost: "5",
			prev: "N/A",
			enemy: "殺人魔(berserker)*2，HP 27k/歌劇魅影(assassin) 77k",
			drop: "把魅影的根性打掉即勝利",
			locate: "--"
	}

	mainQuestList[7] = {			
			name: "第二節【仮面の殺人鬼たち】",
			cost: "0",
			prev: "N/A",
			enemy: "雜魚殺人魔(berserker)*100隻/魅影(assassin)*1",
			drop: "根據劇情選項不同，攻略方法也會不同<br/>「等到早上」→魅影HP 3M，耐久戰<br/>「讓伊莉亞當誘餌」→魅影HP 70k，打倒即勝利",
			locate: "--"
	}

	mainQuestList[8] = {			
			name: "幕間【夏之御山四天王】",
			cost: "5",
			prev: "Mission.10 clear",
			enemy: "巨大魔豬(berserker) HP 151k",
			drop: "膽石",
			locate: "--"
	}

	mainQuestList[9] = {			
			name: "第三節【鬧鬼大樓】 (1/2) >",
			cost: "5",
			prev: "Mission.11 clear",
			enemy: "野狗(rider)*3，HP 31k & 51k & 31k",
			drop: "乾柴",
			locate: "--"
	}

	mainQuestList[10] = {			
			name: "第三節【鬧鬼大樓】(1/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "幽靈(assasin)*3，HP 60k & 30k & 30k",
			drop: "乾柴",
			locate: "--"
	}

	mainQuestList[11] = {			
			name: "第三節【鬧鬼大樓】(1/2) >>>",
			cost: "5",
			prev: "N/A",
			enemy: "幽靈(assassin)*3，HP 39k & 84k & 39k",
			drop: "乾柴",
			locate: "--"
	}


	mainQuestList[12] = {			
			name: "第三節【鬧鬼大樓】(2/2) >",
			cost: "0",
			prev: "N/A",
			enemy: "清姬(lancer)，HP180k",
			drop: "槍銀棋",
			locate: "--"
	}

	mainQuestList[13] = {			
			name: "幕間【湖上驚魂】",
			cost: "0",
			prev: "Mission.12 clear",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}

	mainQuestList[14] = {			
			name: "幕間【要上了！ VR新陰流！】",
			cost: "5",
			prev: "Mission.13 clear",
			enemy: "泳裝巴太太(saber)，HP 60K",
			drop: "勾玉+劍銀棋",
			locate: "--"
	}

	mainQuestList[15] = {			
			name: "第四節【詛咒與怨念與錄影帶】(1/2)",
			cost: "0",
			prev: "Mission.14 clear",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}

	mainQuestList[16] = {			
			name: "第四節【詛咒與怨念與錄影帶】(2/2) >",
			cost: "5",
			prev: "Mission.15 clear",
			enemy: "幽靈(rider)*3，HP 72k & 45k & 45k",
			drop: "野菜",
			locate: "--"
	}

	mainQuestList[17] = {			
			name: "第四節【詛咒與怨念與錄影帶】(2/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "幽靈*100(rider)，HP 10K~15K/藤乃(archer)，HP 519K",
			drop: "藤乃會在5T後，或者打死9隻幽靈後進場。<br/>藤乃發動寶具之後即勝利。<br/>藤乃沒有防禦buff但是有減傷，差10萬左右沒有成功打死",
			locate: "--"
	}

	mainQuestList[18] = {			
			name: "第四節【詛咒與怨念與錄影帶】(2/2) >>>",
			cost: "5",
			prev: "N/A",
			enemy: "藤乃(archer)，HP 519K",
			drop: "過兩回合自動勝利",
			locate: "--"
	}

	mainQuestList[19] = {			
			name: "第四節【詛咒與怨念與錄影帶】(2/2) >>>>",
			cost: "5",
			prev: "N/A",
			enemy: "幽靈(rider)*100，HP 6k~8K/藤乃(archer)，HP 207K",
			drop: "打到七隻幽靈後藤乃進場，KO藤乃即勝利。<br>【note】：勝利後自動天亮，想刷夜間FreeQuest須注意。",
			locate: "--"
	}

	mainQuestList[20] = {			
			name: "幕間【上吧！鬼魂討伐隊！】 >",
			cost: "5",
			prev: "Mission.16 clear",
			enemy: "幽靈(rider)*6，HP 20k~62k",
			drop: "編成固定使用系統NPC",
			locate: "--"
	}

	mainQuestList[21] = {			
			name: "幕間【上吧！鬼魂討伐隊！】 >>",
			cost: "5",
			prev: "N/A",
			enemy: "豹人(lancer)，HP 102k/break後 110K",
			drop: "編成固定使用系統NPC",
			locate: "--"
	}
	
	mainQuestList[22] = {			
			name: "第五節【smiling】 (1/2)",
			cost: "0",
			prev: "Mission.17 clear",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}

	mainQuestList[23] = {			
			name: "第五節【smiling】 (2/2) >",
			cost: "5",
			prev: "Mission.18 clear",
			enemy: "阿比(forigner)，HP 4M",
			drop: "阿比開場滿NP，用臉接完寶具就勝利。",
			locate: "--"
	}
	
	mainQuestList[24] = {			
			name: "第五節【smiling】 (2/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "魔獸(berserker)*5，HP 12k~22k/怪鳥(caster)*4，HP 19k~40k",
			drop: "野菜",
			locate: "--"
	}
	
	mainQuestList[25] = {
			name: "第五節【smiling】 (2/2) >>>",
			cost: "5",
			prev: "N/A",
			enemy: "阿妮亞(caster)，HP 239k",
			drop: "進場會被寶具封印+技能封印 3回合",
			locate: "--"
	}
	
	mainQuestList[26] = {
			name: "第五節【smiling】 (2/2) >>>>",
			cost: "5",
			prev: "N/A",
			enemy: "幫派份子(caster)*3，HP 50k & 130K & 50K",
			drop: "野菜",
			locate: "--"
	}
	
	mainQuestList[27] = {
			name: "第五節【smiling】 (2/2) >>>>>",
			cost: "5",
			prev: "N/A",
			enemy: "斯巴達克斯(berserker)，HP 75K/哥倫布(rider)，HP 88k/威廉泰爾(archer)，HP 77k",
			drop: "開場：哥倫布扣我方30NP，斯巴達克斯上自己+防，泰爾給自己必中+爆傷",
			locate: "--"
	}
	
	mainQuestList[28] = {			
			name: "幕間【歡迎來到怪談小屋】",
			cost: "5",
			prev: "Mission.19 clear",
			enemy: "莎樂美(berserker)，HP 46K & 泳裝芙蘭(saber)，HP 50k & 泳裝清姬(lancer)，HP 52k/大幽靈(assassin)，HP 100k",
			drop: "編成固定使用系統NPC",
			locate: "--"
	}
	
	mainQuestList[29] = {			
			name: "第六節【活屍們的一天】(1/2) >",
			cost: "5",
			prev: "Mission.20 clear",
			enemy: "大蛇(lancer)，HP 127k & 蛇怪(lancer)，HP 53k",
			drop: "野菜",
			locate: "--"
	}
	
	mainQuestList[30] = {			
			name: "第六節【活屍們的一天】(1/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "喪屍(berserker)*9，HP 20k~33k",
			drop: "把最後的喪屍的根性打掉後，學姊被一拳即死之後勝利",
			locate: "--"
	}
	
	mainQuestList[31] = {			
			name: "第六節【活屍們的一天】(2/2) >",
			cost: "5",
			prev: "Mission.21 clear",
			enemy: "喪屍(berserker)*9，HP 24k~41k",
			drop: "野菜",
			locate: "--"
	}
	
	mainQuestList[32] = {			
			name: "第六節【活屍們的一天】(2/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "喪屍(berserker)*3，HP 54k & 57k & 124k",
			drop: "野菜",
			locate: "--"
	}
	
	mainQuestList[33] = {
			name: "第六節【活屍們的一天】(2/2) >>>",
			cost: "5",
			prev: "N/A",
			enemy: "喪屍(berserker)*3，HP 14k/喪屍(berserker)*3，HP 15k/喪屍(berserker)*20，HP 28k~30k",
			drop: "拖到T7 尼托就會發動寶具結束戰鬥。",
			locate: "--"
	}
	
	mainQuestList[34] = {
			name: "第七節【夢魘．幻影】(1/2) >",
			cost: "5",
			prev: "Mission.22 clear",
			enemy: "自動人形(assassin)*3，HP 56k & 130k & 56k",
			drop: "野菜+乾柴",
			locate: "--"
	}
	
	mainQuestList[35] = {
			name: "第七節【夢魘．幻影】(1/2) >>",
			cost: "5",
			prev: "N/A",
			enemy: "大頭娃娃(rider)，HP 240k",
			drop: "鍊鋸",
			locate: "--"
	}
	
	mainQuestList[36] = {
			name: "第七節【夢魘．幻影】(2/2) >",
			cost: "5",
			prev: "Quest.夜まで探索を続ける clear，等同於Mission.23 clear",
			enemy: "吉爾元帥人形(saber)，HP 26k & 自動人形(assassin)*2，HP 14k/哈桑人形(assassin)，HP 18k & 自動人形(assassin)*2，HP 21k/血斧人形(berserker)，HP24K & 自動人形(assassin)HP 21k & 大頭娃娃(rider)HP 81k",
			drop: "1wave，9隻。<br/>三個鯖人形進場時身上都有嘲諷特效",
			locate: "--"
	}
	
	mainQuestList[37] = {
			name: "過場【探索到晚上】",
			cost: "0",
			prev: "Mission.23 clear",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}
	
	mainQuestList[38] = {
			name: "第八節【懲罰者女孩】 (1/2)",
			cost: "0",
			prev: "N/A",
			enemy: "no battle",
			drop: "--",
			locate: "--"
	}
	
	mainQuestList[39] = {
			name: "第八節【懲罰者女孩】 (2/2)",
			cost: "5",
			prev: "Mission.24 clear",
			enemy: "阿比(Forigner)，HP 323k",
			drop: "打到根性發動即勝利。",
			locate: "--"
	}
	
	mainQuestList[40] = {
			name: "第九節【人魚秘〆】 >",
			cost: "5",
			prev: "N/A",
			enemy: "輩前(lancer)，HP 11k",
			drop: "雙方buff都超硬打不穿，時間到自動勝利",
			locate: "--"
	}
	
	mainQuestList[41] = {
			name: "第九節【人魚秘〆】 >>",
			cost: "5",
			prev: "N/A",
			enemy: "泳裝殺生院(MoonCancer)，HP 1.4M",
			drop: "3回合後自動勝利",
			locate: "--"
	}
	
	mainQuestList[42] = {
			name: "第九節【人魚秘〆】 >>>",
			cost: "5",
			prev: "N/A",
			enemy: "殺人鬼(berserker)，HP 99k & 128k & 99k",
			drop: "鏈鋸",
			locate: "--"
	}
	
	mainQuestList[43] = {
			name: "第九節【人魚秘〆】 >>>>",
			cost: "5",
			prev: "N/A",
			enemy: "泳裝殺生院(MoonCancer)，HP 230k",
			drop: "只能用光砲型寶具造成傷害。<br/>系統配給的狂布姊+劍巴有NP率buff，盡量湊NP來寶具連發。",
			locate: "--"
	}
	
	mainQuestList[44] = {
			name: "第十節【兩千年與三千人的壞人們】 >",
			cost: "5",
			prev: "Mission.25 clear",
			enemy: "殺人鬼(berserker)*3，HP 102k & 121k & 102k",
			drop: "鏈鋸",
			locate: "--"
	}
	
	mainQuestList[45] = {
			name: "第十節【兩千年與三千人的壞人們】 >>",
			cost: "5",
			prev: "N/A",
			enemy: "殺人鬼(berserker)*3，HP 99k & 113k & 113k",
			drop: "鏈鋸",
			locate: "--"
	}
	
	mainQuestList[46] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >",
			cost: "5",
			prev: "Mission.26 clear",
			enemy: "殺人鬼(berserker)*3，HP58k~100k/幽靈(rider)*3，HP 33k~35k",
			drop: "鏈鋸+野菜",
			locate: "--"
	}
	
	mainQuestList[47] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>",
			cost: "5",
			prev: "N/A",
			enemy: "喪屍(berserker)*3，HP38k~129k/幫派份子(caster)*3，HP 35k~50k",
			drop: "鏈鋸+野菜",
			locate: "--"
	}
	
	mainQuestList[48] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>>",
			cost: "5",
			prev: "N/A",
			enemy: "不死者殺手(berserker)*3，HP 331k~477k",
			drop: "把對方即死掉，或是撐過3T自動勝利<br/>T3對方身上的buff會讓普攻具有即死效果需要注意",
			locate: "--"
	}
	
	mainQuestList[49] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>>>",
			cost: "5",
			prev: "N/A",
			enemy: "蘭陵王(saber)，HP 416K",
			drop: "二姊對著你笑，笑得你心裡發寒。",
			locate: "--"
	}
	
	mainQuestList[50] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>>>>",
			cost: "5",
			prev: "N/A",
			enemy: "Dark．蘭",
			drop: "學姊這邊會拿到超多buff，一套可以直接打爆Dark．蘭",
			locate: "--"
	}
	
	mainQuestList[51] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>>>>>",
			cost: "5",
			prev: "N/A",
			enemy: "輩前(assassin)，HP 1.2M",
			drop: "敵我雙方都buff/debuff無效，想要幫開buff，開根性都沒辦法<br/>拖到用臉接寶具，我方學姊發動不知道從哪邊變出來的根性之後勝利。<br>但是沒有練等級，被<label style='color:red;'>普攻</label>打死的話是會輸的",
			locate: "--"
	}
	
	mainQuestList[52] = {
			name: "第十一節【等待在死亡與恐怖之側的事物】 >>>>>>>",
			cost: "5",
			prev: "N/A",
			enemy: "徐福(archer)，HP 104k/HP 153k/HP 186k",
			drop: "學姊有大量buff，打個被剋制的arhcer徐福就像大人在打小孩......",
			locate: "--"
	}
	
	mainQuestList[53] = {
			name: "最終節【悲傷的後日談】",
			cost: "0",
			prev: "N/A",
			enemy: "no battle",
			drop: "",
			locate: "--"
	}
	
	extraQuestList[0] = {
			name: "續篇battle I「緊急！再次追蹤謎之UMA」",
			cost: "5",
			prev: "本篇劇情all clear",
			enemy: "Unidentified Mysterious Animal(影)，Rider HP 209k/break→赤兔馬(uma=うま=馬)，Rider 271k",
			drop: "開場會貼我方全體恐怖debuff(機率暈眩)，break後解除。<br/>break後自身上三層攻擊力buff(可拆)。",
			locate: "--"
	}
	
	extraQuestList[1] = {
			name: "續篇battle II「伊斯塔II-女神的逆襲-」",
			cost: "5",
			prev: "本篇劇情all clear",
			enemy: "宇宙伊斯塔(avenger)，HP 305k/break→宇宙伊斯塔(avenger)，HP 182k",
			drop: "開場身上有全攻擊耐性buff+對爆擊傷害耐性下降，用增傷禮裝給的星星開技能一口氣爆掉。<br/>break耐性盾解除，隨便打隨便贏。",
			locate: "--"
	}
	
	extraQuestList[2] = {
			name: "續篇battle III「聖誕驚魂II」",
			cost: "5",
			prev: "本篇劇情all clear",
			enemy: "阿斯兔耳福(saber)，HP 242K/break→阿斯兔耳福(saber)，HP 250k",
			drop: "開場我方聖誕化，每回合堆疊攻擊力下降與爆擊傷害下降。<br/>break時我方全體NP-50。<br/>泳裝弓傻+Castoria*2開場連發直接收掉安定。",
			locate: "--"
	}
	
	extraQuestList[3] = {
			name: "續篇battle IV「歸來的天草四郎2」",
			cost: "5",
			prev: "本篇劇情all clear",
			enemy: "天草四郎(ruler)，HP 180k/break→天草四郎(ruler)，HP 300k",
			drop: "開場我方全體技能封印1T<br/>break後每回合滿NP+3回合內寶具傷害大幅下降。<br/>break後3回合內打死就行了，黑貞裝增傷一發寶具就能搞定。",
			locate: "--"
	}
			
	extraQuestList[4] = {
			name: "醫療帳篷中的確認事項 >",
			cost: "5",
			prev: "續篇I clear",
			enemy: "喪屍(berserker)*1，HP 59k",
			drop: "",
			locate: "--"
	}
	
	extraQuestList[5] = {
			name: "醫療帳篷中的確認事項 >>",
			cost: "5",
			prev: "續篇I clear",
			enemy: "醫神(caster)，HP 108k，戰鬥中召喚喪屍(berserker)，HP 10k",
			drop: "金蛋",
			locate: "--"
	}
	
	extraQuestList[6] = {
			name: "只有一個夏天的...",
			cost: "5",
			prev: "續篇III clear",
			enemy: "泳裝布姊(berserker)，HP114k & 火精靈(berserker)*2，HP57K/break →泳裝布姊(berserker)，HP 160k。 ",
			drop: "布姊開場buff防禦力上升，break後解除。",
			locate: "--"
	}
	
	extraQuestList[7] = {
			name: "shark．fishing！！ >",
			cost: "5",
			prev: "續篇IV clear",
			enemy: "海魔(archer)*3，HP 35k~66k/寄居蟹(saber)*2，HP 50k & 78k/影酒吞(assassin)，HP 143K",
			drop: "--",
			locate: "--"
	}
	
	extraQuestList[8] = {
			name: "shark．fishing！！ >>",
			cost: "5",
			prev: "N/A",
			enemy: "大幽靈(saber)，HP 419K",
			drop: "--",
			locate: "--"
	}
	
	extraQuestList[9] = {
			name: "鯖夏日露營II (2/2)",
			cost: "5",
			prev: "N/A",
			enemy: "名為續篇的魔物(assassin)，HP 131k/break 1→HP 169k，break時攻擊力UP+無敵貫通/break 2→HP228k，break時雙方燒傷debuff+增加炎上場地效果",
			drop: "每回合貼我方debuff與詛咒，會使用技能「唐突な犧牲者」，對我方單體隨機作即死判定。<br/>裝特攻禮裝盡速打爆不要拖。",
			locate: "--"
	}
	 
	extraQuestList[10] = {
			name: "幽靈少女的夏天",
			cost: "0",
			prev: "鯖夏日露營II",
			enemy: "no battle",
			drop: "galGame，選上加分，選下扣分。",
			locate: "--"
	}
	
	extraQuestList[11] = {
			name: "烈日下的暴動",
			cost: "5",
			prev: "all mission clear",
			enemy: "班揚(berserker)，HP 150k+18隻雜魚+血斧(berserker)，HP 480k→607k",
			drop: "班揚身上50次根性，打爆小兵會減少根性次數。<br/>回合數為3的倍數的時候班揚會躲到後排。<br/>小兵被打倒會累積效果「時間經過」，時間累積到14~18層班揚會發動「ご飯できたよー！」，敵方全體滿NP。<br/>石巨人進場敵方buff 3層atk與每回合NP多+1格(都不可拆)<br/>血斧進場會幫我方補血與+25NP與技能CT-1<br/>血斧break時會滿NP<br/>總之用小文西車+術傻過去就行了。",
			locate: "--"
	}
}
