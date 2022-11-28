$(function(){

  $('.fb__slider').slick({
     arrows: true,
     dots: true
  });

  $('.menu__btn').on('click', function(){
     $('.menu').toggleClass('menu--active');
  });

  $('.pr__menu-btn').on('click', function(){
   $('.product__menu').toggleClass('product__menu--active');
   });

   $('.pr__menu-btn').on('click', function(){
   $('.pr__menu-list').toggleClass('pr__menu-list--active');
   });

});