////HOME PAGE NAVBAR////

let btnHomeBurger = document.querySelector("#nav-home-hamburger");
let navBarHome = document.querySelector(".nav-home");
let btnSearchHome = document.querySelector(".fa-search");

btnHomeBurger.onclick = function() {
  navBarHome.classList.toggle("active");
};
btnSearchHome.onclick = function() {
  navBarHome.classList.toggle("active");
};




////PROFILE INFO////

class Profile {
  constructor(name, age, title, photos){
    this.name = name;
    this.age = age;
    this.title = title;
    this.photos = photos;
  }
}

const profileData = {
  allnames: ["Alice", "Jennifer", "Sarah", "Alexandra", "Bri", "Dana", "Dolly", "Felicia", "Jade", "Kelly", "Leah", "Megan", "Miki", "Rachel", "Sam"],
  allage: [20, 24, 26, 22, 18, 21, 25, 27, 26, 23, 25, 23, 19, 23, 19],
  alltitles: ["Nurse", "Receptionist", "Human Resource", "Account Manager", "Veterinarian", "Student", "Recruiter", "Yoga Instructor", "Store Manager", "Insurance Agent", "Marketing Manager", "Journalist", "Project Coordinator", "Accountant", "Student"],
  allphotos: [
    ["Img\\Match Profile\\Cards\\Alice1.jpg", "Img\\Match Profile\\Cards\\Alice2.jpg", "Img\\Match Profile\\Cards\\Alice3.jpg", "Img\\Match Profile\\Cards\\Alice4.jpg"],

    ["Img\\Match Profile\\Cards\\Jennifer1.jpg", "Img\\Match Profile\\Cards\\Jennifer2.jpg", "Img\\Match Profile\\Cards\\Jennifer3.jpg", "Img\\Match Profile\\Cards\\Jennifer4.jpg"],

    ["Img\\Match Profile\\Cards\\Sarah1.jpg", "Img\\Match Profile\\Cards\\Sarah2.jpg", "Img\\Match Profile\\Cards\\Sarah3.jpg", "Img\\Match Profile\\Cards\\Sarah4.jpg"],

    ["Img\\Match Profile\\Cards\\Alex1.jpg", "Img\Match Profile\Cards\Alex2.jpg", "Img\\Match Profile\\Cards\\Alex3.jpg", "Img\\Match Profile\\Cards\\Alex4.jpg"],

    ["Img\\Match Profile\\Cards\\Bri1.jpg", "Img\\Match Profile\\Cards\\Bri2.jpg", "Img\\Match Profile\\Cards\\Bri3.jpg", "Img\\Match Profile\\Cards\\Bri4.jpg"],

    ["Img\\Match Profile\\Cards\\Dana1.jpg", "Img\\Match Profile\\Cards\\Dana2.jpg", "Img\\Match Profile\\Cards\\Dana3.jpg", "Img\\Match Profile\\Cards\\Dana4.jpg"],

    ["Img\\Match Profile\\Cards\\Dolly1.jpg", "Img\\Match Profile\\Cards\\Dolly2.jpg", "Img\\Match Profile\\Cards\\Dolly3.jpg", "Img\\Match Profile\\Cards\\Dolly4.jpg"],

    ["Img\\Match Profile\\Cards\\Felicia1.jpg", "Img\\Match Profile\\Cards\\Felicia2.jpg", "Img\\Match Profile\\Cards\\Felicia3.jpg", "Img\\Match Profile\\Cards\\Felicia4.jpg"],

    ["Img\\Match Profile\\Cards\\Jade1.jpg", "Img\\Match Profile\\Cards\\Jade2.jpg", "Img\\Match Profile\\Cards\\Jade3.jpg", "Img\\Match Profile\\Cards\\Jade4.jpg"],

    ["Img\\Match Profile\\Cards\\Kelly1.jpg", "Img\\Match Profile\\Cards\\Kelly2.jpg", "Img\\Match Profile\\Cards\\Kelly3.jpg", "Img\\Match Profile\\Cards\\Kelly4.jpg"],

    ["Img\\Match Profile\\Cards\\Leah1.jpg", "Img\\Match Profile\\Cards\\Leah2.jpg", "Img\\Match Profile\\Cards\\Leah3.jpg", "Img\\Match Profile\\Cards\\Leah4.jpg"],

    ["Img\\Match Profile\\Cards\\Megan1.jpg", "Img\\Match Profile\\Cards\\Megan2.jpg", "Img\\Match Profile\\Cards\\Megan3.jpg", "Img\\Match Profile\\Cards\\Megan4.jpg"],

    ["Img\\Match Profile\\Cards\\Miki1.jpg", "Img\\Match Profile\\Cards\\Miki2.jpg", "Img\\Match Profile\\Cards\\Miki3.jpg", "Img\\Match Profile\\Cards\\Miki4.jpg"],

    ["Img\\Match Profile\\Cards\\Rachel1.jpg", "Img\\Match Profile\\Cards\\Rachel2.jpg", "Img\\Match Profile\\Cards\\Rachel3.jpg", "Img\\Match Profile\\Cards\\Rachel4.jpg"],

    ["Img\\Match Profile\\Cards\\Sam1.jpg", "Img\\Match Profile\\Cards\\Sam2.jpg", "Img\\Match Profile\\Cards\\Sam3.jpg", "Img\\Match Profile\\Cards\\Sam4.jpg"]
  ]
};

let cardsContainer = document.querySelector(".swipe-cards-stack");
// let listedProfile = [];
function addAllCards() {
  for (var i = 3; i < profileData.allnames.length; i++){
    let newProfile = new Profile(profileData.allnames[i],
                                profileData.allage[i],
                                profileData.alltitles[i],
                                profileData.allphotos[i][0]);
    // listedProfile.push(newProfile);
    let newProfileCard = document.createElement('div');
    newProfileCard.classList.add('swipe-card');
    cardsContainer.appendChild(newProfileCard);
    newProfileCard.innerHTML = `<img src="${newProfile.photos}" alt="">
                                <div class="name-wrapper">
                                    <div class="card-name">${newProfile.name}, ${newProfile.age}</div>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="card-title">${newProfile.title}</div>`
  }
}

addAllCards();





////HOME PAGE SWIPING AREA////


let swipeAreaContainer = document.querySelector('.swipe-area-container');
let allCards = document.querySelectorAll('.swipe-card');
let nope = document.getElementById('nope');
let love = document.getElementById('love');

function initCards(card, index) {
  let newCards = document.querySelectorAll('.swipe-card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  swipeAreaContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  let hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    swipeAreaContainer.classList.toggle('swipe_love', event.deltaX > 0);
    swipeAreaContainer.classList.toggle('swipe_nope', event.deltaX < 0);

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    swipeAreaContainer.classList.remove('swipe_love');
    swipeAreaContainer.classList.remove('swipe_nope');

    let moveOutWidth = document.body.clientWidth;
    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      let endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    let cards = document.querySelectorAll('.swipe-card:not(.removed)');
    let moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    let card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

let nopeListener = createButtonListener(false);
let loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);



