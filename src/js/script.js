$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
          autoplayHoverPause:true,
          autoplay:true,
            mouseDrag:true,
            items:1,
            nav:false
        },
        600:{
            autoplayHoverPause:true,
            autoplay:true,
            mouseDrag:true,
            items:3,
            nav:false
        },
        1000:{
            autoplayHoverPause:true,
            autoplay:true,
            mouseDrag:true,
            items:4,
            nav:false,
            loop:true
        }
    }
})
