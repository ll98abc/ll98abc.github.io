// 就是i
var block_i;
//預計加入但是大概來不及了 
var block_j;
var block_1;
var block_l;
//遊戲是否正在進行的flag
var playing = false;
//捉到i的成功訊息
var successMessageList = [	
	"爽啊刺啊捉i啦！",
	"性誕夜就是要捉i啊，不然要幹嘛？",
	"可以不開台，不能不捉i",
	"狡兔有三窟，一窟、一窟、一窟呦！",
	"妮還要再捉10次i！",
	"捉i給妮看！太開心啦！"
];
//沒捉到i的失敗訊息
var failMessageList = [
	"教練，妮想要捉i",
	"不是不捉i，是不想跟妮捉i",
	"為什麼只有我不能捉i",
	"難道只有妮沒有在性誕夜捉到i？只有妮嗎！？",
	"想捉捉不到的是i，想哭哭不出來的是妮。",
	"世界上有兩種人，捉不到i的人，以及捉不到i的妮。"
];
//結算時會顯示的title清單
var titleList = [
	"妮是童貞兔兔",
	"妮有第一滴血",
	"妮正在大捉特捉",
	"妮是超級捉i人",
	"妮是捉i之神",
	"妮沒有捉i，是捉弊了吧？"
]
//積分
var score = 0;
//block的移動動畫的總秒數，越大越慢 (物體移動速度 = 距離/時間)
var speed = 5000;
// HP
var hp = 3;
// debug用來固定speed
var setSpeed = 0;
//升級難度，7=捉到7次i才能升級
var leveling = 7;
//初始化遊戲頁面
function initPage(){
	//init 計分板
	$("#count").text( score );
	$("#title").text( getTitle() );
	
	//開始按鈕綁定click事件啟動捉i
	$("#start").bind("click" , function(){
		if (!playing){
			$("#block_i").show();
			playing = true;
			movei();
		}		
	});
	
	//debug mode switch
	$("#debug_i").bind("click" , function(){
		if ($("#debugPanel").hasClass("hidden")){
			$("#debugPanel").removeClass("hidden");	
		}else{
			$("#debugPanel").addClass("hidden");
		}
	});
	//debug用的play Button
	$("#playBtn").bind("click" , function(){
		$("#block_i").show();
		if (playing){
			playing = false;
			clearInterval(block_i);
			$(this).val("play");
		}else{
			playing = true;
			$(this).val("stop");
			movei();
		}
	});
	
	//debug用自行設定hp/speed
	$("#setBtn").bind("click" , function(){
		var setHp = $("#setHp").val();
		//如果輸入非數字，自動設定為3
		if (isNaN(setHp)){
			setHp = 3;
		}else{
			//輸入超過10，自動設定為10
			if (setHp > 10){
				setHp = 10;
			}
		}
		//設定HP並貼圖至遊戲畫面中
		hp = setHp;
		$("#hpGague").html("");
		for (var i=0 ; i<setHp ; i++){
			$("#hpGague").append("<img src=\"images/heart.png\" class=\"hp\"/>");
		}
		
		//指定動畫speed，非數字時自動設定為5秒
		setSpeed = $("setSpeed").val();
		if (isNaN(setSpeed)){
			setSpeed = 5;
		}
		//回寫數字到input欄位裡面給user看當前設置
		$("#setHp").val(setHp);
		$("#setSpeed").val(setSpeed);
	});
	
	//i block綁定click事件
	$("#block_i").bind("click" , function(){
		//先暫停
		playing = false;
		clearInterval(block_i);

		//更新計分板
		score++;
		$("#count").text( score );
		$("#title").text( getTitle() );
		//跳出捉i成功popup
		popUp("success");
	});
	
	//遊戲區塊綁定click事件	
	$(".gamingZone").bind("click" , function(){
		//非play中點到時不做事
		//反之就會繼續往後跑，執行沒捉到i的扣血等等一系列動作
		if (!playing){					
			return false;
		}
		//先暫停
		playing = false;
		clearInterval(block_i);
		
		//扣除hp
		hp--;
		$(".hp").last().remove();
		
		//如果hp<0，跳出捉i結果，還沒歸零就跳出失敗訊息
		if (hp < 0){
			popUpResult();			
		}else{			
			//還沒死就改為跳出捉i失敗popup
			popUp("fail");
		}
	});
	
	//再玩一次按鈕click事件
	$("#replay").bind("click" , function(){
		//重置計分板
		score = 0;		
		$("#count").text( score );
		$("#title").text( getTitle() );
		
		//補回HP
		hp = 3;
		$("#hpGague").html("");
		$("#hpGague").append("<img src=\"images/heart.png\" class=\"hp\"/>");
		$("#hpGague").append("<img src=\"images/heart.png\" class=\"hp\"/>");
		$("#hpGague").append("<img src=\"images/heart.png\" class=\"hp\"/>");
		
		//關閉popUp並啟動
		$.unblockUI({
			onUnblock: function(){
				playing = true;
				$("#playBtn").val("stop");
				movei();
			}
		});				
	});
}
//i的移動設定
function movei(){
	//依召當前等級來決定i的移動速度
	//數字為毫秒，1000毫秒=1秒，5000毫秒=5秒
	//lv 0 = 位移動畫需時5秒...以此類推 lv5 = 0.5秒
	if (score == 0){
		speed = 5000;
	}else if (0 < score && score <= (leveling * 1) ){
		speed = 4000;
	}else if ( (leveling * 1) < score && score <= (leveling * 2) ){
		speed = 3000;
	}else if ( (leveling * 2) < score && score <= (leveling * 3) ){
		speed = 2000;
	}else if ( (leveling * 3) < score && score <= (leveling * 4) ){
		speed = 1000;
	}else if ( (leveling * 4) < score){
		speed = 500;
	}
	//如果有設定setSpeed，以setSpeed為準
	//頁面上輸入秒數換算成毫秒 需要*1000
	if (setSpeed != 0){
		speed = setSpeed * 1000;
	}
	
	//先跑一次
	run();	
	//開跑之後啟用定時自動run
	block_i = setInterval( run , speed);
}

//執行位移動畫
function run() {
	//準備設定參數 x軸範圍 , y軸top跟bottom避免跑出畫面外
	var rangeX, rangeTop , rangeBottom , destinationX , destinationY;
	
	//抓取gamingZone的範圍，需要扣掉i區塊自身的長寬
	rangeX = $("#gamingZone").width() - $("#block_i").width();
	rangeTop = $("#gamingZone").position().top;
	rangeBottom = rangeTop + $("#gamingZone").height() - $("#block_i").height();
		
	//隨機決定下一個座標
	//random = 隨機抽0~1之間的數字ex:0.666666
	//再乘上範圍  ex 寬度,高度=100時 →0.66 x100 = 座標x,y (66,66)
	//y軸需要額外加上gamingZone的top數字，
	//因為gamingZone上方還有網頁的"title"佔了一段高度，不是從0開始而是從title下方開始
	destinationX = Math.floor(Math.random() * rangeX);
	destinationY = Math.floor(Math.random() * rangeBottom) + rangeTop;
	
	//決定座標之後執行動畫，指定left+top = 座標(x,y)
	//指定duration = 這段動畫跑幾秒，單位是毫秒，
	//故意做比計時器短了50毫秒 = 切換到下一動時會有約0.05秒的停頓給妮捉i
	$("#block_i").animate({
		left: destinationX + "px",
		top: destinationY + "px"
	},{
		duration: speed -50		
	});
}

//傳入flag (success/fail) 來決定pop的時顯示的臉與文字訊息
function popUp(flag){
	var imgStr = flag + "Img";
	//先把所有臉藏起來
	$("."+imgStr).addClass("hidden");
	
	//隨機抽一個不大於faceImgage數量的數字
	var idx = Math.floor(Math.random() * $("."+imgStr).length);
	//顯示那張臉
	console.log(idx);
	var face = $("."+imgStr).get(idx);	
	
	$(face).removeClass("hidden");
	
	
	
	//隨機抽取訊息
	//success/fail從各自list裡面抽取
	if ("success" == flag){		
		idx = Math.floor(Math.random() * this.successMessageList.length);	
		$("#"+flag+"Text").html(this.successMessageList[idx]);	
	}else{
		idx = Math.floor(Math.random() * this.failMessageList.length);	
		$("#"+flag+"Text").html(this.failMessageList[idx]);		
	}
	
	//取得popUp視窗的寬度
	var popupWidth = $("#"+flag+"Div").width();
	//跳出popUp顯示對應的臉與對應訊息
	$.blockUI({
        message: $("#"+flag+"Div"),
        css: {       
        	top: "3%",  
        	left: ($(window).width() - popupWidth) /2 + 'px',
            border: "none", 
            'background-color': 'rgba(0,0,0,0)',
            cursor: 'default',
            width: popupWidth + 'px'
          }		 
      });
	
	//時間到之後訊息自動消失，參數設置2000=2000毫秒=2秒後popUp消失
	setTimeout(function(){
		$.unblockUI({
			//消失之後啟動movei
			onUnblock: function(){
				playing = true;
				$("#playBtn").val("stop");
				movei();
			}
		});
	} , 2000);	
}

//遊戲結束popUp結果
function popUpResult() {
	var face;
	//清除結果faceImage與title文字
	$("#resultFace , #resultText").html("");
	//依score決定用哪個face image
	if (score == 0){
		face = "<img src=\"images/failFace_03.png\" class=\"failImg\"/>";
	}else if (0 < score && score <= (leveling * 1) ){
		face = "<img src=\"images/failFace_02.png\" class=\"failImg\"/>";
	}else if ( (leveling * 1) < score && score <= (leveling * 2) ){
		face = "<img src=\"images/failFace_01.png\" class=\"failImg\"/>";
	}else if ( (leveling * 2) < score && score <= (leveling * 3)){
		face = "<img src=\"images/successFace_03.png\" class=\"successImg\"/>";
	}else if ( (leveling * 3) < score && score <= (leveling * 4)){
		face = "<img src=\"images/successFace_02.png\" class=\"successImg\"/>";
	}else if ( (leveling * 4) < score){
		face = "<img src=\"images/successFace_01.png\" class=\"successImg\"/>";
	}
	//依照等級放入對應的face與title
	$("#resultFace").append(face);
	$("#resultText").append( getTitle() );
	
	//取得popUp寬度
	var popupWidth = $("#resultDiv").width();
	//設定並跳出結果popUp
	$.blockUI({
        message: $("#resultDiv"),
        css: {       
        	top: "3%",  
        	left: ($(window).width() - popupWidth) /2 + 'px',
            border: "none", 
            'background-color': 'rgba(0,0,0,0)',
            cursor: 'default',
            width: popupWidth + 'px'
          }		 
      });
}

//根據積分取得對應的等級title字串
function getTitle(){
	if (score == 0){
		return titleList[0];
	}else if (0 < score && score <= (leveling * 1) ){
		return titleList[1];
	}else if ( (leveling * 1) < score && score <= (leveling * 2) ){
		return titleList[2];
	}else if ( (leveling * 2) < score && score <= (leveling * 3) ){
		return titleList[3];
	}else if ( (leveling * 3) < score && score <= (leveling * 4) ){
		return titleList[4];
	}else if ( (leveling * 4) < score){
		return titleList[5];
	}
}