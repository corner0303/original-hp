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


//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $("#header").height();
  $("body").css("margin-top", height);//10pxだけ余裕をもたせる
});