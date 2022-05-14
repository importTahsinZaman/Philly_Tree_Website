var s = skrollr.init();

//Intro menu
$(function () {
  $("#btnMenu").click(function () {
    $("#btnMenu").toggleClass("change");
    $("#btnMenu").addClass("colorWhite");
    $(".secMainNavi li").each(function (i) {
      var $li = $(this);
      setTimeout(function () {
        $li.toggleClass("naviSlideIn");
      }, i * 50); // delay 100 ms
    });
    $("aside").fadeToggle("1000");
  });
});
