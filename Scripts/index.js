//Makes sure the transperency hole doesn't appear on phones
if (screen.width >= 991) {
  window.onmousemove = (event) => {
    let hole = document.querySelector(".hole");
    hole.style.top = `${event.y - 150}px`;
    hole.style.left = `${event.x - 150}px`;
  };
}

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

//Intro slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".int-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".text h2", { opacity: 0 }, { opacity: 1, duration: 1.3 });
tl.fromTo(".text h3", { opacity: 0 }, { opacity: 1, duration: 1.3 }, "-=1.3");
tl.fromTo(".text p", { opacity: 0 }, { opacity: 1, duration: 1.3 }, "-=0.8");
tl.fromTo(".text a", { opacity: 0 }, { opacity: 1, duration: 1.3 }, "-=0.8");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1.3 }, "-=0.7");
