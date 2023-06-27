'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

//////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*===================================*/

// Selecting elements

const header = document.querySelector('.header');

const allSection = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

// Creating and inserting elements
// insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookied for improved functionality and analytics.";
message.innerHTML =
  `We use cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Go it!</button>`;

// header.prepend(message);
header.append(message);

document
  .querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
  });

  // Style

  message.style.backgroundColor = "#37383d";
  message.style.width = '120%';
  message.style.padding = '10px 0';

const logo = document.querySelector('.nav__logo');

// Data attributes
console.log(logo.dataset.harmony)

/*===================================*/
/*== Implementing Smooth Scrolling ==*/
/*===================================*/

btnScrollTo.addEventListener("click", function(e) {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth'});
});

/*===================================*/
/*===== Page navigation  ============*/
/*===================================*/

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
    
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });

// 1. Add event listener to commmon parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    
    const id = e.target.getAttribute('href');
    
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

/* ==================================================== */
// Tabbed 

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);


  if(!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})

// Menu fade animation

const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// nav.addEventListener('mouseover', function(e){
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e){
//   handleHover(e, 1);
// });

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));



