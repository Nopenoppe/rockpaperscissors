$(".rules-btn").click(function(){
  $(".rules").addClass("rules-click").fadeTo(200, 1);
});

$(".close-btn").click(function(){
  $(".rules").removeClass("rules-click").fadeOut();
});

$(".circle").hover(function() {
  $(this).css("transform", "scale(1.1)");
},function() {
  $(this).css("transform","");
});
