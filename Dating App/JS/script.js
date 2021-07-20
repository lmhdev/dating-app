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
  
  

  
  //NAVIGATION

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    document.getElementById("navbar").style.top = "0";
    document.getElementById("nav").style.display = "none";
  }} else {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    document.getElementById("navbar").style.top = "-85px";
    document.getElementById("nav").style.display = "flex";
    }
  }
}

var count=0;
function opennav(){
  if(count==0){
    document.getElementById("nav").style.height="200px";
    document.getElementById("icon").style.color="#2D00F7";
    document.querySelector(".hamburger").style.display = "flex";
    count++;
  }else{
    document.getElementById("nav").style.height="79px";
    document.getElementById("icon").style.color="#FFF";
    document.querySelector(".hamburger").style.display = "none";
    count=0;
  }
}

window.addEventListener('resize', closenav);
function closenav(){
  if (window.matchMedia('screen and (min-width: 720px)').matches){
    document.querySelector(".hamburger").style.display = "none";
    document.getElementById("nav").style.height="79px";
    count=0;
  }
}

function openNavBar() {
  if(count==0){
    document.getElementById("navbar").style.height="200px";
    document.getElementById("icon-navbar").style.color="#2D00F7";
    document.querySelectorAll(".hamburger")[1].style.display = "flex";
    count++;
  }else{
    document.getElementById("navbar").style.height="75px";
    document.getElementById("icon-navbar").style.color="#FFF";
    document.querySelectorAll(".hamburger")[1].style.display = "none";
    count=0;
  }
}

window.addEventListener('resize', closeNavBar);
function closeNavBar(){
  if (window.matchMedia('screen and (min-width: 720px)').matches){
    document.querySelectorAll(".hamburger")[1].style.display = "none";
    document.getElementById("navbar").style.height="75px";
    count=0;
  }
}