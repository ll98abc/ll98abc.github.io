function initPage(){
	
  buildSelector();
	
  $("input[name='questFilter']").bind("change", function(){
	  //總之把當前的隱藏
	  $(".selector").not(".hidden").addClass("hidden");
	  
	  if ($(this).prop("checked")){		  
		$("#"+$(this).val()).removeClass("hidden");
	  }
  });
  
}

function buildSelector(){
	
}

function filterRun(){
  
}

