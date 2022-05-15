//Skrollr Initialization
var s = skrollr.init();

//Intro slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

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
