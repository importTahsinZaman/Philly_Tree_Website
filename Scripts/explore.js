//Skrollr Initialization
var s = skrollr.init();

//Intro slider (GSAP Timeline)
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

//Section 4 Scroll animation
//This is used for responsiveness so the page needs to be reloaded
if (screen.width >= 630) {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#sec4 p",
      startDelay: "0%",
      end: "100%",
      scrub: true,
      pin: true,
    },
  });

  tl2.fromTo("#sec4 p", { opacity: 1 }, { opacity: 1, height: "10vh" });
}
