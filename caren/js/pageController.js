var category = [ "speech", "lol", "distortion", "extra", "noise", "greeting", "words" ];
var favorFlag = 0;

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

	$(".rngBtn").on("click" , function(){
		let rng = Math.floor(Math.random() * $(".grid").length);		
		$(".grid").get(rng).click();
	});	
	checkParam();
	loadFavor();
}

function checkParam(){	
	let link = window.location.href;
	if (link.indexOf("?") > -1) {		
		result = getParam(link);
		let category = null, fileName = null;
		if ("" == result || 'undefined' == typeof(result)){
			return false;
		}else if(result.indexOf("/") > -1){
			category = result.split("/")[0];
			fileName = result.split("/")[1];
		}else{
			return false;
		}		
		let target = $("input[category='"+category+"'][fileName='"+fileName+"']");
		let width = $(target).width();
		let cloneObj = $(target).clone();
		$(cloneObj).addClass("beTheOne");		
		$(cloneObj).css('margin-left' , width * -0.5);
		$.blockUI({
			message: $(cloneObj),
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
	/** 
	let link = window.location.href;
	if (link.indexOf("?") > -1) {
		let result = getParam(link);
		let category = null, fileName = null;
		if ("" == result || 'undefined' == typeof(result)){
			return false;
		}else if(result.indexOf("/") > -1){
			category = result.split("/")[0];
			fileName = result.split("/")[1];
		}else{
			return false;
		}		
		let target = $("input[category='"+category+"'][fileName='"+fileName+"']");
		$(target).removeClass("beTheOne");		
		$(target).css('margin-left' , '1%');
	}	
	*/
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

function playSound(buttonObj) {	
	//前一個stop，remove"播放中"的顏色
	//$("#audio").stop();	
	//更換audio檔案	
	let fileName = $(buttonObj).attr("fileName");
	let category = $(buttonObj).attr("category");	
	switch (favorFlag) {
		case 0 :			
			//不管有沒有上一個正在播放，都先清除掉playing的顏色
			$(".playing").removeClass("playing");
			//當前按鈕增加"播放中"的顏色
		  	$(buttonObj).addClass("playing");	
			$("#audio").attr("src" , "resource/" + category + "/" + fileName + ".mp3");
			let rng = Math.floor(Math.random() * 100);
			console.log(rng);
			if (rng < 20){
				changeIcon();
			};

			if (rng < 7){
				playAnime(rng);
			}		
			break;
		case 1 : 						
			let check = $("#favorDiv").children("input[category='"+category+"'][fileName='"+fileName+"']");
			let cloneObj = null;			
			if (check.length == 0){
				 cloneObj = $(buttonObj).clone();
				 $("#favorDiv").append(cloneObj);				 
			}			
			break;
		case -1 :			
			let checkFavor = $("#favorDiv").children("input[category='"+category+"'][fileName='"+fileName+"']");
			if (checkFavor.length){
				checkFavor.remove();
			}
			break;
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

function makeFavor(){
	$("#playMode, #delFavor, #favorDiv").removeClass("hidden");
	$("#makeFavor").addClass("hidden");
	favoButtons = $("#favorDivMain").children();
	$("#favorDiv").append(favoButtons);	
	favorFlag = 1;
	return false;
}

function delFavor(){
	let favoButtons = null;
	$("#playMode, #makeFavor, #favorDiv").removeClass("hidden");
	$("#delFavor").addClass("hidden");
	favoButtons = $("#favorDivMain").children();
	$("#favorDiv").append(favoButtons);	
	favorFlag = -1;
	return false;
}

function hideFavor(){
	let favoButtons = null;
	$("#playMode, #favorDiv").addClass("hidden");
	$("#makeFavor, #delFavor").removeClass("hidden");
	favorFlag = 0;
	favoButtons = $("#favorDiv").children();
	$("#favorDivMain").append(favoButtons);
	nav('favorHead');
	saveFavor();
	return false;
}

function saveFavor(){
	if (typeof(Storage) !== 'undefined'){
		let category = null;
		let fileName = null;
		let saveData = "";
		$("#favorDivMain").children().each(function(){
			category = $(this).attr("category");
			fileName = $(this).attr("fileName");
			saveData += category + "_" + fileName + ",";
		});
		localStorage.setItem("favorButtons" , saveData.substring(0 , saveData.length -1));
	}
	return false;
}

function loadFavor(){
	if (typeof(Storage) !== 'undefined'){
		let category = null;
		let fileName = null;
		let target = null;
		let check = localStorage.getItem("favorButtons");
		if (check){
			let saveData = localStorage.getItem("favorButtons").split(",");
			for (let i = 0;i< saveData.length;i++){
				category = saveData[i].split("_")[0];
				fileName = saveData[i].split("_")[1];
				target = $("input[category='"+ category +"'][fileName='"+fileName+"']");
				if (target){
					$("#favorDivMain").append($(target).clone());
				}
			}		
		}
		
	}
	return false;
}

function initSpeechList(){
	let category = "speech";	
	for (let i = 0; i < speechList.length; i++){
		$("#speechDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+speechList[i].fileName+"' onclick=\"playSound(this)\" value='"+speechList[i].text+"'/>");
	}
}

function initWordsList(){
	let category = "words";	
	for (let i = 0; i < wordsList.length; i++){
		$("#wordsDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+wordsList[i].fileName+"' onclick=\"playSound(this)\" value='"+wordsList[i].text+"'/>");
	}
}

function initLolList(){
	let category = "lol";	
	for (let i = 0; i < lolList.length; i++){
		$("#lolDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+lolList[i].fileName+"' onclick=\"playSound(this)\" value='"+lolList[i].text+"'/>");
	}
}

function initGreetingList(){
	let category = "greeting";	
	for (let i = 0; i < greetingList.length; i++){
		$("#greetingDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+greetingList[i].fileName+"' onclick=\"playSound(this)\" value='"+greetingList[i].text+"'/>");
	}
}

function initDistortionList(){
	let category = "distortion";	
	for (let i = 0; i < distortionList.length; i++){
		$("#distortionDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+distortionList[i].fileName+"' onclick=\"playSound(this)\" value='"+distortionList[i].text+"'/>");
	}
}

function initExtraList(){
	let category = "extra";	
	for (let i = 0; i < extraList.length; i++){
		$("#extraDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+extraList[i].fileName+"' onclick=\"playSound(this)\" value='"+extraList[i].text+"'/>");
	}
}

function initNoiseList(){
	let category = "noise";	
	for (let i =0;i < noiseList.length; i++){
		$("#noiseDiv").append("<input type='button' class='btn-radius grid' category='"+category+"' fileName='"+noiseList[i].fileName+"' onclick=\"playSound(this)\" value='"+noiseList[i].text+"'/>");
	}
}


