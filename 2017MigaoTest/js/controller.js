var saberP = 0;
var lancerP = 0;
var archerP = 0;
var riderP = 0;
var casterP = 0;
var assassinP = 0;
var berserkerP = 0;

function initPage(){
  $(".quiz").addClass("hidden");
  $(".result").addClass("hidden");

  $("#quest1").removeClass("hidden");
}

function quiz_1_A(){
  $("#quest1").addClass("hidden");
  $("#quest2").removeClass("hidden");
}

function quiz_1_B(){
  casterP = casterP + 30;
  assassinP = assassinP + 20;
  berserkerP = berserkerP + 10;

  $("#quest1").addClass("hidden");
  $("#quest4").removeClass("hidden");  

}

function quiz_2_A(){
  var count = 0;
  $(".checkQ2").each(function(){
    if ( $(this).prop("checked")){
      if ( $(this).val() == "saber" ){
        saberP = saberP + 30;
      }else if( $(this).val() == "archer"){
        archerP = archerP + 30;
      }else if( $(this).val() == "lancer"){
        lancerP = lancerP + 30;
      }else if( $(this).val() == "rider"){
        riderP = riderP + 30;
      }else if( $(this).val() == "caster"){
        casterP = casterP + 30;
      }else if( $(this).val() == "assassin"){
        assassinP = assassinP + 30;
      }else if( $(this).val() == "berserker"){
        berserkerP = berserkerP + 30;
      }
    }else{
      count++;
    }
  });
  
  if (count == 7){
    alert("看清楚問題並勾選好ㄇ？");
    return false;
  }
  
  $("#quest2").addClass("hidden");
  $("#quest4").removeClass("hidden"); 

}

function quiz_2_B(){
  $("#quest2").addClass("hidden");
  $("#quest3").removeClass("hidden");  
}

function quiz_3_A(){
    var count = 0;
  $(".checkQ3").each(function(){
    if ( $(this).prop("checked")){
      if ( $(this).val() == "saber" ){
        saberP = saberP + 20;
      }else if( $(this).val() == "archer"){
        archerP = archerP + 20;
      }else if( $(this).val() == "lancer"){
        lancerP = lancerP + 20;
      }else if( $(this).val() == "rider"){
        riderP = riderP + 20;
      }else if( $(this).val() == "caster"){
        casterP = casterP + 20;
      }else if( $(this).val() == "assassin"){
        assassinP = assassinP + 20;
      }else if( $(this).val() == "berserker"){
        berserkerP = berserkerP + 20;
      }
    }else{
      count++;
    }
  });

  if (count == 7){
    alert("看清楚問題並勾選好ㄇ？");
    return false;
  }
   
  $("#quest3").addClass("hidden");
  $("#quest4").removeClass("hidden");  

}

function quiz_3_B(){
  $("#quest3").addClass("hidden");
  $("#quest4").removeClass("hidden");  
}

function quiz_4_A(){
  saberP = saberP + parseInt($("#saber4_a").val());
  archerP = archerP + parseInt($("#archer4_a").val());
  lancerP = lancerP + parseInt($("#lancer4_a").val());
  casterP = casterP + parseInt($("#caster4_a").val());
  riderP = riderP + parseInt($("#rider4_a").val());
  assassinP = assassinP + parseInt($("#assassin4_a").val());
  berserkerP = berserkerP + parseInt($("#berserker4_a").val());

  saberP = saberP - parseInt($("#saber4_b").val());
  archerP = archerP - parseInt($("#archer4_b").val());
  lancerP = lancerP - parseInt($("#lancer4_b").val());
  casterP = casterP - parseInt($("#caster4_b").val());
  riderP = riderP - parseInt($("#rider4_b").val());
  assassinP = assassinP - parseInt($("#assassin4_b").val());
  berserkerP = berserkerP - parseInt($("#berserker4_b").val());

  $("#quest4").addClass("hidden");
  $("#quest5").removeClass("hidden");  

}

function quiz_4_B(){

  $("#quest4").addClass("hidden");
  $("#quest5").removeClass("hidden");  

}

function quiz_5_A(){
  saberP = saberP - parseInt($("#saber5_a").val());
  archerP = archerP - parseInt($("#archer5_a").val());
  lancerP = lancerP - parseInt($("#lancer5_a").val());
  casterP = casterP - parseInt($("#caster5_a").val());
  riderP = riderP - parseInt($("#rider5_a").val());
  assassinP = assassinP - parseInt($("#assassin5_a").val());
  berserkerP = berserkerP - parseInt($("#berserker5_a").val());

  saberP = saberP - parseInt($("#saber5_b").val());
  archerP = archerP - parseInt($("#archer5_b").val());
  lancerP = lancerP - parseInt($("#lancer5_b").val());
  casterP = casterP - parseInt($("#caster5_b").val());
  riderP = riderP - parseInt($("#rider5_b").val());
  assassinP = assassinP - parseInt($("#assassin5_b").val());
  berserkerP = berserkerP - parseInt($("#berserker5_b").val());

  $("#quest5").addClass("hidden");
  $("#quest6").removeClass("hidden");  

}

function quiz_5_B(){
  $("#quest5").addClass("hidden");
  $("#quest6").removeClass("hidden");  
}

function quiz_6_A(){
  casterP = casterP - parseInt($("#select6_1").val());
  casterP = casterP - parseInt($("#select6_2").val());
  assassinP = assassinP - parseInt($("#select6_3").val());
  berserkerP = berserkerP - parseInt($("#select6_4").val());

  goResult()
}

function goResult(){
  $(".saber").text(saberP);
  $(".lancer").text(lancerP);
  $(".archer").text(archerP);
  $(".rider").text(riderP);
  $(".caster").text(casterP);
  $(".assassin").text(assassinP);
  $(".berserker").text(berserkerP);
  
  $(".quiz").addClass("hidden");
  $(".result").removeClass("hidden");
}