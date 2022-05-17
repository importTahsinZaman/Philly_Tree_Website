//Hiding Search button in the beginning
const input = document.getElementById("input");
input.hidden = true;

// Nav Menu
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

//Intro slider:
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

//Preloader:
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  tl.fromTo(
    "#preloader",
    { opacity: 1 },
    { opacity: 0, display: "none", duration: 1 }
  );

  tl.fromTo("#btnMenu", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
});

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#top .overlay", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#top .text h1", { bottom: -250 }, { bottom: 3, duration: 0.7 });
tl.fromTo(
  "#top .text h1",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=0.7"
);

tl.fromTo("#top .text h2", { opacity: 0 }, { opacity: 1, duration: 0.5 });

//Top Dropdown menu
function onInput() {
  try {
    //In a try catch block to avoid errors when the user is manually editing the input box
    var val = document.getElementById("input").value;
    val = val.toLowerCase().replace(" ", "_");
    document.getElementById(val).scrollIntoView();
  } catch (err) {}
}

//Search button
function search_button_clicked() {
  input.hidden = !input.hidden;
}

//Hide dropdown on scroll

function hide_input_box() {
  if (!input.hidden) {
    input.hidden = true;
  }
}
