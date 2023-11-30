//show and hide navigations
var nav = document.querySelector("#navigations");
var signInContainer = document.querySelector("#buttons-container");
var soccerBtn = document.querySelector("#soccerBall button");

var soccerBall = document.querySelector(".fa-futbol");
var xBtn = document.querySelector(".fa-x");

var mainNavVisible = false;

function showNav() {
  if (mainNavVisible === false) {
    nav.classList.add("showNavs");
    signInContainer.classList.add("showButtons");
    mainNavVisible = true;
    xBtn.classList.add("hide-soccerball");
  } else {
    nav.classList.remove("showNavs");
    signInContainer.classList.remove("showButtons");
    mainNavVisible = false;
  }
}

soccerBtn.addEventListener("click", showNav);

//show and hide sign up modal
var signUpBtn = document.querySelector("#sign-up-btn");
var signUpContainer = document.querySelector("#sign-up-container");
var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");

function showSignUpModal() {
  signUpContainer.classList.add("show-sign-up-container");
  nav.classList.remove("showNavs");
  signInContainer.classList.remove("showButtons");
}

function hideSignUpModal() {
  signUpContainer.classList.remove("show-sign-up-container");
}

signUpBtn.addEventListener("click", showSignUpModal);
closeSignUpModalBtn.addEventListener("click", hideSignUpModal);
