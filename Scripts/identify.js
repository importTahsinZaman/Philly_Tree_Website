//Nav Menu
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

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

//Makes background image move based on mouse position
$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  $("#background-image").css(
    "background-position",
    mouseX + "px " + mouseY + "px"
  );
});

//Classification Model:
const input = document.querySelector('input[type = "file"]');

const URL = "https://teachablemachine.withgoogle.com/models/B0IYPLkg-/";
let model, labelContainer;

//The model finds the name of the leaf and then adds it to a cookie in the site.
//The website redirects to the directory page where the find_species.js script is run
//Because a cookie exists, find_species takes the user to their identified tree
//If a cookie did not exist, find_species() would not take the user anywhere

input.addEventListener(
  "change",
  async function (e) {
    const fileReader = new FileReader();

    fileReader.onload = async function (e) {
      document.getElementById("preview").setAttribute("src", e.target.result);

      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);

      labelContainer = document.getElementById("label-container");

      const prediction = await model.predictTopK(
        document.getElementById("preview")
      );
      classPrediction =
        prediction[0].className + ": " + prediction[0].probability.toFixed(2);
      labelContainer.innerHTML = classPrediction;

      if (getCookie("idTrees") == null) {
        setCookie("idTrees", "");
      }

      var id_trees = getCookie("idTrees");

      if (id_trees.indexOf(prediction[0].className) == -1) {
        id_trees += prediction[0].className + "#";
        setCookie("idTrees", id_trees);
      }

      setCookie("tree", prediction[0].className);
      scroll_to_tree(prediction[0].className);
    };

    fileReader.readAsDataURL(input.files[0]);
  },
  false
);
