//data list
var soundList = {
	'01' : "不如和你聊天",
	'02' : "不要抱怨",
	'03' : "光是什麼",
	'04' : "你有打火機嗎",
	'05' : "你夾娃娃很厲害",
	'06' : "你沒有把東西還給我",
	'07' : "你知道為什麼我感冒了嗎",
	'08' : "你是我的寶貝",
	'09' : "你是哪裡人啊",
	'10' : "你能不能安靜一點",
	'11' : "你猜我是什麼星座",
	'12' : "你喜歡水嗎",
	'13' : "你摸摸我衣服的料",
	'14' : "你應該累了吧",
	'15' : "我去洗澡了",
	'16' : "我去唱歌了",
	'17' : "我去買制服",
	'18' : "我去開車了",
	'19' : "我在找一匹馬",
	'20' : "我只會出剪刀"
	
}


function playSound(num) {	
	let name = soundList[num];
	$("#audio").stop();
	let playingObj = $(".grid").get(num-1);
	$(playingObj).addClass("playing");
	
	$("#audio").attr("src" , 'data/' + name + ".mp3");
	//$("#audio").play();
	$("#audio").on('ended' , function(){		
		$(playingObj).removeClass("playing");
	});
}

function stopSound() {
	$("#audio").stop();
}