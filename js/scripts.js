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


// $(Document).ready(function(){
//     $("#img4").mouseover(function(){
//     $("p4").css("opacity:1")    
//     })
//     $("#img4").mouseout(function(){
//         $("p4").css("opacity:1")    
//         })
// })

// $(".card").hover(function () {
//     $(this).children(".card-1").fadeToggle(1000, "linear");
//   });


$("button").click(function () {
    var client = document.getElementById('details').value;
    alert(' Dear ' + client + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');

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