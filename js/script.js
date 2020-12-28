$(function() {
  $('.hamburger_btn').click(function() {
      $(this).toggleClass('--active');
      $('.gnav').slideToggle();
      
      if($('.hamburger_btn__text').text() == 'Close'){
        $('.hamburger_btn__text').text('Menu')
      }else{
        $('.hamburger_btn__text').text('Close')
      }
  });
});