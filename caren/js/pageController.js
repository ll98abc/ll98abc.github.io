function initPage(){
	initSpeechList();
	initWordsList();
	initLolList();
	initGreetingList();
	initDistortionList();
	initExtraList();
	initNoiseList();
	// 開場隨機抽一個icon
	changeIcon();
	$(".btn-radius").bind("click" , function(){
		//不管有沒有上一個正在播放，都先清除掉playing的顏色
		$(".playing").removeClass("playing");
		//當前按鈕增加"播放中"的顏色
		  $(this).addClass("playing");
	});

	$(".rngBtn").bind("click" , function(){
		let rng = Math.floor(Math.random() * $(".grid").length);		
		$(".grid").get(rng).click();
	});
}

function nav(param){
	let toPosition = $("#"+param).offset().top;
	let body = $("html, body");
	body.stop().animate({scrollTop:toPosition}, 500,'swing',function(){
		// do something??
	});
}

function playSound(fileName) {	
	//前一個stop，remove"播放中"的顏色
	//$("#audio").stop();	
	//更換audio檔案
	$("#audio").attr("src" , "resource/" + fileName + ".mp3");
	let rng = Math.floor(Math.random() * 100);
	console.log(rng);
	if (rng < 20){ 
		changeIcon();
	};	
	
	if (rng < 5){
		playAnime(rng);
	}			
}

function changeIcon(){
	let iconRng = Math.floor(Math.random() * $(".carenIcon").length);
	let preIcon = $(".showIcon").get(0);
	let nextIcon = $(".carenIcon").get(iconRng);
	$(preIcon).fadeToggle(500).addClass("carenIcon").removeClass("showIcon");	
	setTimeout(function(){$(nextIcon).fadeToggle(500).addClass("showIcon").removeClass("carenIcon");} , 500);	
}

function playAnime(param){
	let toPositionX = 0;
	let toPositionY = 0;	
	switch (param) {
		case 0 :			 
			$(".randomCaren5").append("<img id='carenGif' src='images/carenOvO_resize.gif'></img>");
			$("#carenGif").load(function(){
				$(".randomCaren5").animate(
					{bottom : 0}, 3000, 'swing', function(){
						setTimeout(function(){
							$(".randomCaren5").animate({bottom : -300} , 3000, 'swing', function(){
								$(".randomCaren5").html("");
							});
						},800);
				});
			});
			break;
		case 1 :
			toPositionX = $(window).width()+$(".randomCaren1").width();
			toPositionY = Math.floor(Math.random() * 300) + 200;
			$(".randomCaren1").animate(
				{right : toPositionX , top : toPositionY} , 800 , 'swing' , function(){
					//reset position
					$(".randomCaren1").css("right" , -300);					
			});
			break;
		case 2 :
			toPositionX = $(window).width()+$(".randomCaren2").width();
			toPositionY = Math.floor(Math.random() * 300) + 200;
			$(".randomCaren2").animate(
				{left : toPositionX, top : toPositionY} , 800 , 'swing' , function(){
					//reset position
					$(".randomCaren2").css("left" , -300);
			});
			break;
		case 3 :
			toPositionX = $(window).width()+$(".randomCaren3").width();
			toPositionY = Math.floor(Math.random() * 300) + 200;
			$(".randomCaren3").animate(
				{right : toPositionX, top : toPositionY} , 800 , 'swing' , function(){
					//reset position
					$(".randomCaren3").css("right" , -300);
			});
			break;
		case 4 :
			toPositionX = $(window).width()+$(".randomCaren4").width();
			toPositionY = Math.floor(Math.random() * 300) + 200;
			$(".randomCaren4").animate(
				{left : toPositionX, top : toPositionY} , 800 , 'swing' , function(){
					//reset position
					$(".randomCaren4").css("left" , -300);
			});		
			break;
		default: console.log(param);break;	
	}
	
	return false;
}

function initSpeechList(){
	let category = "speech";
	$("#speechCount").html(speechList.length);
	for (let i = 0; i < speechList.length; i++){
		$("#speechDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+speechList[i].fileName+"')\" value='"+speechList[i].text+"'/>");
	}
}

function initWordsList(){
	let category = "words";
	$("#wordsCount").html(wordsList.length);
	for (let i = 0; i < wordsList.length; i++){
		$("#wordsDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+wordsList[i].fileName+"')\" value='"+wordsList[i].text+"'/>");
	}
}

function initLolList(){
	let category = "lol";
	$("#lolCount").html(lolList.length);
	for (let i = 0; i < lolList.length; i++){
		$("#lolDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+lolList[i].fileName+"')\" value='"+lolList[i].text+"'/>");
	}
}

function initGreetingList(){
	let category = "greeting";
	$("#greetingCount").html(greetingList.length);
	for (let i = 0; i < greetingList.length; i++){
		$("#greetingDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+greetingList[i].fileName+"')\" value='"+greetingList[i].text+"'/>");
	}
}

function initDistortionList(){
	let category = "distortion";
	$("#distortionCount").html(distortionList.length);
	for (let i = 0; i < distortionList.length; i++){
		$("#distortionDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+distortionList[i].fileName+"')\" value='"+distortionList[i].text+"'/>");
	}
}

function initExtraList(){
	let category = "extra";
	$("#extraCount").html(extraList.length);
	for (let i = 0; i < extraList.length; i++){
		$("#extraDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+extraList[i].fileName+"')\" value='"+extraList[i].text+"'/>");
	}
}

function initNoiseList(){
	let category = "noise";
	$("#noiseCount").html(noiseList.length);
	for (let i =0;i < noiseList.length; i++){
		$("#noiseDiv").append("<input type='button' class='btn-radius grid' onclick=\"playSound('"+category+"/"+noiseList[i].fileName+"')\" value='"+noiseList[i].text+"'/>");
	}
}
