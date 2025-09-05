let leftMachine = null;
let rightMachine = null;
let rngLeft = null;
let rngRight = null;
let chipsCount = 8;
let prevResult = -1;
let combo = 0;
function initPage(){
	$(".rngBtn").bind("click" , function(){
		if ($("#askInput").val()){
			// 正在跑rng的話，不要跑第二個
			if (rngLeft == null){
				randomChips();
			}else{				
				return false;
			}
			
		}else{
			alert("填入你想問的事情不然角角會罷工。");
		}
		return false;
	});
}

function randomChips(){	
	let counter = 0, counter2 = 0;
	leftMachine = setInterval(function(){
		counter = Math.floor(Math.random() * chipsCount);
		rngLeft = $("#leftBox").children().get(counter);
		$(rngLeft).removeClass("hidden");
		$(rngLeft).siblings().addClass("hidden");		
	}, 50);
	rightMachine = setInterval(function(){
		counter2 = Math.floor(Math.random() * chipsCount);
		rngRight= $("#rightBox").children().get(counter);
		$(rngRight).removeClass("hidden");
		$(rngRight).siblings().addClass("hidden");		
	}, 50);
	setTimeout(showResult , 2000);
}

function showResult(){
	clearInterval(leftMachine);
	clearInterval(rightMachine);
	let resultLeft = null, resultRight = null;
	resultLeft = $("#leftBox").children().not(".hidden");
	resultRight = $("#rightBox").children().not(".hidden");	
	result = parseInt($(resultLeft).attr("alt")) + parseInt($(resultRight).attr("alt"));
	makeResult(result);	
}

function makeResult(param) {
	$("#ResultDiv").removeClass("hidden");
	$("#askText").text($("#askInput").val());		
	if (param == prevResult){		
		combo = combo + 1;		
	}else{		
		combo = 0;
	}
	console.log("result:"+param+"/combo:"+combo);
	prevResult = param;
	switch (param) {
		case 0 :
			if (combo > 1){
				$("#askResult").html("哈哈哈哈哈哈哈哈哈<br/>(feat.悠白)");
				$("#audio").attr("src" , "resource/lol/lol20.mp3");
			}else{
				$("#askResult").html("哈哈哈哈哈");
				$("#audio").attr("src" , "resource/lol/lol20.mp3");
			}
			break;
		case 1 :
			if (combo > 1){
				$("#askResult").html("大力支持<br/>雙手雙腳大力支持");
				$("#audio").attr("src" , "resource/words/strongSupport.mp3");
			}else{
				$("#askResult").html("這個的話<br/>可以多來一點");
				$("#audio").attr("src" , "resource/words/giveMeMore.mp3");
			}
			break;
		case 2 :			
			if (combo > 1){
				$("#askResult").html("我不要！我不要！<br/>絶対に嫌だ");
				$("#audio").attr("src" , "resource/words/refuse.mp3");
			}else{
				$("#askResult").html("如果認真講的話<br/>不行");
				$("#audio").attr("src" , "resource/words/cannot.mp3");
			}
			break;
		default :
			$("#askResult").html("我沒有那麼多功能");
			$("#audio").attr("src" , "resource/words/lackFunction.mp3");
			break;
	}
	// 跑完之後清掉
	rngLeft = null;
	rngRight = null;
	return false;
}
