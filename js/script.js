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
  initialSlide: 1,
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
        initialSlide: 1,
      }
    }, {
      breakpoint: 768, // 480〜767px以下のサイズに適用
      settings: {
        slidesToShow: 2,
        centerPadding: '15px',
        initialSlide: 1,
      }
    }, {
      breakpoint: 480, // 〜479px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        centerPadding: '15px',
        initialSlide: 0,
      }
    }
  ]
});

$(function () {
  var appear = false;
  var pagetop = $('#to_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '20px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-100px', //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


//form

$(function () {
  //formの入力確認
  let $submit = $("#contact-btn");//送信ボタンに指定されたIDを定義
  let $checked = false;
  let $val = false;
  let $kana = false;
  function btn_submit() {
    if ($checked == "sa" && $val == true && $kana == true) {
      $submit.prop("disabled", false)
    } else {
      $submit.prop("disabled", true)
    }
  }
  $("#check_trigger").click(function () {
    if ($("#js_form input[type='checkbox']").attr('checked') == "checked") {
      $checked = "sa";
      console.log($checked)
      btn_submit()
    } else {
      $checked = "dd";
      console.log($checked)
      btn_submit()
    }
  })

  $(function () {
    //input要素のフォーカスを失ったタイミングで発生します。
    $('#js_form input[data-required="required0"]').blur(function () {
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheck($(this));
    });
    $('#js_form input[data-required="required1"]').blur(function () {
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheck($(this));
    });
    $('#js_form input[data-required="required3"]').blur(function () {
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheck($(this));
    });
    $('#js_form input[data-required="required4"]').blur(function () {
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheck($(this));
    });
    $('#js_form input[data-kana="katakana--last"]').blur(function () {
      //ひらがなを自動変換するイベントの呼び出し
      kanaChange($(this));
      //
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheckKana($(this));
    });
    $('#js_form input[data-kana="katakana--first"]').blur(function () {
      //ひらがなを自動変換するイベントの呼び出し
      kanaChange($(this));
      //
      //空値及びカナ以外の値が入っていないかチェックするバリデーション
      emptyCheckKana($(this));
    });

    kanaChange = function (ele) {
      var val = ele.val();
      //正規表現でひらがなを引数の値に置換
      var kana = val.replace(/[ぁ-ん]/g, function (s) {
        // ユニコード値でカナに変換
        ele.addClass("input_success")
        return String.fromCharCode(s.charCodeAt(0) + 0x60)
      });

      if (val.match(/[ぁ-ん]/g)) {
        $(ele).val(kana)
        ele.addClass("input_success")
      }

    };

    emptyCheckKana = function (ele) {
      let placeholder = ele.attr("placeholder")
      let val = ele.val();
      console.log(placeholder)
      if (val == "") {
        ele.addClass("input_error")
        $kana = false;
        ele.attr("placeholder", "入力されていません");
        ele.focusin(function () {
          ele.attr("placeholder", placeholder);
          ele.removeClass("input_error")
          console.log(placeholder)
        })
      }
      //カナ以外の値が入っていないる場合背景へCSSクラス適用し、テキストを追加
      else if (val.match(/[^ぁ-んァ-ン　\s]+/)) {
        ele.addClass("input_error")
        ele.attr("placeholder", "全角カナ以外が登録されています。");
        ele.val("")
        $kana = false;
        ele.focusin(function () {
          ele.attr("placeholder", placeholder);
          ele.removeClass("input_error")
          console.log(placeholder)
        })
      }

      else {
        $kana = true;
        ele.removeClass("input_error")
        ele.addClass("input_success")
      }
    };
    emptyCheck = function (ele) {
      let placeholder = ele.attr("placeholder")
      let val = ele.val();
      console.log(placeholder)
      if (val == "") {
        ele.addClass("input_error")
        $kana = false;
        ele.attr("placeholder", "入力されていません");
        ele.focusin(function () {
          ele.attr("placeholder", placeholder);
          ele.removeClass("input_error")
          console.log(placeholder)
        })
      }
      else {
        $kana = true;
        ele.removeClass("input_error")
        ele.addClass("input_success")
      }
    };
  });
$("#js_form input, #js_form textarea").on("change", function () {//value値が変更されたら、その時点で発動
  console.log($checked)

  if (
    $("#js_form input[data-required='required0']").val() !== "" &&//空白でない
    $("#js_form input[data-required='required1']").val() !== "" &&//空白でない
    $("#js_form input[data-required='required4']").val() !== "" &&//空白でない
    $("#js_form textarea[data-required='required5']").val() !== "" //空白でな
    //空白でない
  ) {//全てOKな場合
    //全て入力された時
    // $submit.addClass("-active")//submitに-activeクラス追加
    //disabledを消す
    $val = true;
    btn_submit()
  } else {
    //されていないとき
    // $submit.removeClass("-active")//submitに-activeクラス消去
    //$submit.prop("disabled", true)//disabledを付与
    $val = false;
    btn_submit()
  }

})

$('#check_trigger').click(function () {
  if ($('.form_item_check__input').attr('checked') === 'checked') {
    $('.form_item_check__input').attr('checked', false);
  } else 
  {
    $('.form_item_check__input').attr('checked', true);

  }
  console.log($('.form_item_check__input').attr('checked'));
})
})
