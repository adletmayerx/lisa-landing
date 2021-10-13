"use strict"
const sliderSelectors = {
  slider: '.slider',
  prevButton: '.slider__button_type_prev',
  firstSlide: '#slider__button-1',
  secondSlide: '#slider__button-2',
  thirdSlide: '#slider__button-3',
  fourthSlide: '#slider__button-4',
  nextButton: '.slider__button_type_next',
  buttonActiveClass: 'slider__button_type_active',
  buttonActive: '.slider__button_type_active',
  buttonSlideSelect: '.slider__button_type_select',
  buttonSlideSelectClass: 'slider__button_type_select'
}

const image = '.individual-shoots__image_size_big';

const firstSliderCardsSizeBig = [
{name: 'girl with crossed hands', url: './images/individual-shoots__image_size_big-1.png'},
{name: 'girl with glasses', url: './images/individual-shoots__image_size_big-2.png'},
{name: 'softboy', url: './images/individual-shoots__image_size_big-3.png'},
{name: 'another softboy', url: './images/individual-shoots__image_size_big-4.png'}
];

class Slider {
  constructor({slider, prevButton, firstSlide, secondSlide, thirdSlide, fourthSlide, nextButton, buttonActiveClass, buttonActive, buttonSlideSelect, buttonSlideSelectClass}, cards, image) {
    this.slider = document.querySelector(slider);
    this.prevButton = this.slider.querySelector(prevButton);
    this.nextButton = this.slider.querySelector(nextButton);
    this.firstSlide = this.slider.querySelector(firstSlide);
    this.secondSlide = this.slider.querySelector(secondSlide);
    this.thirdSlide = this.slider.querySelector(thirdSlide);
    this.fourthSlide = this.slider.querySelector(fourthSlide);
    this.buttonActiveClass = buttonActiveClass;
    this.buttonActive = buttonActive;
    this.slideSelectButtonsList = Array.from(this.slider.querySelectorAll(buttonSlideSelect));
    this.buttonSlideSelectClass = buttonSlideSelectClass;

    this.cards = cards;

    this.image = document.querySelector(image);

    this.slideCounter = 0;

    this._nextSlide = this._nextSlide.bind(this);
    this._prevSlide = this._prevSlide.bind(this);

  }

  _setSlide(num) {
    this.image.src = this.cards[num].url;
    this.image.alt = this.cards[num].name;
  }

  _nextSlide() {
    this.slideCounter++;
    if (this.slideCounter === this.cards.length) {
      this.slideCounter = 0;
    }
    this.image.src = this.cards[this.slideCounter].url;
    this.image.alt = this.cards[this.slideCounter].name;

    let activeSlideButton = this.slider.querySelector(this.buttonActive);
    const indexOfActiveSlideButton = this.slideSelectButtonsList.indexOf(activeSlideButton);
    let nextSlideButton;

    activeSlideButton.classList.remove(this.buttonActiveClass);

    if (indexOfActiveSlideButton < (this.slideSelectButtonsList.length - 1)) {
      nextSlideButton = this.slideSelectButtonsList[indexOfActiveSlideButton + 1];
    } else {
      nextSlideButton = this.slideSelectButtonsList[0];
    }

    nextSlideButton.classList.add(this.buttonActiveClass);
  }

  _prevSlide() {
    this.slideCounter--;
    if (this.slideCounter === -1) {
      this.slideCounter = this.cards.length - 1;
    }
    this.image.src = this.cards[this.slideCounter].url;
    this.image.alt = this.cards[this.slideCounter].name;

    let activeSlideButton = this.slider.querySelector(this.buttonActive);
    const indexOfActiveSlideButton = this.slideSelectButtonsList.indexOf(activeSlideButton);
    let prevSlideButton;

    activeSlideButton.classList.remove(this.buttonActiveClass);

    if (indexOfActiveSlideButton > 0) {
      prevSlideButton = this.slideSelectButtonsList[indexOfActiveSlideButton - 1];
    } else {
      prevSlideButton = this.slideSelectButtonsList[this.slideSelectButtonsList.length - 1];
    }

    prevSlideButton.classList.add(this.buttonActiveClass);
  }

  setEventListeners() {
    this.prevButton.addEventListener('click', this._prevSlide);

    this.nextButton.addEventListener('click', this._nextSlide);

    this.firstSlide.addEventListener('click', () => {
      this.slideCounter = 0;
      this._setSlide(this.slideCounter);
      this.slider.querySelector(this.buttonActive).classList.remove(this.buttonActiveClass);
      this.firstSlide.classList.add(this.buttonActiveClass);
    });

    this.secondSlide.addEventListener('click', () => {
      this.slideCounter = 1;
      this._setSlide(this.slideCounter);
      this.slider.querySelector(this.buttonActive).classList.remove(this.buttonActiveClass);
      this.secondSlide.classList.add(this.buttonActiveClass);
    });

    this.thirdSlide.addEventListener('click', () => {
      this.slideCounter = 2;
      this._setSlide(this.slideCounter);
      this.slider.querySelector(this.buttonActive).classList.remove(this.buttonActiveClass);
      this.thirdSlide.classList.add(this.buttonActiveClass);
    });

    this.fourthSlide.addEventListener('click', () => {
      this.slideCounter = 3
      this._setSlide(this.slideCounter);
      this.slider.querySelector(this.buttonActive).classList.remove(this.buttonActiveClass);
      this.fourthSlide.classList.add(this.buttonActiveClass);
    });
  }
 }

 const slider = new Slider(sliderSelectors, firstSliderCardsSizeBig, image);

 slider.setEventListeners();
