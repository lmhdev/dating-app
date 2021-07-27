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
let navFixed = document.getElementById("navbar");
let sectionHero = document.querySelector(".container");
let sectionOne = document.querySelector(".section1");
let sectionTwo = document.querySelector(".section2");
let sectionThree = document.querySelector(".section3");
let sectionFour = document.querySelector(".section4");
let footer = document.querySelector(".footer");
let homepageContainer = document.querySelector(".container-homepage");

let landingPageElement = [navTop, navFixed, sectionHero, sectionOne, sectionTwo, sectionThree, sectionFour, footer];
  
  // LANDING PAGE NAVIGATION

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    navFixed.style.top = "0";
    navTop.style.display = "none";
  }} else {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    navFixed.style.top = "-85px";
    navTop.style.display = "flex";
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

function openNavBar() {
  if(count==0){
    navFixed.style.height="200px";
    document.getElementById("icon-navbar").style.color="#2D00F7";
    document.querySelectorAll(".hamburger")[1].style.display = "flex";
    count++;
  }else{
    navFixed.style.height="75px";
    document.getElementById("icon-navbar").style.color="#FFF";
    document.querySelectorAll(".hamburger")[1].style.display = "none";
    count=0;
  }
}

window.addEventListener('resize', closeNavBar);
function closeNavBar(){
  if (window.matchMedia('screen and (min-width: 720px)').matches){
    document.querySelectorAll(".hamburger")[1].style.display = "none";
    navFixed.style.height="75px";
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

function login(){
  disableLandingElements();
  toggleHomePage();
}

function logout(){
  enableLandingElements();
  toggleHomePage();
}