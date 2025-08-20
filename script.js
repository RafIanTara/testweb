var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;

function check(e) {
  var target = (e && e.target) || (window.event && window.event.srcElement);

  // Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // Click not on the menu
    if (checkParent(target, navMenu)) {
      // Click on the menu toggle
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // Click outside the menu and toggle
      navMenuDiv.classList.add("hidden");
    }
  }
}

function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}