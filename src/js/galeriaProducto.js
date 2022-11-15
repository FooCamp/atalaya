// Import Swiper JS - Carousel library
import { Swiper } from 'swiper/bundle'

export function galeria() {
  new Swiper('.swiper', {
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}
