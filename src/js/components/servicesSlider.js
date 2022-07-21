import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper = new Swiper(".services-slider", {
  wrapperClass: "services-slider__list",
  slideClass: "services-slider__item",
  slideActiveClass: "services-slider__item--active",
  slidePrevClass: "services-slider__item--prev",
  slideNextClass: "services-slider__item--next",
  slidesPerView: 3,
  spaceBetween: 48,
  navigation: {
    nextEl: ".services-slider .slider-btns__btn--next",
    prevEl: ".services-slider .slider-btns__btn--prev",
  },
  loop: true,
});
