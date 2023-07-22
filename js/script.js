$(function(){
    $(".banner_slide").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows:false,
         autoplay:true,
         dots:true,
         fade:true,
         infinite:true,
         speed:1000,
         cssEase: 'linear'
    })
    $(".celebration_slick").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows:true,
         autoplay:true,
         infinite:true,
         speed:1000,
         prevArrow:".arrow_left_icon",
         nextArrow:".arrow_right_icon",
         centerMode:true,
         centerPadding:'0px',
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
        
    })
})



$(".popular_causes_main").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  centerPadding: "0",
  nextArrow: ".ser_next",
  prevArrow: ".ser_prev",
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".team_main").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  centerPadding: "0",
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
