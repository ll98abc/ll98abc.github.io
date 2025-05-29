function initPage(){
	initSpeechList();
	initWordsList();
	initLolList();
	initGreetingList();
	initDistortionList();
	initExtraList();
	initNoiseList();

	$(".btn-radius").bind("click" , function(){
		//不管有沒有上一個正在播放，都先清除掉playing的顏色
		$(".playing").removeClass("playing");
		//當前按鈕增加"播放中"的顏色
		  $(this).addClass("playing");
	});
}

function nav(param){
	let position = $("#"+param).offset().top;
	let body = $("html, body");
	body.stop().animate({scrollTop:position}, 500,'swing',function(){
		console.log("hello");
	});
}

function playSound(fileName) {	
	//前一個stop，remove"播放中"的顏色
	//$("#audio").stop();	
	//更換audio檔案
	$("#audio").attr("src" , "resource/" + fileName + ".mp3");		
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