function initPage(){
  
  $("input[name='rarity']").bind("change" , function(){
    var rareValue = "";
    $("input[name='rarity']:checked").each(function(){
       rareValue += $(this).val();
    });
    
    $("#rarityCheck").val(rareValue);
  });
}

function filterRun(){

  clearResult();
  
  var rareCheck = $("#rarityCheck").val();
  var classCheck = $("#classSelector").val();
  var itemCheck = $("#itemSelector").val();

  

  for (var i = 0; i < servantData.length ; i++){
    
    if ( !(servantData[i].class == classCheck || classCheck == "all") ){
      continue;
    }
    
    if ( !(rareCheck.indexOf(servantData[i].rarity) > -1) ){
      continue;
    }
    
    if ( !(itemCheck == servantData[i].item || itemCheck == servantData[i].item2) ){
      continue;
    }

    putResult(servantData[i]);

  }

  resultSetup();
}

function putResult(servant){
  if (servant.item == $("#itemSelector").val()){
    $("."+servant.rarity).children("."+servant.class).append("<input type='checkBox' name='partyChecker' svName='"+servant.name+"' item='"+servant.item+"'value="+servant.cost+">")
  }else if (servant.item2 == $("#itemSelector").val()){
    $("."+servant.rarity).children("."+servant.class).append("<input type='checkBox' name='partyChecker' svName='"+servant.name+"' item='"+servant.item2+"'value="+servant.cost+">")
  }

  if ( (servant.item == "iron" && servant.item2 == "blue") || 
       (servant.item == "stone" && servant.item2 == "gold") ||
       (servant.item == "wood" && servant.item2 == "silver") ){
        $("."+servant.rarity).children("."+servant.class).append("<span class='craftFixed'>"+servant.name+"</span><br/>")
  }else{
      $("."+servant.rarity).children("."+servant.class).append("<span>"+servant.name+"</span><br/>")
  } 
}

function clearResult(){
  $(".saber, .archer, .lancer, .rider, .assassin, .caster, .berserker, .ex").html("");
}

function resultSetup(){

  $("input[name='partyChecker']").bind("change" , function(){
       
    
    if ($(this).prop("checked") == true){

      if ($(".party").length > 5 ){
        alert("組隊最大6人，上回忘了加上sup格。");
        $(this).prop("checked", false);
        return false;
      }
       
      if ($("input[name='"+$(this).attr("svName")+"']").length != 0) {
        return false;
      }
        
      joinUnit($(this));     
      
    }else{
      if ($(".party").length == 0){
        return false;
      }else{
        $("input[name='"+$(this).attr("svName")+"']").click();
      }
    }
  });
}


function joinUnit(obj){
  var copySelector = $("#craftSelector").clone();
  copySelector.removeClass("hidden");
  copySelector.addClass("craft");
  
  $(copySelector).bind("change" , caculator);

  $("#partyList").append("<li tag='"+$(obj).attr('svName')+"'class='party' cost='"+$(obj).attr('value')+"'></li>");
  $("#partyList").children().last().append("<span class='"+$(obj).attr('item')+"'>"+$(obj).attr('svName')+"</span>&nbsp;");
  $("#partyList").children().last().append(copySelector);
  $("#partyList").children().last().append("&nbsp;<input type='button' name='"+$(obj).attr('svName')+"' value='remove' onclick='removeUnit(this);'>");

  caculator();
}

function removeUnit(obj){  
  var objName = $(obj).attr("name");
  
  if ($("input[svName='"+objName+"']").prop("checked") == true){
    $("input[svName='"+objName+"']").prop("checked" , false);
  }

  $(obj).parent().remove();
  caculator();
}

function caculator(){
  var waterSum = 0;
  var ironSum  = 0;
  var stoneSum = 0;
  var foodSum  = 0;
  var woodSum  = 0;
  var blueSum  = 0;
  var goldSum  = 0;
  var silverSum= 0;
  var oilSum   = 0;
  var cementSum= 0;
  var cost = 0;

  $(".party").each(function(){
    if ($(this).children("span").first().hasClass("water")){
      waterSum += 1;
    }else if ($(this).children("span").first().hasClass("food")){
      foodSum += 1;    
    }else if ($(this).children("span").first().hasClass("wood")){
      woodSum += 1;
    }else if ($(this).children("span").first().hasClass("stone")){
      stoneSum += 1;
    }else if ($(this).children("span").first().hasClass("iron")){
      ironSum += 1;
    }else if ($(this).children("span").first().hasClass("blue")){
      blueSum += 1;
    }else if ($(this).children("span").first().hasClass("gold")){
      goldSum += 1;
    }else if ($(this).children("span").first().hasClass("silver")){
      silverSum += 1;
    }else if ($(this).children("span").first().hasClass("oil")){
      oilSum += 1;
    }else if ($(this).children("span").first().hasClass("cement")){
      cementSum += 1;
    } 
    //第六人sup不需要cost
    if ( !( $(".party").length == 6 && $(this).attr("tag") == $(".party").last().attr("tag") ) ){
      cost += parseInt($(this).attr("cost"));
    }        
    
  });
   
  $(".craft").each(function(){
    if ($(this).children(":selected").attr("item") == "iron"){
      ironSum += 1;
      blueSum += 1;
    }else if($(this).children(":selected").attr("item") == "wood"){
      woodSum += 1;
      silverSum += 1;
    }else if($(this).children(":selected").attr("item") == "stone"){
      stoneSum += 1;
      goldSum += 1;
    }else if($(this).children(":selected").attr("item") == "waterfood"){
      waterSum += 1;
      foodSum += 1;
    }else if($(this).children(":selected").attr("item") == "oilcement"){
      cementSum += 1;
      oilSum += 1;
    }
    //第六人sup的禮裝不需要cost
    if ( !( $(".craft").length == 6 && $(this).prev().text() == $(".party").last().attr("tag") ) ){
      cost += parseInt($(this).val());
    }

  });
  $("#cost").html(cost);
  $("#stone").html(stoneSum);
  $("#wood").html(woodSum);
  $("#food").html(foodSum);
  $("#iron").html(ironSum);
  $("#water").html(waterSum);
  $("#gold").html(goldSum);
  $("#silver").html(silverSum);
  $("#blue").html(blueSum);
  $("#oil").html(oilSum);
  $("#cement").html(cementSum);
}