

$(document).ready(function () {
  $(window).scroll(function(){
    if( $(this).scrollTop() > 1000 ){
      $(".btn_top").addClass("on");
    }
    else{
      $(".btn_top").removeClass("on");
    }
  });
  $(".btn_top").click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
  });

  if (!$('body').hasClass('subPage')) {
    var interleaveOffset = 0.5;
    var numSwiper = new Swiper("#mainVisual.bg-swiper-container", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      //autoplay : false,
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

  }

  gsap.registerPlugin(ScrollTrigger);

  function initializeContDAnimation() {
    const contD = document.querySelectorAll(".contD");
    gsap.set(".contD > div", { y: "25%", opacity: 0 });
    contD.forEach((contD) => {
      const blockTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: contD,
          start: "top 70%",
          toggleActions: "restart none none reverse",
        },
      }).to(contD.querySelectorAll(".contD > div"), {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
      });
    });
  }


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
        yPercent: -125,
        ease: 'none',
      })

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


      // var businessDiagram = gsap.timeline({
      //   scrollTrigger:{
      //     trigger:".business02 .section01",
      //     start:"top 10%",
      //     pin: true,
      //     // scrub: 3,
      //     // end: "bottom +30%"
      //     //end: "+=2500",
      //     //toggleActions:"restart none none reset"
      //   }
      // })
      // .from(".circle",{autoAlpha: 0, stagger: 0.2})
      // .from(".diagram-bg",{autoAlpha: 0})

      function businessModal(){
        $('#layer-dimm').hide();
        $('.businessModal.modal').hide();
    
        $('.precursorModalBtn').click(function(){
          $('#layer-dimm').show();
          $('#precursorModal').show();
          $('body').addClass('noScroll')
        })

        $('.recycleModalBtn').click(function(){
          $('#layer-dimm').show();
          $('#recycleModal').show();
          $('body').addClass('noScroll')
        })
    

        $('.modal-close').click(function(){
          $('#layer-dimm').hide();
          $('.businessModal.modal').hide();
          $('body').removeClass('noScroll')
        })

        // var businessModal = document.getElementsByClassName('businessModal')
        // var modalGif = businessModal.getElementsByTagName('img')[0];
        // var modalSrc = modalGif.src;
    
        // modalGif.setAttribute('src', '');
        // setTimeout(function () {
        //   modalGif.setAttribute('src', modalSrc);
        // }, 0);
      }
    
      businessModal();


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

      initializeContDAnimation()

      // const contD = document.querySelectorAll(".contD");
      // gsap.set(".contD > div",{y: "25%", opacity: 0})
      // contD.forEach(contD => {
      //   const blockTimeline = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: contD,
      //       start:"top 70%",
      //       toggleActions:"restart none none reverse"
      //     }
      //   })
      //   .to(contD.querySelectorAll(".contD > div"), {
      //     autoAlpha:1, 
      //     y: 0, 
      //     duration: 0.5, 
      //     stagger: 0.3
      //   })

      // });

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


    },
    "(max-width: 767px)": function () {

      function businessModal(){
        $('#layer-dimm').hide();
        $('.businessModal.modal').hide();
    
        $('.precursorModalBtn').click(function(){
          $('#layer-dimm').show();
          $('#precursorModal').show();
          $('body').addClass('noScroll')
        })

        $('.recycleModalBtn').click(function(){
          $('#layer-dimm').show();
          $('#recycleModal').show();
          $('body').addClass('noScroll')
        })
    

        $('.modal-close').click(function(){
          $('#layer-dimm').hide();
          $('.businessModal.modal').hide();
          $('body').removeClass('noScroll')
        })

        // var businessModal = document.getElementsByClassName('businessModal')
        // var modalGif = businessModal.getElementsByTagName('img')[0];
        // var modalSrc = modalGif.src;
    
        // modalGif.setAttribute('src', '');
        // setTimeout(function () {
        //   modalGif.setAttribute('src', modalSrc);
        // }, 0);
      }
    
      businessModal();


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
    observer: true,
    observeParents: true,
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
      $('.board-view .modal').show();
      $('body').addClass('noScroll');
    })
    $('.privacy').click(function(){
      $('.layer-dimm').addClass('open');
      $('.privacy-policy').show().addClass('open');
      $('.privacy-policy .modal').show();
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
  $(window).on('resize', function () {
    windW = $(window).width();
    var _bgSelector = $('.txt-motion');
    if (_bgSelector.length > 0) {
        var _visualBg = _bgSelector.data('bg');
        _bgSelector.css({ "background-image": "url(" + _visualBg + ")" });
    }
  })


    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      
      // 탭을 클릭할 때마다 contD 애니메이션 초기화 및 실행
      initializeContDAnimation();
      
      return false;
    }).filter(':eq(0)').click();
  
    
    initializeContDAnimation();
    



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
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
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

  function layer_open(no) {
    var layer = $(".world-layer[layer=" + no + "]");
    if (!layer.hasClass("open")) {
      layer.addClass("open").show();
      $(".layer-dimm").addClass("open");
      $('body').addClass('noScroll');
    }
  };
  
  function triggerLayerEvent(layerNo) {
    $(".world-layer").removeClass("open").hide();
    var layerElement = $(".company04 .btn_layer[layer='" + layerNo + "'], .company04 .article[layer='" + layerNo + "']").first();
    layerElement.trigger('click');
  }
  
  var maxLayer = $(".world-layer").length;
  
  $(".prev.layer-btn").click(function() {
    var currentLayer = parseInt($(".world-layer.open").attr("layer"));
    var prevLayer = currentLayer - 1;
    if (prevLayer < 1) {
      prevLayer = maxLayer; 
    }
    triggerLayerEvent(prevLayer);
  });
  
  $(".next.layer-btn").click(function() {
    var currentLayer = parseInt($(".world-layer.open").attr("layer"));
    var nextLayer = currentLayer + 1;
    if (nextLayer > maxLayer) {
      nextLayer = 1; 
    }
    triggerLayerEvent(nextLayer);
  });
  
  $(".company04 .btn_layer, .company04 .article").hover(
    function() { 
      var layerNo = $(this).attr("layer");  
     
      $(".company04 .btn_layer[layer='" + layerNo + "']").closest('.tablinks').addClass('hover');      
      $(".company04 .article[layer='" + layerNo + "']").addClass('hover');
    }, 
    function() { // 마우스가 요소에서 벗어났을 때
      var layerNo = $(this).attr("layer");
      $(".company04 .btn_layer[layer='" + layerNo + "']").closest('.tablinks').removeClass('hover');
      $(".company04 .article[layer='" + layerNo + "']").removeClass('hover');
    }
  );

  
  $(".company04 .btn_layer, .company04 .article").click(function() {
    var no = $(this).attr("layer");
    layer_open(no);
  
    $('.tablinks, .article').removeClass('active');
    $(".btn_layer[layer='" + no + "']").closest('.tablinks').addClass('active');
    $(".article[layer='" + no + "']").addClass('active');
  });
  
  $(".world-layer-close").click(function() {
    var layerNo = $(this).closest(".world-layer").attr("layer");
    $(".world-layer[layer='" + layerNo + "']").removeClass('open').hide();
    // $(".btn_layer[layer='" + layerNo + "']").closest('.tablinks').removeClass('active');
    // $(".article[layer='" + layerNo + "']").removeClass('active');
  });
  


  // //닫기 버튼 클릭시 레이어 닫기
  // $(".close-btn").click(function () {
  //   layer_close();
  // });


  

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



  ScrollTrigger.refresh();
  window.addEventListener("resize", ScrollTrigger.update);
  ScrollTrigger.refresh();



});





document.addEventListener("DOMContentLoaded", function () {
  var e = document.querySelector('.txt-motion2 .challenge'); // 전역 변수에 값 할당
  if (e) {
    var n = e.querySelector(".ment");
    var r = [].slice.call(n.querySelectorAll("span"));
    

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
  
  
  }


});




