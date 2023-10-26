$(document).ready(function () {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const mainAlpha = $(".alphabet");
  for (let index = 0; index < alphabet.length; index++) {
    $(mainAlpha).append(
      `<a href="#" class="alphabet-item">${alphabet[index]}</a>`
    );
  }
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  var latest = new Swiper(".latest_slide", {
    slidesPerView: "auto",
    effect: "fade",
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next.swiper_slid_btn",
      prevEl: ".swiper-button-prev.swiper_slid_btn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".search_btn").click(function () {
    $(".header_form").toggleClass("search_show");
    $(this).toggleClass("active");
    $(".search_btn i").toggleClass("ti-x");
    $("body").toggleClass("bar");
  });

  $(".menu_btn").click(function () {
    $(".nav_main").toggleClass("active");
    $("body").toggleClass("active");
    $(this).toggleClass("active");
    $(".menu_btn i").toggleClass("ti-x");
  });

  var swiper_thumb = new Swiper(".hero_slide_thumb", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    speed: 800,
  });

  var swiper = new Swiper(".hero_wrapper", {
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
      swiper: swiper_thumb,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next.hero_slide_btn",
      prevEl: ".swiper-button-prev.hero_slide_btn",
    },
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
 
  $(".drop_down_btn").click(function () {
    $(this).closest('.category_main_wrapper').find('.category_cards_main').slideToggle();
    $(this).toggleClass('rotate_btn');
});

});
