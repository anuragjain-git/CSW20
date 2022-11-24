// $("#form-1").hide();
// $("#plus").click(function (){
//     $("#form-1").show();
// });
$("#btn").click(function (){
    var a = document.forms["FName"]["name"].value;
    var b = document.forms["FName"]["email"].value;
    if (a == ""){
        alert("Please Enter Your Name");
    }

    if (b == ""){
        alert("Please Enter Your Email");
    }

});