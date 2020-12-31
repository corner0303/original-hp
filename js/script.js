$(function () {
  $('.hamburger_btn').click(function () {
    $(this).toggleClass('--active');
    $('.gnav').slideToggle();

    if ($('.hamburger_btn__text').text() == 'Close') {
      $('.hamburger_btn__text').text('Menu')
    } else {
      $('.hamburger_btn__text').text('Close')
    }
  });
});


//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $("#header").height();
  $("body").css("margin-top", height);//10pxだけ余裕をもたせる
});


$('.slider').slick({
  dots: true,
  slidesToShow: 3,
  initialSlide: 2,
  centerMode: true,
  autoplay: true,
  waitForAnimate: true,
  prevArrow: '<div class="prev"><i class="slider_arrow_icon prev_arrow fas fa-arrow-left"></i></div>',
  nextArrow: '<div class="next"><i class="slider_arrow_icon next_arrow fas fa-arrow-right"></i></div>',

  responsive: [
    {
      breakpoint: 1024, // 768~1023px以下のサイズに適用
      settings: {
        slidesToShow: 3,
        centerPadding: '50px',

      }
    }, {
      breakpoint: 768, // 480〜767px以下のサイズに適用
      settings: {
        slidesToShow: 2,
        centerPadding: '15px',

      }
    }, {
      breakpoint: 480, // 〜479px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        centerPadding: '15px',
        
      }
    }
  ]
});
