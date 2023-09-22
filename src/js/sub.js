window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
          handleLargeScreens();

          ScrollTrigger.batch(".contD", {
            start: 'top 70%',
            onEnter: elements => {
              gsap.from(elements, {
                autoAlpha: 0,
                y: 25,
                stagger: 0.3
              });
            },
        
          });
    
      }
  });

  // Swiper for news
  initializeNewsSwiper();

  // Event listeners
  addActive();
  modalView();
  handleBackgroundOnResize();
  handleMobileToolbarHeight();
  initializeSwiperForEachProjectSlide();
};

function handleLargeScreens() {
  pinSubVisual();
  businessDiagram();
  textMotionEffect();
  barAnimation();
  esg01Animation();
  esg01Timeline();
  handleEsg02Animation();
}

function pinSubVisual() {
  var $subVisual = document.querySelector('.subVisual');
  var _startPosition = window.innerHeight + "px";
  
  gsap.timeline({
      scrollTrigger: {
          trigger: $subVisual,
          start: "top+=" + _startPosition + " 99.9%",
          end: "top+=200% bottom",
          pin: true,
          onEnter: function() {
              toggleVisualClasses(true);
          },
          onLeaveBack: function() {
              toggleVisualClasses(false);
          },
          onEnterBack: function() {
              toggleVisualClasses(true);
          }
      }
  });

  function toggleVisualClasses(isAdd) {
      $(".subVisual .image-wrap")[isAdd ? 'addClass' : 'removeClass']("on");
      $('.subVisual .title-wrap')[isAdd ? 'addClass' : 'removeClass']('on');
  }
}

function initializeNewsSwiper() {
  var newsSwiper = new Swiper(".newsSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: false,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
}

function addActive() {
  $('.activeCon').click(function(event) {
      event.preventDefault();
      $('.activeCon').removeClass('active');
      $(this).addClass('active');
  });
}

function modalView() {
  $('.board li, .privacy').click(function() {
      $('.layer-dimm').addClass('open');
      $(this).hasClass('board li') ? $('.board-view') : $('.privacy-policy')
          .show()
          .addClass('open');
      $('body').addClass('noScroll');
  });

  $('.privacy-agree-box .btn-toggle').click(function() {
      $(this).toggleClass('on');
      $('.privacy-agree').toggleClass('on');
  });
}

function handleBackgroundOnResize() {
  $(window).on('resize', function() {
      var _bgSelector = $('.txt-motion');
      if (_bgSelector.length > 0) {
          var _visualBg = _bgSelector.data('bg');
          _bgSelector.css({
              "background-image": "url(" + _visualBg + ")"
          });
      }
  });
}

function handleMobileToolbarHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  window.addEventListener('resize', function() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
  });
}

function initializeSwiperForEachProjectSlide() {
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
      }
    });
  });
}

function businessDiagram() {
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
  .to('.business02 .top-con',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
  .from('.business02 .bot-con',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
  .from('.business02 .bot-con .diagram-left',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
   .from('.business02 .bot-con .diagram-right',{autoAlpha: 0, duration: 0.3, ease: Power4.easeOut})
}

function textMotionEffect() {
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
}

function barAnimation() {
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
  // ... your gsap code for bar animation
}

function esg01Animation() {

  var diagramAni2 = gsap.timeline({
    scrollTrigger:{
    trigger:".esg01 .section01",
    start:"top 10%",
    pin: true,
    scrub: 3,
    end: "+=2500",
    //toggleActions:"restart none none reset"
    }
  })
  .from(".esg01 .circle-wrap",{autoAlpha:0, duration: 1, ease: Power4.easeOut})
  .from(".esg01 .circle",{autoAlpha: 0, yPercent: -25, duration: 1, ease: Power4.easeOut, stagger: 0.3 })
  .to(".esg01 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 1, ease: Power4.easeOut})
  .to(".esg01 .last-circle",{autoAlpha: 1})
  .to(".esg01 .circle",{autoAlpha: 0})
  // ... your gsap code for esg01 animation
}

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
    .to(".esg01-timeline .sec01 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel-=1")
    .to(".esg01-timeline .sec01 .sub-txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel-=1")
    .to(".esg01-timeline .sec02", {duration: 1, opacity: 1}, "myLabel")
    .to(".esg01-timeline .sec01 .sub-txt", {duration: 1, top: "0", y: "-100%"}, "myLabel")
    .to(".esg01-timeline .sec02 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel")
    .to(".esg01-timeline .sec02 .sub-txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel")
    
    .to(".esg01-timeline .sec03", {duration: 1, opacity: 1}, "myLabel+=1")
    .to(".esg01-timeline .sec02 .sub-txt", {duration: 1, top: "0", y: "-100%"}, "myLabel+=1")
    .to(".esg01-timeline .sec03 .img", {duration: 1, scale: 1, transformOrigin: "50% 0%"}, "myLabel+=1")
    .to(".esg01-timeline .sec03 .sub-txt", {duration: 1, top: "50%", y: "-50%"}, "myLabel+=1")

  return tl;


}

var overviewTl = gsap.timeline();
overviewTl.add(esg01Timeline(), "+=1");

function handleEsg02Animation() {
  var diagramAni3 = gsap.timeline({
    scrollTrigger:{
    trigger:".esg02 .section01",
    start:"top 10%",
    pin: true,
    scrub: 3,
    //end: "bottom+=50%"
    end: "+=2500",
    }
  })
  .from(".esg02 .circle-wrap",{autoAlpha:0, duration: 0.3, ease: Power4.easeOut})
  .from(".esg02 .circle",{autoAlpha: 0, yPercent: -25, duration: 0.3, ease: Power4.easeOut, stagger: 0.3 })
  .to(".esg02 .circle-side",{left: "50%",transform:"translate(-50%, -50%)", duration: 0.3, ease: Power4.easeOut})
  .to(".esg02 .last-circle",{autoAlpha: 1})
  .to(".esg02 .circle",{autoAlpha: 0})

}


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


