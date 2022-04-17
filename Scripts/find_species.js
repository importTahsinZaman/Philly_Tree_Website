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

function scroll_to_tree(class_name) {
  document.location.href = "trees_directory.html";
}

function check_scroll() {
  if (getCookie("tree") != "") {
    element_id = getCookie("tree");
    element = document.getElementById(element_id);
    element.scrollIntoView();
    setCookie("tree", "");
  }
}

check_scroll();
