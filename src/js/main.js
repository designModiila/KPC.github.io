$(document).ready(function(){

  $('.privacy-policy').load('../html/customer/privacy-policy.html')
  $('.email-notice').load('../html/customer/email-notice.html')


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


  // var showAnim = gsap.from('#header', { 
  //   yPercent: -100,
  //   paused: true,
  //   duration: 0.2
  // }).progress(1);

  // ScrollTrigger.create({
  //   start: "top +=50px",
  //   end: 99999,
  //   onUpdate: (self) => {
  //     self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //   },
  //   toggleClass: {className: 'header--scrolled', targets: '.header'}
  // });

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



  var interleaveOffset = 0.5;
  var numSwiper = new Swiper("#mainVisual.bg-swiper-container", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    //autoplay: false,
    pagination: {
      el: '#mainVisual .pagination-text',
      clickable: true,
    }
  });

  var bgSwiper = new Swiper("#mainVisual.bg-swiper-container", {
    loop: true,
    parallax: true,
    pagination: {
      el: '#mainVisual .pagination-num',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: "#mainVisual .swiper-button-next",
      prevEl: "#mainVisual .swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".video-wrap").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },

      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".video-wrap").style.transition =
            speed + "ms";
        }
      }
    }
  });

  numSwiper.controller.control = bgSwiper;
  bgSwiper.controller.control = numSwiper;




  const cont = gsap.utils.toArray('.cont')
  gsap.set(cont,{y: '25%', opacity: 0})
  cont.forEach(cont => {
    gsap.to(cont,{
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cont,
        start: 'top 70%',
        toggleActions:"restart none none reverse"
      }
    })
  })


  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {

      
  const elmHeight = document.querySelector('.flow-box-wrap').offsetHeight;
  gsap.to(".leftSec", {
    scrollTrigger: {
      trigger: ".flow-box-wrap",
      scrub: true,
      pin: ".main .section03",
      start: 'top top',
      //end: elmHeight + "bottom",
      end: `+=${window.innerHeight * 3}`,
      //end: 'bottom center',
      //markers: true,
    },
    yPercent: -120,
    ease: 'none',
  })

      const contD = document.querySelectorAll(".contD");
      gsap.set(".contD > div",{y: "25%", opacity: 0})
      contD.forEach(contD => {
        const blockTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: contD,
            start:"top 70%",
            toggleActions:"restart none none reverse"
          }
        })
        .to(contD.querySelectorAll(".contD > div"), {
          autoAlpha:1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.3
        })

      });

    },

    "(max-width: 767px)": function () {

      const contD = gsap.utils.toArray('.contD')
      gsap.set(contD,{y: '25%', opacity: 0})
      contD.forEach(contD => {
        gsap.to(contD,{
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: contD,
            start: 'top 70%',
            toggleActions:"restart none none reverse"
          }
        })
      })
    }
  });

  function modal(){
    $('.privacy-policy').hide();
    $('.email-notice').hide();
    $('.privacy').click(function(){
      $('.layer-dimm').addClass('open');
      $('.privacy-policy').show().addClass('open');
      $('body').addClass('noScroll');
    })
    $('.email').click(function(){
      $('.layer-dimm').addClass('open');
      $('.email-notice').show().addClass('open');
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

    ScrollTrigger.matchMedia({

      "(min-width: 768px)": function () {

        gsap.set(".footer-inner", { yPercent: -50 });
        const uncover = gsap.timeline({ paused: true });
        uncover.to(".footer-inner", { yPercent: 0, ease: "none" });
        ScrollTrigger.create({
          trigger: ".lastSec",
          start: "bottom +=98%",
          end: "+=30%",
          animation: uncover,
          scrub: true,
          //markers: true
        });
        ScrollTrigger.refresh();

      }

    });



    window.addEventListener("resize", ScrollTrigger.update);
    ScrollTrigger.refresh();
});