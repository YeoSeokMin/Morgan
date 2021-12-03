
(function ($) {
	"use strict";
   $(document).ready(function($){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()

			 // Sticky Menu
			$('.js--sticky-menu').waypoint(function(direction){
			   if(direction == 'down'){
			         $('.header-area').addClass('sticky');
			      } else {
			         $('.header-area').removeClass('sticky');
			   }
            });
            // Active Menu Color
            $('.main-menu li').on('click', function(){
                $('.main-menu li').removeClass('active');
                $(this).addClass('active');
            });

            

            // Search Trigger
            $('.search-trigger').on('click', function(){
                $('#search-modal').addClass('show');
                $('.search-overlay').addClass('show');
            });
            $('.search-overlay').on('click', function(){
                $(this).removeClass('show');
                $('#search-modal').removeClass('show');
            });
            // Search Trigger

      // Start Slider Carousel
      $('.slider-carousel').owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
             autoplayHoverPause:true,
        
      });
      // End Slider Carousel

      // Start Project Carousel
      $('.project-carousel').owlCarousel({
         loop: true,
         dots: false,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: false,
				 autoplayTimeout:1000,
    		 autoplayHoverPause:true,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 4
            },
        },
      });
      // End Project Carousel //
      // Start Carousel Area
      $('.blog-carousel, .testimonial-carousel').owlCarousel({
         items: 1,
         loop: true,
         dots: false,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
      });
      // End Carousel Area //
      // Start Brand Carousel
      $('.brand-carousel').owlCarousel({
         loop: true,
         dots: false,
         thumbs: false,
         autoplay: true,
				 autoplayTimeout:4000,
    		 autoplayHoverPause:true,
         responsive: {
            0:{
                items:2
            },
            768:{
                items: 3
            },
            992:{
                items: 6
            },
        },
      });
      // End Brand Carousel

       // Start Slick Nav
   $('#mobile-menu').slicknav({
    prependTo: '.show-mobile-menu',
    allowParentLinks: true
 });
 // End Slick Nav

//  Scroll Up
$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
//   Scroll Up

//   Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI

});

})(jQuery);

// 여석민 수정
function count_num(element, maxval) {
    $({ val : 0 }).animate({ val : maxval }, {
        duration: 1500,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(element).text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(element).text(num);
        }
    });
    
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function count_per(element, maxval) {
    $({ val : 0 }).animate({ val : maxval }, {
        duration: 1000,
        step: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $(element).text(num);
        },
        complete: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $(element).text(num);
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function main() {
    count_num(".all_people", 250000)
    count_num(".all_vip", 6750)
    count_num(".m_revenue", 482)
    count_per(".subscription_rate", 92.8)

    $('.main').click(function(){
        console.log("ㅎㅎ")
        location.href = "/index.html"
    })
    $('.goods').click(function(){
        location.href = "/goods.html"
    })

    $('.coinnews').click(function(){
        location.href = "/news.html"
    })
    $('.company').click(function(){
        location.href = "/company.html"
    })
    $('.main_logo').click(function(){
        location.href = "/index.html"
    })
}
main();
