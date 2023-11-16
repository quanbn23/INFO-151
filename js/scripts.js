var navs = document.querySelector("#navs");
var soccerBtn = document.querySelector("#soccerball button");
var mainNavVisible = false;
function showNav() {
  if (mainNavVisible === false) {
    console.log("show nav");
    navs.classList.add("showNavs");
    mainNavVisible = true;
  } else {
    console.log("hide nav");
    navs.classList.remove("showNavs");
    mainNavVisible = false;
  }
}
soccerBtn.addEventListener("click", showNav);
