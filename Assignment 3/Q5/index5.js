$("#btn1").click(function(){
    $("#p").slideUp();
});

$("#btn2").click(function(){
    $("#p").slideDown();
});

// animate

$("#box").css({"background-color":"red","width":"100px","height":"100px"});

$("#btn3").click(function(){
    $("#box").animate({width: "300px"});
});

//fadeOut and fadeIn

$("#btn4").click(function(){
    $("#p2").fadeOut();
});
  $("#btn5").click(function(){
    $("#p2").fadeIn();
});

//hide, show

$("#btn6").click(function(){
    $("#p3").hide();
});

$("#btn7").click(function(){
    $("#p3").show();
});

//

$("#box1").css({"background-color":"green","width":"100px","height":"100px"});

$("#box1").mouseenter(function (){
    $(this).css("background-color","blue");
});

$("#box1").dblclick(function (){
    $(this).css("background-color","black");
})

$("#box2").css({"background-color":"gray","width":"100px","height":"100px"});

$("#box2").mouseleave(function (){
    $(this).css("background-color","orange");
});

$("#btn8").click(function(){
    alert("Image width: " + $("img").attr("width"));
});

$("#btn9").click(function(){
    $("#p4").html("Hello <i>world</i>!");
  });
