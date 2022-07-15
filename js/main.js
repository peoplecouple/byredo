$(function () {
  $('.best_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
  })

  $('.best_arrows i:nth-child(1)').on('click', function () {
    $('.best_slider').slick('slickPrev')
  })

  $('.best_arrows i:nth-child(2)').on('click', function () {
    $('.best_slider').slick('slickNext')
  })


  $('.best_slider').on('init afterChange', function (e, s, c) {
    console.log(c)
    if (c == 0) {
      $('.xi-angle-left').addClass('on')
      $('.xi-angle-right').removeClass('on')
    } else if (c == 3) {
      $('.xi-angle-right').addClass('on').siblings().removeClass('on')
    }
    //내가 했던 is hasClass 이 문법은 한번 실행하고 만 것이었다.
    //매 이벤트마다 걸려야하니 afterChange를 써야한다!
  })

  $(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 2; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 0); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

    function hasScrolled() {
      var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

      // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      if (st > lastScrollTop && st > navbarHeight) {
        // 스크롤을 내렸을 때
        $("header").hide(); // header 숨기기
      } else {
        // 스크롤을 올렸을 때
        if (st + $(window).height() < $(document).height()) {
          $("header").css("background", "#000");
          $("header h1").css("line-height", "60px");
          $("header h1").css("filter", "invert()");
          $("header .gnb").css("line-height", "20px");
          $("header .gnb").css("color", "#fff");
          $("header .gnb").css("font-weight", "300");
          $("header img").css("width", "150px");

          $("header").show(); // header 보이기
        }
        if (st <= navbarHeight + $(".main_visaul").outerHeight()) {
          $("header h1").css("line-height", "80px");
          $("header h1").css("filter", "none");
          $("header .gnb").css("color", "#000");
          $("header .gnb").css("line-height", "40px");
          $("header .gnb").css("font-weight", "400");
          $("header img").css("width", "200px");
        }
      }


      lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
    }
  })



})