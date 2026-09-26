/***************************************************
==================== JS INDEX ======================
****************************************************

01. Brand Js
02. Testimonial Js
03. Service Js
04. Marquee Js
05. Testimonial Three Js

****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Brand Js
  if ($(".brand-active").length && typeof Swiper !== "undefined") {
    new Swiper(".brand-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 2500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 02. Testimonial Js
  if ($(".testimonial-active").length && typeof Swiper !== "undefined") {
    new Swiper(".testimonial-active", {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1500,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
    });
  }

  ////////////////////////////////////////////////////
  // 03. Service Js
  if ($(".service-active").length && typeof Swiper !== "undefined") {
    new Swiper(".service-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: "#paginations",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `[${current}/${total}]`;
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // 04. Marquee Js
  if ($(".marquee_left").length && typeof $.fn.marquee === "function") {
    $(".marquee_left").marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      direction: $("html").attr("dir") === "rtl" ? "right" : "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
      loop: -1,
    });
  }

  ////////////////////////////////////////////////////
  // 05. Testimonial Three Js
  if ($(".testimonial-three-active").length && typeof Swiper !== "undefined") {
    new Swiper(".testimonial-three-active", {
      slidesPerView: 2,
      spaceBetween: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1200,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
    });
  }
})(jQuery);
