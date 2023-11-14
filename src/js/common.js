$(document).ready(function(){

  $.fn.dropdown = function () {
    return this.each(function () {
      var $header = $("header");
      var $gnb = $(this);
      var $menu = $gnb.find(".gnb > ul > li");
      var $depth1 = $gnb.find(".depth1");
      var $depth2 = $gnb.find(".depth2");
      $gnb
        .mouseenter(function () {
          gnbOn();
        })
        .mouseleave(function () {
          gnbOff();
        })
        .click(function(){
          gnbOn();
        })
      $gnb
        .find("a")
        .focusin(function () {
          gnbOn();
        })
        .focusout(function () {
          gnbOff();
        });
      function gnbOn() {
        $gnb.find($depth2).stop().animate({ height: "292" });
        $header.stop().animate({ height: "400" });	
        $header.addClass("on");
      }
      function gnbOff() {
        $gnb.find($depth2).stop().animate({ height: "0" });
        $header.stop().animate({ height: "80" });	
        $header.removeClass("on");
      }
    });
  };

  if($('body').hasClass('subPage')){
    $('#header').addClass('__w');
  }else{
    $('#header').removeClass('__w');
  }

  function dropdownMo(){
    $('.gnb .depth1').on('click',function(){
      //e.preventDefault();
      if($('.depth1').parent('li').hasClass('expend')){
        $('.depth1').parent('li').removeClass('expend')
      }else{
        $(this).parent('li').addClass('expend')
      }
    })
  }

  if(matchMedia("screen and (min-width: 769px)").matches){
    $(".gnb").dropdown();
  } else{
    dropdownMo();
    $('.btn-mo-menu-wrapper').click(function(){
      if($('#header').hasClass('__open')){
        $('#header').removeClass('__open');
        $('#header .gnb-wrap').removeClass('__open');
        $('html, body').css({'overflow': 'auto', 'height': '100%'});
        $('.gnb-wrap').off('scroll touchmove mousewheel');
      }else{
        $('#header').addClass('__open');
        $('#header .gnb-wrap').addClass('__open');
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('.gnb-wrap.__open').on('scroll touchmove mousewheel', function(event) { 
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
      }
    })

  }

  gsap.registerPlugin(ScrollTrigger);

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5; // 이벤트를 발생시킬 스크롤의 이동 범위
  var navbarHeight = $("header").outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

  function hasScrolled() {
    var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

    // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > navbarHeight){
      // 스크롤을 내렸을 때
      //$("header").slideUp("fast"); // header 숨기기
      $("header").removeClass("down"); // header 보이기
      $("header").addClass("up"); // header 보이기
    } else {
      // 스크롤을 올렸을 때
      if(st + $(window).height() < $(document).height()) {
        //$("header").slideDown("fast"); // header 보이기
        $("header").addClass("__w"); // header 보이기
        $("header").addClass("down"); // header 보이기
        $("header").removeClass("up"); // header 보이기
      }
    }

    lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
  }


  function selectHide() {
    $('.lang-select').removeClass('active');
  }
  var selectHideTimer = setTimeout(selectHide, 3000);
  $('.lang-select .current').on("click", function (e) {
    e.preventDefault();
    clearTimeout(selectHideTimer);
    if ($(this).parent('.lang-select').hasClass('active')) {
      $(this).parent('.lang-select').removeClass('active');
    } else {
      $('.lang-select').removeClass('active');
      $(this).parent('.lang-select').addClass('active');
    }
  });

  $('.lang-select').on("mouseleave", function (e) {
    selectHideTimer = setTimeout(selectHide, 2000);
  });

  $('.lang-select li a').on("click", function (e) {
    selectHide();
  });

  function modal(){
    $('.privacy-policy').hide();
    $('.email-notice').hide();
    $('.privacy').click(function(){
      $('.layer-dimm').addClass('open');
      $('.privacy-policy').show().addClass('open');
      $('.privacy-policy .modal').show()
      $('body').addClass('noScroll');
    })
    $('.email').click(function(){
      $('.layer-dimm').addClass('open');
      $('.email-notice').show().addClass('open');
      $('.email-notice .modal').show()
      $('body').addClass('noScroll');
    })
  }
  modal();

  function familySelectHide() {
    $('.family-site').removeClass('active');
  }
  var familySelect = setTimeout(familySelectHide, 3000);
  $('.family-select').on("click", function (e) {
    e.preventDefault();
    clearTimeout(familySelect);
    if ($('.family-site').hasClass('active')) {
      $('.family-site').removeClass('active');
    } else {
      $('.family-site').addClass('active');
    }
  });
  $('.family-list').on("mouseleave", function (e) {
    familySelect = setTimeout(familySelectHide, 2000);
  });


  window.addEventListener("resize", ScrollTrigger.update);

  $(".js-select2").select2({minimumResultsForSearch: -1});
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });

})