export const sliderSettings =  {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      750: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1100: {
        slidesPerView:4,
        spaceBetween:50
      }
    }
  }