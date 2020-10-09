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


$(Document).ready(function(){
    $("#img4").mouseover(function(){
    $("p4").css("opacity:1")    
    })
    $("#img4").mouseout(function(){
        $("p4").css("opacity:1")    
        })
})

$("button").click(function () {
    var client = document.getElementById('details').value;
    alert(' Dear ' + client + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');

  });