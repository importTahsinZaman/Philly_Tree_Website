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

//Intro slider:
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

//Fill Table On Load:
window.onload = function () {
  var table = document.getElementById("location_table");
  //Get entries as object:
  var settings = {
    url: "https://sheetdb.io/api/v1/x7p9bm0vbn488",
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    //Add all entries to table:
    for (let i = 0; i < response.length; i++) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = response[i]["Specie"];
      cell2.innerHTML = response[i]["Address"];
      cell3.innerHTML = response[i]["Note"];
    }

    //Sort Table Alphabetically:
    var rows, switching, i, x, y, shouldSwitch;

    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  });
};

//Add the user's tree location entry:
function addEntry() {
  var tree_specie, location, note;

  tree_specie = prompt("Tree Specie:");

  if (tree_specie != null && tree_specie != "") {
    location = prompt("Location:");

    if (location != null && location != "") {
      note = prompt("Note:");

      var custom_url = "https://sheetdb.io/api/v1/x7p9bm0vbn488";
      custom_url =
        custom_url +
        "?Specie=" +
        tree_specie +
        "&Address=" +
        location +
        "&Note=" +
        note;

      var settings = {
        url: custom_url,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.reload();
      });
    } else {
      alert("Entry Cancelled");
    }
  } else {
    alert("Entry Cancelled");
  }
}
