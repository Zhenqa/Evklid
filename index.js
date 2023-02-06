
///слайдер//
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





//табы

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



//бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
});


//лупа

const lupa = document.querySelector('.header__lupa');

const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupInput = popup.querySelector('.popup__input');
const buttonClosePopup = document.querySelector('.popup__close');

function openPopup(e) {
  e.preventDefault();
  popup.classList.add('popup_opened');
};

function closePopup(e) {
  e.preventDefault();
  popup.classList.remove('popup_opened');
}

lupa.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);


//аккардион
new Accordion('.accordion-container');



