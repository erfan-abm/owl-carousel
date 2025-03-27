$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:20,        
      nav:false, 
      dots: true,       
      autoplay:true,  
      autoplayHoverPause: true,
      autoplayTimeout:4000, 
      responsive:{
        0:{ items:1 },  
        600:{ items:1 },
        1000:{ items:1 } 
      }
    });
  });
  