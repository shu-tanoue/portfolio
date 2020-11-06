$(function() {
  let px = 0;
  let ww = $(window).width();
  let flag1 = true;
  let flag_slide2 = true;
  let flag_slide3 = true;
  let flag_slide4 = true;
  let flag_scrolls = true;
  let sm = ww / 16;

  $(window).resize(function() {
    ww = $(window).width();
  });

  $(".outer-wrapper").scroll(function() {
    let x = $(this).scrollTop(); //どのくらいスクロールしているか取得
    let sx = x;
    x = x / 50; //移動距離を決定
    x = -x; //背景画像を左にずらす
    $(".bg").css("background-position", x + "px 0 ");
    if (x < -20) {
      $(".icon_finger").addClass("active");
    } else {
      $(".icon_finger").removeClass("active");
    }
    if (sx >= ww - sm && sx <= ww * 2 - sm && flag_slide2) {
      $(".two .dn").removeClass("dn");
      new WOW().init();
      flag_slide2 = false;
    } else if (sx >= ww * 2 - sm && sx <= ww * 3 - sm && flag_slide3) {
      $(".three .dn").removeClass("dn");
      new WOW().init();
      flag_slide3 = false;
    } else if (sx >= ww * 3 - sm && flag_slide4) {
      $(".four .dn").removeClass("dn");
      new WOW().init();
      flag_slide4 = false;
    }
    if (flag_scrolls) {
      let speed = 500; // ミリ秒
      if (sx >= sm && sx <= ww - sm && flag1) {
        //Slide1 to Slide2 or Slide2 to Slide1
        flag1 = false;
        let to_position = "";
        if (px == 0) {
          to_position = ww;
        } else if (px == ww) {
          to_position = 0;
        }
        $(".outer-wrapper")
          .stop()
          .animate(
            {
              scrollTop: to_position
            },
            speed,
            "swing",
            function() {
              flag1 = true;
              px = to_position;
            }
          );
      } else if (sx >= ww + sm && sx <= ww * 2 - sm && flag1) {
        //Slide2 to Slide3 or Slide3 to Slide2
        flag1 = false;
        let to_position = "";
        if (px == ww) {
          to_position = ww * 2;
        } else if (px == ww * 2) {
          to_position = ww;
        }
        $(".outer-wrapper")
          .stop()
          .animate(
            {
              scrollTop: to_position
            },
            speed,
            "swing",
            function() {
              flag1 = true;
              px = to_position;
            }
          );
      } else if (sx >= ww * 2 + sm && sx <= ww * 3 - sm && flag1) {
        //Slide3 to Slide4 or Slide4 to Slide3
        flag1 = false;
        let to_position = "";
        if (px == ww * 2) {
          to_position = ww * 3;
        } else if (px == ww * 3) {
          to_position = ww * 2;
        }
        $(".outer-wrapper")
          .stop()
          .animate(
            {
              scrollTop: to_position
            },
            speed,
            "swing",
            function() {
              flag1 = true;
              px = to_position;
            }
          );
      }
    }
  });

  ////// ページ内リンク //////
  // #で始まるアンカーをクリックした場合に処理
  $("a[href^='#']").click(function() {
    flag_scrolls = false;
    // スクロールの速度
    let speed = 400; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    switch (href) {
      case "#one":
        // スムーススクロール
        $(".outer-wrapper").animate(
          {
            scrollTop: 0
          },
          speed,
          "swing",
          function() {
            setTimeout(function() {
              flag_scrolls = true;
            }, 500);
          }
        );
        break;
      case "#two":
        // スムーススクロール
        $(".outer-wrapper").animate(
          {
            scrollTop: ww
          },
          speed,
          "swing",
          function() {
            setTimeout(function() {
              flag_scrolls = true;
            }, 500);
          }
        );
        break;
      case "#three":
        // スムーススクロール
        $(".outer-wrapper").animate(
          {
            scrollTop: ww * 2
          },
          speed,
          "swing",
          function() {
            setTimeout(function() {
              flag_scrolls = true;
            }, 500);
          }
        );
        break;
      case "#four":
        // スムーススクロール
        $(".outer-wrapper").animate(
          {
            scrollTop: ww * 3
          },
          speed,
          "swing",
          function() {
            setTimeout(function() {
              flag_scrolls = true;
            }, 500);
          }
        );
        break;
    }
  });
  $sendmail_flag = getParam("mailsend");
  if ($sendmail_flag == "true") {
    $(".contact-mailsend").css("display", "block");
    $(".outer-wrapper").scrollTop(ww * 3);
  }
});

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
