$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);


  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {

      const elmHeight = document.querySelectorAll('.flow-box-wrap').offsetHeight;
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

    },

    "(max-width: 767px)": function () {

    }
  });


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
      gsap.from(".subVisual .title > p",{autoAlpha: 0, y: '25%', duration: 0.3, stagger: 0.3, delay: 0.1, ease: "power1.inOut"})
      
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


  
  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      var businessDiagram = gsap.timeline({
        scrollTrigger:{
          trigger:".business02 .section01",
          start:"top 10%",
          pin: true,
          // scrub: 3,
          // end: "bottom +30%"
          //end: "+=2500",
          //toggleActions:"restart none none reset"
        }
      })
      .from(".circle",{autoAlpha: 0, stagger: 0.2})
      .from(".diagram-bg",{autoAlpha: 0})
    }

  });

  $(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
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

  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      var diagramAni2 = gsap.timeline({
        scrollTrigger:{
          trigger:".esg01 .section01",
          start:"top 10%",
          pin: true,
          scrub: 3,
          end: "bottom +30%"
          //end: "+=2500",
          //toggleActions:"restart none none reset"
        }
      })
      // .from(".esg01 .circle-wrap",{autoAlpha:0, duration: 1, ease: Power4.easeOut})
      // .from(".esg01 .circle",{autoAlpha: 0, yPercent: -25, duration: 1, ease: Power4.easeOut, stagger: 0.3 })
      .to(".esg01 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 1, ease: Power4.easeOut})
      .to(".esg01 .last-circle",{autoAlpha: 1})
      .to(".esg01 .circle",{autoAlpha: 0})

    }

  });

  function esg01Timeline() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".esg01-timeline",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".esg01-timeline", {duration: 1, delay: 0.5})
      .to(".esg01-timeline .sec01", {duration: 1, opacity: 1}, "myLabel-=1")
      .to(".esg01-timeline .sec01 .img", {duration: 1}, "myLabel-=1")
      .to(".esg01-timeline .sec01 .sub-txt", {duration: 1, top: "30%", y: "-50%"}, "myLabel-=1")
      .to(".esg01-timeline .sec02", {duration: 1, opacity: 1}, "myLabel")
      .to(".esg01-timeline .sec01 .sub-txt", {duration: 1, top: "0", y: "-100%"}, "myLabel")
      .to(".esg01-timeline .sec02 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel")
      .to(".esg01-timeline .sec02 .sub-txt", {duration: 1, top: "30%", y: "-50%"}, "myLabel")
      
      .to(".esg01-timeline .sec03", {duration: 1, opacity: 1}, "myLabel+=1")
      .to(".esg01-timeline .sec02 .sub-txt", {duration: 1, top: "0", y: "-100%"}, "myLabel+=1")
      .to(".esg01-timeline .sec03 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel+=1")
      .to(".esg01-timeline .sec03 .sub-txt", {duration: 1, top: "30%", y: "-50%"}, "myLabel+=1")

    return tl;
  }

  var overviewTl = gsap.timeline();
  overviewTl.add(esg01Timeline(), "+=1");


  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      var diagramAni3 = gsap.timeline({
        scrollTrigger:{
          trigger:".esg02 .section01",
          start:"top 10%",
          pin: true,
          scrub: 3,
          end: "bottom +30%"
          //end: "+=2500",
          //toggleActions:"restart none none reset"
        }
      })
      // .from(".esg02 .circle-wrap",{autoAlpha:0, duration: 0.3, ease: Power4.easeOut})
      // .from(".esg02 .circle",{autoAlpha: 0, yPercent: -25, duration: 0.3, ease: Power4.easeOut, stagger: 0.3 })
      .to(".esg02 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 1, ease: Power4.easeOut})
      .to(".esg02 .last-circle",{autoAlpha: 1, duration: 1})
      .to(".esg02 .circle",{autoAlpha: 0, duration: 1})

    }

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
  $(".company04 .btn_layer,.company04 .article").click(function () {
    var no = $(this).attr("layer");
    layer_open(no);
    $('.article').removeClass('active');
    $('.' + $(this).data('rel')).addClass('active');
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

  ScrollTrigger.refresh();
  window.addEventListener("resize", ScrollTrigger.update);
  ScrollTrigger.refresh();
});

document.addEventListener("DOMContentLoaded", function() {
  const i = document.querySelector('.txt-motion2');
  const e = i.querySelector(".challenge"),
        n = e.querySelector(".ment"),
        r = [].slice.call(n.querySelectorAll("span"));

  let o;  

  const areaHeight = window.innerHeight || document.documentElement.clientHeight;

  const l = gsap.timeline({ paused: true });

  r.forEach((c, h) => {
      l.to(c, {
          opacity: 1,
          duration: .5,
          ease: "power2.inOut"
      });

      if (h !== r.length - 1) {
          l.to(r[h + 1], {
              opacity: 0.4,
              duration: .5,
              delay: 0.1,
              ease: "power2.inOut"
          }, "-=0.4");
      }
  });

  const onScroll = () => {
      const h = e.getBoundingClientRect();
      const overlay = document.querySelector(".bg-darken");
      const overlayScale = document.querySelector(".bg");

      if (h.top < areaHeight && h.bottom > 0) {
          const d = -h.top/o;
          l.progress(Math.min(d, 1));

          const overlayOpacity = Math.min(d * 0.65, 0.65); 
          overlay.style.backgroundColor = `rgba(0, 0, 0, ${overlayOpacity})`;
          overlayScale.style.transform = `scale(${1 + overlayOpacity * 0.85})`;
      }
  };

  const onResize = () => {
      o = e.offsetHeight - areaHeight;
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);

  // 초기화
  onResize();  // 여기에서 onResize를 호출하여 o의 초기 값을 설정합니다.
});