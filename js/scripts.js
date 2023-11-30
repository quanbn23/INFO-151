//show and hide navigations
var nav = document.querySelector("#navigations");
var signInContainer = document.querySelector("#buttons-container");
var soccerBtn = document.querySelector("#soccerBall button");

var soccerBall = document.querySelector("#soccerball");
var xBtn = document.querySelector("#x-btn");

var mainNavVisible = false;

function showNav() {
  if (mainNavVisible === false) {
    nav.classList.add("showNavs");
    signInContainer.classList.add("showButtons");
    mainNavVisible = true;
    //show and hide soccer ball and x button
    soccerBall.classList.add("hide-soccerball");
    xBtn.classList.remove("hide-x");
  } else {
    nav.classList.remove("showNavs");
    signInContainer.classList.remove("showButtons");
    mainNavVisible = false;
    //show and hide soccer ball and x button
    soccerBall.classList.remove("hide-soccerball");
    xBtn.classList.add("hide-x");
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
  soccerBall.classList.remove("hide-soccerball");
  xBtn.classList.add("hide-x");
}

signUpBtn.addEventListener("click", showSignUpModal);
closeSignUpModalBtn.addEventListener("click", hideSignUpModal);
