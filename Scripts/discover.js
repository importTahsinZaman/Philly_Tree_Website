//Intro slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

//Preloader:
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Expand / Collapse Menu
$(function () {
  $("#btnMenu").click(function () {
    $(".secSubNavi").hide();
    $(".secContD").show();
    $("#btnMenu").toggleClass("change");
    $("#btnMenu").addClass("colorWhite");
    $(".secMainNavi li").each(function (i) {
      var $li = $(this);
      setTimeout(function () {
        $li.toggleClass("naviSlideIn");
      }, i * 50); // delay 100 ms
    });
    $("aside").fadeToggle("1000");
    $(".secContD").toggleClass("naviSlideIn");
  });
});

// Cover Animation
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $(".secCover").addClass("active");
  } else {
    $(".secCover").removeClass("active");
  }
});

//Image/Text horizontal scroll
s = skrollr.init();

jQuery(window).load(function () {
  $(".theNavigator")
    .delay(1500)
    .css({ opacity: "0" })
    .animate({ opacity: "1" }, { duration: 1800 }, "swing");
  $("#btnMenu")
    .delay(1500)
    .css({ "margin-left": "-10%", opacity: "0" })
    .animate({ marginLeft: "0%", opacity: "1" }, { duration: 1800 }, "swing");
  $("#secIntro")
    .delay(2500)
    .css({ bottom: "-5%", opacity: "0" })
    .animate({ bottom: "0%", opacity: "1" }, { duration: 800 }, "bounceIn");
  $(".logoHolder")
    .delay(1500)
    .css({ "margin-top": "-10%", opacity: "0" })
    .animate({ marginTop: "0%", opacity: "1" }, { duration: 1800 }, "swing");
  $(".lingualHolder")
    .delay(1300)
    .css({ "margin-top": "-10%", opacity: "0" })
    .animate({ marginTop: "0%", opacity: "1" }, { duration: 1800 }, "swing");
  $(".btnBook")
    .delay(1500)
    .css({ "margin-top": "-10%", opacity: "0" })
    .animate({ marginTop: "0%", opacity: "1" }, { duration: 1800 }, "swing");
  $("footer")
    .delay(1500)
    .css({ "margin-bottom": "-10%", opacity: "0" })
    .animate({ marginBottom: "0%", opacity: "1" }, { duration: 2000 }, "swing");
});
