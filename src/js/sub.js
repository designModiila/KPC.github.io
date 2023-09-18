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

      var diagramAni = gsap.timeline({
        scrollTrigger:{
        trigger:".business02 .section01",
        start:"top top",
        pin: true,
        scrub: 1,
        end: "+=5000",
        //toggleActions:"restart none none reset"
        }
      })
      .from(".business02 .diagram-wrapper",{autoAlpha:0, duration: 0.3, ease: Power4.easeOut})
      // .from(".business02 .diagram-center",{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      // .from(".business02 .diagram-center > p",{autoAlpha: 0, stagger: 0.3, duration: 0.3, ease: Power4.easeOut})
      // .from(".business02 .diagram-side",{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      // .from(".business02 .arrowBg",{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .to('.business02 .top-con',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .from('.business02 .bot-con',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .from('.business02 .bot-con .diagram-left',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      //.from('.business02 .bot-con .diagram-left div ',{autoAlpha: 0, stagger: 0.3, duration: 0.3, ease: Power4.easeOut})
      .from('.business02 .bot-con .diagram-right',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      //.from('.business02 .bot-con .diagram-right div',{autoAlpha: 0, stagger: 0.3, duration: 0.3, ease: Power4.easeOut})   
    }

  });

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
      tl.to('.txt-motion .img-wrapBl', {
        opacity: 1,
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


      var barAni = gsap.timeline({
        scrollTrigger:{
          trigger:".business01 .section03",
          start:"top 50%",
          end:"bottom top",
          toggleActions:"restart none none reset"
        }
      })
      .from(".business01 .graph-title",{yPercent: 25, autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .from(".business01 .graph",{yPercent: 25, autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .from(".business01 .box",{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
      .from(".business01 .bar-grey",{height: 0, duration: 0.5, ease: Power4.easeOut})
      .from(".business01 .bar-blue",{height: 0, duration: 0.5, ease: Power4.easeOut})
      .from(".business01 .box > span",{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})

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

  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      var diagramAni2 = gsap.timeline({
        scrollTrigger:{
        trigger:".esg01 .section01",
        start:"top 10%",
        pin: true,
        scrub: 3,
        end: "bottom+=50%"
        //end: "+=2500",
        //toggleActions:"restart none none reset"
        }
      })
      .from(".esg01 .circle-wrap",{autoAlpha:0, duration: 0.3, ease: Power4.easeOut})
      .from(".esg01 .circle",{autoAlpha: 0, yPercent: -25, duration: 0.3, ease: Power4.easeOut, stagger: 0.3 })
      .to(".esg01 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 0.3, ease: Power4.easeOut})
      .to(".esg01 .last-circle",{autoAlpha: 1})
      .to(".esg01 .circle",{autoAlpha: 0})

    }

  });

  
  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {


        // function intro() {
        //   var tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: ".overview_sec .sub_tit_div",
        //       start: "top-=450 top",
        //       end: "+=80%",
        //       scrub: 1,
        //     },
        //   });
        //   tl.to(".overview_sec .sub_tit_div .sub_tit", {duration: 0.5, top: 0, opacity: 1});

        //   return tl;
        // }

        function middle() {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".overview_sec",
              start: "top top",
              end: "+=300%",
              scrub: 1,
              pin: true,
            },
          });

          tl.to(".overview_sec .sub_tit_div", {duration: 1, y: "-100%", delay: 0.5})
            .to(".overview_sec .sec01", {duration: 1, opacity: 1}, "myLabel-=1")
            .to(".overview_sec .sec01 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel-=1")
            .to(".overview_sec .sec01 .sub_txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel-=1")
            .to(".overview_sec .sec02", {duration: 1, opacity: 1}, "myLabel")
            .to(".overview_sec .sec01 .sub_txt", {duration: 1, top: "0", y: "-100%"}, "myLabel")
            .to(".overview_sec .sec02 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel")
            .to(".overview_sec .sec02 .sub_txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel")
            
            .to(".overview_sec .sec03", {duration: 1, opacity: 1}, "myLabel+=1")
            .to(".overview_sec .sec02 .sub_txt", {duration: 1, top: "0", y: "-100%"}, "myLabel+=1")
            .to(".overview_sec .sec03 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel+=1")
            .to(".overview_sec .sec03 .sub_txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel+=1")

          return tl;
        }

        var overviewTl = gsap.timeline();
        overviewTl.add(middle(), "+=1");


    }

  });

  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

      var diagramAni3 = gsap.timeline({
        scrollTrigger:{
        trigger:".esg02 .section01",
        start:"top 10%",
        pin: true,
        scrub: 3,
        end: "bottom+=50%"
        //end: "+=2500",
        //toggleActions:"restart none none reset"
        }
      })
      .from(".esg02 .circle-wrap",{autoAlpha:0, duration: 0.3, ease: Power4.easeOut})
      .from(".esg02 .circle",{autoAlpha: 0, yPercent: -25, duration: 0.3, ease: Power4.easeOut, stagger: 0.3 })
      .to(".esg02 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 0.3, ease: Power4.easeOut})
      .to(".esg02 .last-circle",{autoAlpha: 1})
      .to(".esg02 .circle",{autoAlpha: 0})

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
  $(".btn_layer").click(function () {
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

