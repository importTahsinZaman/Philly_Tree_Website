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

function setCookie(name, value) {
  document.cookie = name + "=" + (value || "") + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

var tree_select = document.getElementById("user_tree_specie");
var address_select = document.getElementById("user_location");
var note_box = document.getElementById("user_input");
start();
function start() {
  //Fill Table
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
  // Set user's identified trees:

  var options = getCookie("idTrees");
  if (options != null && options != "") {
    var options_list = options
      .toString()
      .substring(0, options.length - 1)
      .split("#");

    for (var i = 0; i < options_list.length; i++) {
      var opt = document.createElement("option");
      opt.value = options_list[i]
        .replace("_", " ")
        .replace(/(?:^|\s)\S/g, function (a) {
          return a.toUpperCase();
        });
      opt.innerHTML = options_list[i]
        .replace("_", " ")
        .replace(/(?:^|\s)\S/g, function (a) {
          return a.toUpperCase();
        });
      tree_select.appendChild(opt);
    }
  } else {
    var opt = document.createElement("option");
    opt.value = "Err: No Trees Identified";
    opt.innerHTML = "Err: No Trees Identified";
    tree_select.appendChild(opt);
  }

  //Set user's location
  var address;
  const succesfulLookup = (position) => {
    //Turns latitude and longitude values into address
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=05372de385b74a64b28160ce6666037b`
    )
      .then((response) => response.json())
      .then(read_address);
  };

  function read_address(data) {
    address_list = data["results"]["0"]["formatted"].split(",");
    var address = "";
    for (let i = 0; i < address_list.length - 1; i++) {
      address += address_list[i] + ",";
    }
    address = address.substring(0, address.length - 1);

    var opt = document.createElement("option");
    opt.value = address;
    opt.innerHTML = address;
    address_select.appendChild(opt);
  }

  function unsuccesfulLookup() {
    var opt = document.createElement("option");
    opt.value = "Err: Enable Location Services";
    opt.innerHTML = "Err: Enable Location Services";
    address_select.appendChild(opt);
  }

  var location = navigator.geolocation.getCurrentPosition(
    //Run geolocation api, then call reverse geolocation function
    succesfulLookup,
    unsuccesfulLookup
  );
}

var modalBg = document.getElementById("modal_bg");

//Add the user's tree location entry:
function add_entry() {
  var tree_specie, location, note;

  tree_specie = tree_select.value;
  location = address_select.value;
  note = note_box.value;

  if (
    tree_specie != "Select A Species" &&
    location != "Select Your Address" &&
    location != "Err: Enable Location Services"
  ) {
    close_entry_modal();
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
  }
}

function close_entry_modal() {
  modalBg.classList.remove("active");
}
function show_entry_modal() {
  modalBg.classList.add("active");
}

//Info Box:
const question_button = document.getElementById("question_button");
const explain_box = document.getElementById("explain_box");
question_button.addEventListener("mouseover", function show_info() {
  explain_box.style.display = "block";
});
question_button.addEventListener("mouseout", function show_info() {
  explain_box.style.display = "none";
});
