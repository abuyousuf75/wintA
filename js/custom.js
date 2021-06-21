$(function(){


    // Banner Part Slick Here

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:1500,
        arrows:true,
        speed:800,
        dots:false,
        fade:true,
        prevArrow:'.left',
        nextArrow:'.right',
      });
//Wow Js

  new WOW().init()

  //Tab

  var containerEl = document.querySelector('.food-start');

  var mixer = mixitup(containerEl);
    
 // lightbox
 $('.venobox').venobox(); 

 // Team Part Slider

 $('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed:1500,
  arrows:true,
  speed:800,
  dots:false,
  fade:false,
  prevArrow:'.arrows1',
  nextArrow:'.arrows2',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
   
  ]
});




});