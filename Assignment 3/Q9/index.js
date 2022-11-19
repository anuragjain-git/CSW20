$(".btn-submit").click(function(){
    var inp = $("input[name='radio']:checked").val();
    var p = Math.random();
    // var pointspc=0;
    // var pointsuser=0;
    // $(".user-points").text("0");
    // $(".pc-points").text("0");
    // alert(inp);
    if(inp=="r1"){
        $(".p-1").text("Rock");

        if(p<0.333){
            $(".p-2").text("Rock");
            $(".win-1").text("Draw");
        }
        else if(p<0.666) {
            $(".p-2").text("Paper");
            $(".win-1").text("You Lose");
            // $(".pc-points").text(pointspc++);
        }
        else {
            $(".p-2").text("Scissor");
            $(".win-1").text("You Won");
            // $(".user-points").text(pointsuser++);
        }
        
    }
    if(inp=="r2"){
        $(".p-1").text("Paper");

        if(p<0.333){
            $(".p-2").text("Rock");
            $(".win-1").text("You Won");
            // $(".user-points").text(pointsuser++);
        }
        else if(p<0.666) {
            $(".p-2").text("Paper");
            $(".win-1").text("Draw");
        }
        else {
            $(".p-2").text("Scissor");
            $(".win-1").text("You Lose");
            // $(".pc-points").text(pointspc++);
        }
    }
    if(inp=="r3"){
        $(".p-1").text("Scissor");

        if(p<0.333){
            $(".p-2").text("Rock");
            $(".win-1").text("You Lose");
            // $(".pc-points").text(pointspc++);
        }
        else if(p<0.666) {
            $(".p-2").text("Paper");
            $(".win-1").text("You Won");
            // $(".user-points").text(pointsuser++);
        }
        else {
            $(".p-2").text("Scissor");
            $(".win-1").text("Draw");
        }
    }
});