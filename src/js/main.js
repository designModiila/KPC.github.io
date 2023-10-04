$(document).ready(function(){
  var interleaveOffset = 0.5;
  var numSwiper = new Swiper("#mainVisual.bg-swiper-container", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
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

});