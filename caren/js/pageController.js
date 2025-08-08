var category = [ "speech", "lol", "distortion", "extra", "noise", "greeting", "words" ];

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
	$(".btn-radius").on("click" , function(){
		//不管有沒有上一個正在播放，都先清除掉playing的顏色
		$(".playing").removeClass("playing");
		//當前按鈕增加"播放中"的顏色
		  $(this).addClass("playing");
	});

	$(".rngBtn").on("click" , function(){
		let rng = Math.floor(Math.random() * $(".grid").length);		
		$(".grid").get(rng).click();
	});	
	checkParam();
}

function checkParam(){	
	let link = window.location.href;
	if (link.indexOf("?") > -1) {		
		result = getParam(link);		
		if ("" == result || 'undefined' == typeof(result)){
			return false;
		}
		let fullName = "playSound('" + result + "')";
		var target = $("input[onclick*='"+fullName+"']").first();
		var width = $(target).width();		
		$(target).addClass("beTheOne");		
		$(target).css('margin-left' , width * -0.5);
		$.blockUI({
			message: $(target),
			css : {
				'border' : 'none',
				'left' : '50%',
				'background-color' : 'transparent',
				'text-align' : 'left'
			}
		});		
		$(".blockOverlay").bind("click" , myUnblock );
	}
	return false;
}

function myUnblock(){
	$.unblockUI();
	let link = window.location.href;
	if (link.indexOf("?") > -1) {
		let result = getParam(link);
		if ("" == result || 'undefined' == typeof(result)){
			return false;
		}
		let fullName = "playSound('" + result + "')";		
		var target = $("input[onclick='"+fullName+"']").first();			
		$(target).removeClass("beTheOne");		
		$(target).css('margin-left' , '1%');
	}	
}

function getParam(link){	
	let param = link.split("?")[1];			
	let paramA = param.split("&")[0];
	let paramB = param.split("&")[1];	
	if ('undefined' == typeof(paramA) || 'undefined' == typeof(paramB)){
		let paramE = param.split("=")[1];
		return paramE;
	}else{
		let paramC = paramA.split("=")[1];
		let paramD = paramB.split("=")[1];
		if (category.includes(paramC)){
			return paramC + "/" + paramD;
		}else if (category.includes(paramD)){
			return paramD + "/" + paramC;
		}else{
			// 查不到對應的category可能放錯參數，回傳空值。
			return "";
		}
	}
}

function nav(param){
	let toPosition = $("#"+param).offset().top;
	let body = $("html, body");
	body.stop().animate({scrollTop:toPosition}, 500,'swing',function(){
		// do something??
	});
	return false;
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
	
	if (rng < 7){
		playAnime(rng);
	}		
	return false;
}

function changeIcon(){
	let iconRng = Math.floor(Math.random() * $(".carenIcon").length);
	let preIcon = $(".showIcon").get(0);
	let nextIcon = $(".carenIcon").get(iconRng);
	$(preIcon).fadeToggle(500).addClass("carenIcon").removeClass("showIcon");	
	setTimeout(function(){$(nextIcon).fadeToggle(500).addClass("showIcon").removeClass("carenIcon");} , 500);	
}

function playAnime(param){
	let toPositionX = 0, toPositionX2 = 0;
	let toPositionY = 0, toPositionY2 = 0;
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
			toPositionY = Math.floor(Math.random() * 400) + 100;
			$(".randomCaren1").animate(
				{right : toPositionX , top : toPositionY} , 1600 , 'swing' , function(){
					//reset position
					$(".randomCaren1").css("right" , -300);					
			});
			break;
		case 2 :
			toPositionX = $(window).width()+$(".randomCaren2").width();
			toPositionY = Math.floor(Math.random() * 400) + 100;
			$(".randomCaren2").animate(
				{left : toPositionX, top : toPositionY} , 1600 , 'swing' , function(){
					//reset position
					$(".randomCaren2").css("left" , -300);
			});
			break;
		case 3 :
			toPositionX = $(window).width()+$(".randomCaren3").width();
			toPositionY = Math.floor(Math.random() * 400) + 100;
			$(".randomCaren3").animate(
				{right : toPositionX, top : toPositionY} , 1600 , 'swing' , function(){
					//reset position
					$(".randomCaren3").css("right" , -300);
			});
			break;
		case 4 :
			toPositionX = $(window).width()+$(".randomCaren4").width();
			toPositionY = Math.floor(Math.random() * 400) + 100;
			$(".randomCaren4").animate(
				{left : toPositionX, top : toPositionY} , 1600 , 'swing' , function(){
					//reset position
					$(".randomCaren4").css("left" , -300);
			});		
			break;
		case 5 :
			toPositionX = $(window).width()+$(".randomCaren6").width();
			toPositionX2 = toPositionX/2;
			toPositionY = Math.floor(Math.random() * 400) + 100;
			toPositionY2 = Math.floor(Math.random() * 400) + 100;
			// 先跑一半，再隨機剩下一半
			$(".randomCaren6").animate(
				{right : toPositionX2, top : toPositionY2} , 4000 , 'swing' , function(){					
					$(".randomCaren6").animate(
						{right : toPositionX, top : toPositionY} , 4000 , 'swing' , function(){
							//reset position
							$(".randomCaren6").css("right" , -300);
					});						
			});		
			break;
		case 6 :
			toPositionX = $(window).width()+$(".randomCaren6").width();
			toPositionX2 = toPositionX/2;
			toPositionY = Math.floor(Math.random() * 400) + 100;
			toPositionY2 = Math.floor(Math.random() * 400) + 100;
			// 先跑一半，再隨機剩下一半
			$(".randomCaren7").animate(
				{left : toPositionX2, top : toPositionY2} , 4000 , 'swing' , function(){
					$(".randomCaren7").animate(
						{left : toPositionX, top : toPositionY} , 4000 , 'swing' , function(){
							//reset position
							$(".randomCaren7").css("left" , -300);
					});
			});
			break;
		default: console.log(param);break;	
	}
	
	return false;
}

function copyLink(){
	let link = "https://ll98abc.github.io/caren/caren.html";	
	let param = $("#audio").attr("src");	
	if (typeof(param) != 'undefined'){
		let fullName = param.split("/")[2];
		let category = param.split("/")[1];
		let fileName = fullName.split(".")[0];
		let result = link + "?c=" +category + "&f=" + fileName;
		navigator.clipboard.writeText(result);
		alert(result +"\r\n已複製到剪貼簿");
		return false;
	}else{
		alert("請先點擊目標按鈕");
		return false;
	}	
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