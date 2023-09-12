$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);


  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      _startPosition = window.innerHeight + 0 + "px";
      var $subVisual = document.querySelector('.subVisual')
      gsap.timeline({
        scrollTrigger: {
          trigger: $subVisual,
          start: "top+=" + _startPosition + " 99.9%",
          end: "top+=200% bottom",
          pin: true,
          onEnter: function () {
            $(".subVisual .image-wrap").addClass("on");
            $('.subVisual .title-wrap').addClass('on');
          },
          onLeaveBack: function () {
            $(".subVisual .image-wrap").removeClass("on");
            $('.subVisual .title-wrap').removeClass('on');
          },
          onEnterBack: function () {
            $(".subVisual .image-wrap").addClass("on");
            $('.subVisual .title-wrap').addClass('on');
          },
        }
      });

      
    }
    
  });

  var newsSwiper = new Swiper(".newsSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:  false,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function addActive(){
    $('.activeCon').click(function(){
      event.preventDefault();
      $('.activeCon').removeClass('active')
      $(this).addClass('active');
    })
  }
  addActive();

  function modalView(){
    $('.board li').click(function(){
      $('.layer-dimm').addClass('open');
      $('.board-view').show().addClass('open');
      $('body').addClass('noScroll');
    })
    $('.privacy').click(function(){
      $('.layer-dimm').addClass('open');
      $('.privacy-policy').show().addClass('open');
      $('body').addClass('noScroll');
    })
  }
  modalView();
  
  //voc 개인정보처리방침
  $('.privacy-agree-box .btn-toggle').click(function(){
    $(this).toggleClass('on');
    $('.privacy-agree').toggleClass('on');
  });



  $(window).on('resize', function () {
    windW = $(window).width();
    var _bgSelector = $('.txt-motion');
    if (_bgSelector.length > 0) {
        var _visualBg = _bgSelector.data('bg');
        _bgSelector.css({ "background-image": "url(" + _visualBg + ")" });
    }
  })

  //모바일 툴바 높이 제어
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  window.addEventListener('resize', function () {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
  });

  gsap.registerPlugin(ScrollTrigger);


  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      ScrollTrigger.create({
        trigger: ".txt-motion",
        pin: ".txt-motion",
        start: "top top",
        end: "+=2500",
      });
    
      var tl = new gsap.timeline();

      tl.to(".txt-motion .title-wrap", {
        y: 0,
        color: "#ffffff",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".txt-motion",
          start: "top top",
          end: "+=1000",
          scrub: 0.7,
        }
      });


      tl.to(".txt-motion .sub-title", {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".txt-motion .title-wrap",
          start: "top top",
          end: "+=1000",
          scrub: 0.7,
        }
      });

      //배경 커짐
      tl.to('.txt-motion .img-wrap', {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".txt-motion .img-wrap",
          start: "top top",
          end: "+=3000",
          scrub: 0.7,
        }
      });

      
      tl.to(".highlight",{
        color: "#ffffff",
        stagger: 1,
        scrollTrigger: {
          trigger: ".txt-motion .sub-title",
          start: 'top top',
          end: '+=1000',
          scrub: 3,
        }
      })
    },

    "(max-width: 767px)": function () {


    },
  });



  var $swiperSelector = $('.project-slide');

  $swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    // var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 99;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 1;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 1;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;

    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        1085: {
          slidesPerView: slidesTablet
        },
        768: {
          slidesPerView: slidesMobile
        }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return + number;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // dragSize: dragSize
      },

    });
  });


  //레이어팝업 open 상태 function 만들기
  function layer_open(no){
    $(".world-layer[layer="+no+"]").addClass("open");
    $(".layer-dimm").addClass("open");
    $('body').addClass('noScroll');
  };
  //레이어팝업 close 상태 function 만들기
  function layer_close(){
    $(".world-layer, .layer-dimm").removeClass("open");
  };
  //링크 클릭시 해당 레이어팝업 호출
  $(".btn_layer").click(function () {
    var no = $(this).attr("layer");
    layer_open(no);
  });
  //닫기 버튼 클릭시 레이어 닫기
  $(".close-btn").click(function () {
    layer_close();
  });


  const cont = gsap.utils.toArray('.cont')
  gsap.set(cont,{y: '25%', opacity: 0})
  cont.forEach(cont => {
    gsap.to(cont,{
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: cont,
        start: 'top 70%',
        toggleActions:"restart none none reverse"
      }
    })
  })


})


  // document.addEventListener("DOMContentLoaded", function () {
  //   // 'i' 변수가 명시되지 않았으므로 현재 문서를 기준으로 수정합니다.
  //     const i = document.querySelector('.vision');
  
  //     const e = i.querySelector(".challenge"),
  //         n = e.querySelector(".ment"),
  //         r = [].slice.call(n.querySelectorAll("span")),
  //         s = e.querySelector(".ment.mobile"),
  //         a = [].slice.call(s.querySelectorAll("span"));
  
  //     let o;
  //     const areaHeight = window.innerHeight || document.documentElement.clientHeight;  // areaHeight를 정의합니다.
  
  //     const l = gsap.timeline({  
  //         paused: true
  //     });
  
  //     r.forEach((c, h) => {
  //         if (h > 0) {
  //             l.to([c, a[h]], {
  //             opacity: 1,
  //             duration: 1,
  //             ease: "power2.inOut"
  //             }, "-=1");
  //         }
  
  //         if (h !== r.length - 1) {
  //             l.to([c, a[h]], {
  //             opacity: 0.2,
  //             duration: 1,
  //             delay: h > 0 ? 0.1 : 0,
  //             ease: "power2.inOut"
  //             });
  //         }
  //     });
  
  //     const onScroll = () => {
  //         const h = e.getBoundingClientRect();
  //         if (h.top < areaHeight && h.bottom > 0) {
  //             const d = -h.top / o;
  //             l.progress(d);
  //         }
  //     };
  
  //     const onResize = () => {
  //         o = e.offsetHeight - areaHeight;
  //         areaHeight * 0.75 - (areaHeight * 0.45 - n.offsetHeight);
  //     };
  
  //     // 'on'이라는 함수가 제공되지 않았으므로 표준 이벤트 리스너를 사용하여 이벤트를 연결합니다.
  //     window.addEventListener("scroll", onScroll);
  //     window.addEventListener("resize", onResize);
  
  //     // 초기화
  //     onResize();
  // });