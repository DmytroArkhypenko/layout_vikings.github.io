$(function(){

  $('.menu_btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
});

$('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.heroes__slider-text',
  prevArrow: '<button class="slick-btn slick-prev"><img src="images/left.png" alt="prev"></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="images/right.png" alt="next"></button>'
});

$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true,
  arrows: false
});

});