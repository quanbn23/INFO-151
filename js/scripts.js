var nav = document.querySelector("#navigations");
var signInContainer = document.querySelector("#buttons-container");
var soccerBtn = document.querySelector("#soccerBall button");

var mainNavVisible = false;

function showNav() {
  if (mainNavVisible === false) {
    nav.classList.add("showNavs");
    signInContainer.classList.add("showButtons");
    mainNavVisible = true;
  } else {
    nav.classList.remove("showNavs");
    signInContainer.classList.remove("showButtons");
    mainNavVisible = false;
  }
}

soccerBtn.addEventListener("click", showNav);
