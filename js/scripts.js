$(Document).ready(function(){
$("#img1").click(function(){
$("#p1").toggle("slow");
});
$("#img2").click(function(){
$("#p2").toggle("slow");
});
$("#img3").click(function(){
 $("#p3").toggle("slow");   
});
});


$("button").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "") {
      alert("Please Insert your name")
    } else 
         if(email === ""){
        alert("Enter your Email")
    }else 
       if(message === "") {
      alert("Please insert your message!")
    }else {
       alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
    }
  });
 

  
  
$(document).ready(function () {
  $(".p4").hide();
  $(".p5").hide();
  $(".p6").hide();
  $(".p7").hide();
  $(".img4").hover(function () {
      $(this).find(".p4").toggle();
      $(this).find(".p5").toggle();
      $(this).find(".p6").toggle();
      $(this).find(".p7").toggle();
  }); 
});

$(document).ready(function(){
  $(".p8").hide();
  $(".p9").hide();
  $(".p10").hide();
  $(".p11").hide();
  $(".img5").hover(function(){
      $(this).find(".p8").toggle();
      $(this).find(".p9").toggle();
      $(this).find(".p10").toggle();
      $(this).find(".p11").toggle();

  });
});
