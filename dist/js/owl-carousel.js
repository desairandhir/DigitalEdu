$(document).ready(function() {
  // -----------------------
  // Medical
  // -----------------------
  $('#client').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    }
  })

  $('#travel-live').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  })

  $('#travel-testi').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    navText: [
      '<span aria-label="' + "Previous" + '"> <img src="../dist/images/icon/icon-left-arrow-long.svg"> </span>',
      '<span aria-label="' + "Next" + '">  <img src="../dist/images/icon/icon-right-arrow-long.svg"> </span>',
    ],
    responsive: {
      0: {
        items: 1,
      }
    }
  })

  $('#sassreview').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    navText: ['<i class="fas fa-arrow-left fs-3"></i>', '<i class="fas fa-arrow-right fs-3"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
    }
  })


  $(".nft-banner-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });


  $(".trending-collections-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });


  $(".landing-history-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: [
      '<span aria-label="' + "Previous" + '"> <i class="ti ti-arrow-left"></i> </span>',
      '<span aria-label="' + "Next" + '">  <i class="ti ti-arrow-right"></i> </span>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
    },
  });


  $(".previous-highlights-slider").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });


  $(".upcoming-conference-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<span aria-label="' + "Previous" + '"> <img src="../dist/images/icon/icon-left-conference.svg"> </span>',
      '<span aria-label="' + "Next" + '">  <img src="../dist/images/icon/icon-right-conference.svg"> </span>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      500: {
        items: 5,
      },
      992: {
        items: 6,
      },
      1100: {
        items: 9,
      },
    },
  });


  $(".specialities-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });

});


$('.features-slider .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  navText: [
    '<span aria-label="' + "Previous" + '"> <img src="../dist/images/icon/icon-left-arrow-long.svg"> </span>',
    '<span aria-label="' + "Next" + '">  <img src="../dist/images/icon/icon-right-arrow-long.svg"> </span>',
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


$('.company-logo-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      768:{
        items:4
      },
      1000:{
          items:5
      }
  }
})



$('.related-projects-slider').owlCarousel({
  center:true,
  margin:30,
  dots: true,
  nav:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1.5,
      },
  }
});


$('.categories').owlCarousel({
  loop:true,
  center: true,
  dots: false,
  nav:false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})