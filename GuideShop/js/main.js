$(function(){

    $('.menu__burger').on('click', function(){
       $('.menu').toggleClass('menu--active');
       $('.menu__burger').toggleClass('menu--active');
       $('body').toggleClass('lock');  // block prakrutki pry adchynenym menu
    });

   });

