// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

  // ELEMENT SELECTORS

let navTop = document.getElementById("nav");
let sectionHero = document.querySelector(".container");
let sectionOne = document.querySelector(".section1");
let sectionTwo = document.querySelector(".section2");
let sectionThree = document.querySelector(".section3");
let sectionFour = document.querySelector(".section4");
let footer = document.querySelector(".footer");
let homepageContainer = document.querySelector(".container-homepage");
let messageContainer = document.querySelector(".message-container");
let swipeArea = document.querySelector(".swipe-area-container");
let chatArea = document.querySelector(".right-side-chat");

let landingPageElement = [navTop, sectionHero, sectionOne, sectionTwo, sectionThree, sectionFour, footer];
  
  // LANDING PAGE NAVIGATION

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (window.matchMedia('screen and (max-width: 768px)').matches){
//// WHEN SCROLLING
    }else{
      navTop.style.top = "0px";
      navTop.style.width = "100%";
      navTop.style.borderRadius = "0px";
    }
  } else {
    if (window.matchMedia('screen and (max-width: 768px)').matches){
//// ORIGINAL
    }else{
      navTop.style.top = "2em";
      navTop.style.width = "90%";
      navTop.style.borderRadius = "40px";
    }
  }
}

var count=0;
function opennav(){
  if(count==0){
    navTop.style.height="200px";
    document.getElementById("icon").style.color="#2D00F7";
    document.querySelector(".hamburger").style.display = "flex";
    count++;
  }else{
    navTop.style.height="79px";
    document.getElementById("icon").style.color="#FFF";
    document.querySelector(".hamburger").style.display = "none";
    count=0;
  }
}

window.addEventListener('resize', closenav);
function closenav(){
  if (window.matchMedia('screen and (min-width: 720px)').matches){
    document.querySelector(".hamburger").style.display = "none";
    navTop.style.height="79px";
    count=0;
  }
}



  // TOGGLE DISABLE CLASS

function disableLandingElements(){
  navTop.style.display = 'none';
  sectionThree.style.display = 'none';
  for (var i = 0; i < landingPageElement.length; i++) {
    landingPageElement[i].classList.add('disable');
  }
}

function enableLandingElements(){
  navTop.style.display = 'flex';
  sectionThree.style.display = 'flex';
  for (var i = 0; i < landingPageElement.length; i++) {
    landingPageElement[i].classList.remove('disable');
  }
}

function toggleHomePage(){
  homepageContainer.classList.toggle('disable');
}

function logout(){
  enableLandingElements();
  toggleHomePage();
}

// **************************************************************
//                    SIGN-IN & LOG-IN PAGE
// **************************************************************

let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let loginPageContainer = document.getElementById('login-page-container');
let loginPageBackground = document.getElementById('login-page-bg');
let returnToHomeBtn = document.querySelector('#login-page-bg .back-btn');

// *******************************
//     PANEL SWITCH
// *******************************

signUpButton.addEventListener('click', () =>
loginPageContainer.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
loginPageContainer.classList.remove('right-panel-active'));

// *******************************
//     OPEN SIGN-IN & LOG-IN PAGE
// *******************************

function openSignin(){
    loginPageContainer.classList.toggle('disable');
    loginPageBackground.classList.toggle('disable');
    returnToHomeBtn.classList.toggle('disable');
    loginPageBackground.style.display = "flex";
    disableLandingElements();
}

function openSignUp(){
  loginPageContainer.classList.toggle('disable');
  loginPageBackground.classList.toggle('disable');
  returnToHomeBtn.classList.toggle('disable');
  loginPageBackground.style.display = "flex";
  loginPageContainer.classList.add('right-panel-active');
  disableLandingElements();
}

// *******************************
//     BACK TO LANDING PAGE BTN
// *******************************
function backToLandingPage(){
  loginPageContainer.classList.toggle('disable');
  loginPageBackground.classList.toggle('disable');
  returnToHomeBtn.classList.toggle('disable');
  loginPageBackground.style.display = "none";
  loginPageContainer.classList.remove('right-panel-active');
  loginFailMessage.classList.add("disable");
  enableLandingElements();
}

// *******************************
//     LOG-IN TO HOME PAGE
// *******************************
let loginId = document.getElementById("login-id");
let loginPw = document.getElementById("login-pw");
let loginFailMessage = document.querySelector('.login-fail');
let signinToHomeBtn = document.getElementById("signin-auth-btn");

signinToHomeBtn.addEventListener('click', signin);

function signin(e) {
  e.preventDefault();
  if (loginId.value === "admin@wink" && loginPw.value === "wink1234"){
    loginFailMessage.classList.add("disable");
    loginPageContainer.classList.toggle('disable');
    loginPageBackground.classList.toggle('disable');
    returnToHomeBtn.classList.toggle('disable');
    loginPageBackground.style.display = "none";
    loginPageContainer.classList.remove('right-panel-active');
    toggleHomePage();
  } else {
    loginFailMessage.classList.remove("disable");
  }
}

// *******************************
//     ABOUT PAGE
// *******************************
let aboutPageContainer = document.getElementById('about-container');
let aboutPageBackground = document.getElementById('about-bg');
let aboutPageReturnBtn = document.getElementById('about-return-btn');

function openAbout(){
  aboutPageContainer.classList.toggle('disable');
  aboutPageBackground.classList.toggle('disable');
  aboutPageReturnBtn.classList.toggle('disable');
  disableLandingElements();
}

function backFromAboutPage(){
  aboutPageContainer.classList.toggle('disable');
  aboutPageBackground.classList.toggle('disable');
  aboutPageReturnBtn.classList.toggle('disable');
  enableLandingElements();
}

// *******************************
//     CHAT AREA IN HOME PAGE
// *******************************

document.querySelector('.chat-body[data-chat=person1]').classList.add('active-chat');
document.querySelector('.person[data-chat=person1]').classList.add('active');
document.querySelector('.chat-name').innerHTML = document.querySelector('.person-name').innerText;

let friends = {
    list: document.querySelector('ul.message-list'),
    all: document.querySelectorAll('.message-container .person'),
    name: ''
},
chat = {
    container: document.querySelector('.right-side-chat'),
    current: null,
    person: null,
    name: document.querySelector('.right-side-chat .chat-top .chat-name')
}

friends.all.forEach(f => {
    f.addEventListener('click', () => {
        f.classList.contains('active') || setAciveChat(f)
    })
});

function setAciveChat(f) {
    friends.list.querySelector('.active').classList.remove('active')
    f.classList.add('active')
    chat.current = chat.container.querySelector('.active-chat')
    chat.person = f.getAttribute('data-chat')
    chat.current.classList.remove('active-chat')
    chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
    friends.name = f.querySelector('.person-name').innerText
    chat.name.innerHTML = friends.name
}


function toggleChat(){
  if(count==0){
    swipeArea.style.display = 'none';
    chatArea.classList.toggle('disable');
    messageContainer.classList.toggle('disable');
    count++;
  }else{
    swipeArea.style.display = 'flex';
    chatArea.classList.toggle('disable');
    messageContainer.classList.toggle('disable');
    count=0;
  }
}
