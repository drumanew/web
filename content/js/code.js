var is_expanded = false;
var skip_this = false; // Let it work

function expand () {
  if (skip_this) {
    skip_this = false;
    return;
  }
  if (!is_expanded) {
    var elem = document.getElementById("trycode");

    elem.style.height = "50%";
    elem.style.width = "50%";
    document.getElementById("minimize_button").style.visibility = "visible";
    document.getElementById("code_frame").style.visibility = "visible";
    is_expanded = true;
  }
}

function minimize () {
  var elem = document.getElementById("trycode");

  elem.style.height = "40px";
  elem.style.width = "220px";
  document.getElementById("minimize_button").style.visibility = "hidden";
  document.getElementById("code_frame").style.visibility = "hidden";
  is_expanded = false;
  skip_this = true;
}
