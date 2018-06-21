function initPage(){
	
  buildSelector();
  buttonSetup();
	 
  $(".anchor").not(".hidden2").addClass("hidden2");
    

  $("input[name='questFilter']").bind("change", function(){
	  //總之把當前的隱藏
	  $(".selector").not(".hidden").addClass("hidden");
	  
	  if ($(this).prop("checked")){		  
		$("#"+$(this).val()).removeClass("hidden");
		
		if ("missionSelector" == $(this).val() ){
			$("#mapAnchor").prop("disabled" , false);
		}else{
			$("#mapAnchor").prop("disabled" , true);;
		}
	  }

      $("#questContent , #questReward , #questPrevStep").html("");
  });
 
  $("input[name='questFilter']:checked").change();
}

function buildSelector(){
    for (var i = 0; i < mainQuestList.length;i++){
      $("#mainQuestSelector").append($("<option>"+mainQuestList[i].name+"</option>")
                             .attr("cost" , mainQuestList[i].cost)
                             .attr("prev" , mainQuestList[i].prev)
                             .attr("enemy" , mainQuestList[i].enemy)
                             .attr("drop" , mainQuestList[i].drop)
                             .attr("locate" , mainQuestList[i].locate)
                             .val(mainQuestList[i].name));
    }

    for (var i = 0; i <	suppressionQuestList.length;i++){
      $("#suppressionQuestSelector").append($("<option>"+suppressionQuestList[i].name+"</option>")
                             .attr("cost" , suppressionQuestList[i].cost)
                             .attr("prev" , suppressionQuestList[i].prev)
                             .attr("enemy" , suppressionQuestList[i].enemy)
                             .attr("drop" , suppressionQuestList[i].drop)
                             .attr("locate" , suppressionQuestList[i].locate)
                             .val(suppressionQuestList[i].name));
    }

    for (var i = 0; i < missionList.length;i++){
      $("#missionSelector").append($("<option>"+missionList[i].name+"</option>")
                           .attr("target" , missionList[i].target)
                           .attr("prev" , missionList[i].prev)
                           .attr("reward" , missionList[i].reward)
                           .attr("tag" , missionList[i].tag)
                           .val(missionList[i].name));
    }

    for (var i = 0;i < freeQuestList.length;i++){
      $("#freeQuestSelector").append($("<option>"+freeQuestList[i].name+"</option>")
                             .attr("cost" , freeQuestList[i].cost)
                             .attr("prev" , freeQuestList[i].prev)
                             .attr("enemy" , freeQuestList[i].enemy)
                             .attr("drop" , freeQuestList[i].drop)
                             .attr("locate" , freeQuestList[i].locate)
                             .attr("tag" , freeQuestList[i].tag)
                             .val(freeQuestList[i].name));
    }
    

    $("#mainQuestSelector , #freeQuestSelector , #suppressionQuestSelector").bind("change" , function (){

      //總之先清除table內容
      $("#questContent , #questReward , #questPrevStep").html("");
      
      var name = $(this).val();
      
      var selectedOption =  $(this).children("[value='"+name+"']");
      //quest只需要顯示任務地點在哪，不需要像mission那樣檢查tag檢索各大關卡內容
      $("#missionLocate").val($(selectedOption).attr("locate"));
      $("#missionTag").val("");  

      //顯示關卡內容物            
      $("#questReward").html($(selectedOption).attr("drop"));
      $("#questPrevStep").html($(selectedOption).attr("prev"));
      
      if ("no battle" == $(selectedOption).attr("enemy")){

         $("#questContent").html($(selectedOption).attr("enemy"));
      }else{
         var enemyWaves = $(selectedOption).attr("enemy").split("/");

         for (var i=0;i< enemyWaves.length;i++){
           $("#questContent").append(enemyWaves[i]+"<br/>");
         }
      }
      

    });  

    $("#missionSelector").bind("change" , function(){
   
      //總之先清除table內容
      $("#questContent , #questReward , #questPrevStep").html("");
        
      var name = $(this).val();
      
      var selectedOption =  $(this).children("[value='"+name+"']");

      //mission必須要根據任務目標檢索各大地區的關卡內容
      $("#missionTag").val($(selectedOption).attr("tag"));
      $("#missionLocate").val("");

      //顯示任務內容
      $("#questContent").html($(selectedOption).attr("target"));
      $("#questReward").html($(selectedOption).attr("reward"));
      $("#questPrevStep").html($(selectedOption).attr("prev"));
    });
    
}

function missionFilter(){
  var tag = $("#missionTag").val();
  
  if ("" == tag){
	  alert("任務地點檢索只支援「打倒x個怪物」or「打倒o屬性的鯖」。");
	  return false;
  }
  
  //清除之前的檢索紀錄
  $(".anchor").not(".hidden2").addClass("hidden2");
  
  for (var i = 0;i < freeQuestList.length;i++){
	  if (freeQuestList[i].tag.indexOf(tag) > -1){
		  $("."+freeQuestList[i].locate).removeClass("hidden2");
	  }
  }

  $("div.myMap").addClass("hidden");

  $("div.myMap").each(function(){
    if ($(this).children("a.anchor").not(".hidden2").size() != 0){     
      $(this).removeClass("hidden");
      return false;
    }
  });
  
  
  $("html,body").stop().animate({scrollTop:$('#mapDiv').offset().top},400);
}

function popUp(target){
	$.blockUI({
        message: $("#"+target),
        css: {       
        	top: "20%",
            border: "0px", 
            'background-color': 'rgba(0,0,0,0)',
            cursor: 'default'            
          }
      });
	
	$(".blockOverlay").click($.unblockUI);
}

function cleanMap(){
	//清除之前的檢索紀錄
	$(".anchor").not(".hidden2").addClass("hidden2");
}

function buttonSetup(){
  $("a.front_frontBtn , a.back_frontBtn , a.bb_frontBtn").click(function(){
    $("#frontMap , #backMap , #bbMap").addClass("hidden");   
    $("#frontMap").removeClass("hidden");
  });
  
  $("a.front_backBtn , a.back_backBtn , a.bb_backBtn").click(function(){
    $("#frontMap , #backMap , #bbMap").addClass("hidden");   
    $("#backMap").removeClass("hidden");  
  });
  $("a.front_bbBtn , a.back_bbBtn , a.bb_bbBtn").click(function(){
    $("#frontMap , #backMap , #bbMap").addClass("hidden");   
    $("#bbMap").removeClass("hidden");  
  });
}
