let clickCount = 0;

function initPage(){
	let check = localStorage.getItem("sheepClick");
	if (check){
		clickCount = check;
	}else{
		clickCount = 0;
	}

	$("#clickCount").html(clickCount);

	$(".roamCaren").bind("click" , function(){		
		$("#audio").attr("src" , "resource/noise/sheep.mp3");
		clickCount++;
		localStorage.setItem("sheepClick" , clickCount);		
		$("#clickCount").html(clickCount);
	});
		
	makeRoam();
	return false;
}

function makeRoam(){	
	let maxWidth = $("body").width() - $(".roamCaren").width();
	let maxHeight = $("body").height() - $(".roamCaren").height();
	let toPositionX = Math.floor(Math.random() * maxWidth);
	let toPositionY = Math.floor(Math.random() * maxHeight);
	let fromPositionX = $(".roamCaren").offset().left;
	let fromPositionY = $(".roamCaren").offset().top;
	//console.log("from X=" + fromPositionX + "& Y=" + fromPositionY);
	//console.log("to X=" + toPositionX + "& Y=" + toPositionY);

	if (fromPositionX < toPositionX){
		$("#faceLeft").addClass("hidden");
		$("#faceRight").removeClass("hidden");
	}else{
		$("#faceRight").addClass("hidden");
		$("#faceLeft").removeClass("hidden");
	}

	$(".roamCaren").animate(
		{left : toPositionX, top : toPositionY} , 5000 , 'swing' , function(){
		makeRoam();
	});
	return false;
}