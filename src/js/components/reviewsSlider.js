import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper = new Swiper(".reviews-slider", {
  wrapperClass: "reviews-slider__list",
  slideClass: "reviews-slider__item",
  slideActiveClass: "reviews-slider__item--active",
  slidePrevClass: "reviews-slider__item--prev",
  slideNextClass: "reviews-slider__item--next",
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 81,
  navigation: {
    nextEl: ".reviews-slider .slider-btns__btn--next",
    prevEl: ".reviews-slider .slider-btns__btn--prev",
  },
  loop: true,
});
