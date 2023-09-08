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
            $(".image-wrap").addClass("on");
            $('.title-wrap').addClass('on');
          },
          onLeaveBack: function () {
            $(".image-wrap").removeClass("on");
            $('.title-wrap').removeClass('on');
          },
          onEnterBack: function () {
            $(".image-wrap").addClass("on");
            $('.title-wrap').addClass('on');
          },
        }
      });

      // var subVisualAni = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: $subVisual,
      //     start: "top+=" + _startPosition + " 99.9%",
      //     // end: "+=1500",
      //     end: "top+=200% bottom",
      //     pin: true,
      //     toggleActions:"restart none none reverse"
      //   }
      // })
      // subVisualAni.to('.sub-visual .image-wrap',{width: '100%', height: '100vh', duration: 1})
      //             .to('.title-wrap',{top: "53vh"})
      //             .to('.subVisual .title-wrap .sub-title',{color: "#fff"},0)
      //             .to('.subVisual .title-wrap .title',{color: "#fff"},0)


      
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
  }
  modalView();
  
    //voc 개인정보처리방침
    $('.privacy-agree-box .btn-toggle').click(function(){
      $(this).toggleClass('on');
      $('.privacy-agree').toggleClass('on');
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