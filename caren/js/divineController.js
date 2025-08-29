let leftMachine = null;
let rightMachine = null;
function initPage(){
	$(".rngBtn").bind("click" , function(){
		if ($("#askInput").val()){
			randomChips();			
		}else{
			alert("填入你想問的事情不然角角會罷工。");
		}
		return false;
	});
}

function randomChips(){
	let rngLeft = null;
	let rngRight = null;
	let chipsCount = 8;
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
	console.log($(resultLeft).attr("src"));
	result = parseInt($(resultLeft).attr("alt")) + parseInt($(resultRight).attr("alt"));
	makeResult(result);
}

function makeResult(param) {
	$("#ResultDiv").removeClass("hidden");
	$("#askText").text($("#askInput").val());
	console.log(param);
	switch (param) {
		case 0 :
			$("#askResult").html("哈哈哈哈哈");
			$("#audio").attr("src" , "resource/lol/lol20.mp3");
			break;
		case 1 :
			$("#askResult").html("這個的話<br/>可以多來一點");
			$("#audio").attr("src" , "resource/words/giveMeMore.mp3");
			break;
		case 2 :
			$("#askResult").html("如果認真講的話<br/>不行");
			$("#audio").attr("src" , "resource/words/cannot.mp3");
			break;
		default :
			$("#askResult").html("我沒有那麼多功能");
			$("#audio").attr("src" , "resource/words/lackFunction.mp3");
			break;
	}

}
