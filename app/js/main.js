$(document).ready(function(){
  $(".front-page-slider").owlCarousel({
  	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
  	autoplaySpeed: '1000',
  });
});

$(document).ready(function(){
  $(".news__carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
  	autoplaySpeed: '1000',
  });
});

// Tabs

(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);



// Accordion

$('.accordion__toggle').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $this.removeClass('active');

    } else {
        $this.parent().parent().find('.accordion__inner').removeClass('show');
        $this.parent().parent().find('.accordion__inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $this.removeClass('active');
        $this.toggleClass('active');
        $('.accordion__toggle').not(this).removeClass("active");
    }
});

// Form styler 

(function($) {
  $(function() {

    $('input, select').styler();

  });
})(jQuery);

// Supplies

$('.supplies-page__posts .supplies-page__post').click(function(){
    $(this).addClass('active');
    $('.supplies-page__post').not(this).removeClass('active');
});

$('.supplies-page__posts .moscow').click(function(){
    $('.supplies-page__svh .supplies-page__svh-box').removeClass("active");
    $('.supplies-page__svh .moscow').addClass("active");
    $('.supplies-page__comment .supplies-page__comment-body').removeClass("active");
    $('.supplies-page__comment .moscow').addClass("active");
});

$('.supplies-page__posts .mozhaysk').click(function(){
    $('.supplies-page__svh .supplies-page__svh-box').removeClass("active");
    $('.supplies-page__svh .mozhaysk').addClass("active");
    $('.supplies-page__comment .supplies-page__comment-body').removeClass("active");
    $('.supplies-page__comment .mozhaysk').addClass("active");
});

$('.supplies-page__posts .khabarovsk').click(function(){
    $('.supplies-page__svh .supplies-page__svh-box').removeClass("active");
    $('.supplies-page__svh .khabarovsk').addClass("active");
    $('.supplies-page__comment .supplies-page__comment-body').removeClass("active");
    $('.supplies-page__comment .khabarovsk').addClass("active");
});

$('.supplies-page__posts .vladivostok').click(function(){
    $('.supplies-page__svh .supplies-page__svh-box').removeClass("active");
    $('.supplies-page__svh .vladivostok').addClass("active");
    $('.supplies-page__comment .supplies-page__comment-body').removeClass("active");
    $('.supplies-page__comment .vladivostok').addClass("active");
});

// Delivery steps 

$('.delivery-steps__step').click(function(){
  $('.delivery-steps .delivery-steps__step').removeClass("active");
  $(this).addClass('active');
});

$('.delivery-steps__step.step1').click(function(){
    $('.delivery-steps-desc').removeClass("active");
    $('.delivery-steps-desc.step1').addClass("active");
});


$('.delivery-steps__step.step2').click(function(){
    $('.delivery-steps-desc').removeClass("active");
    $('.delivery-steps-desc.step2').addClass("active");
    // $('.supplies-page__comment .supplies-page__comment-body').removeClass("active");
    // $('.supplies-page__comment .moscow').addClass("active");
});

$('.delivery-steps__step.step3').click(function(){
    $('.delivery-steps-desc').removeClass("active");
    $('.delivery-steps-desc.step3').addClass("active");
});


$('.delivery-steps__step.step4').click(function(){
    $('.delivery-steps-desc').removeClass("active");
    $('.delivery-steps-desc.step4').addClass("active");
});


// Order form

$('.order-page__full-form-button').click(function(){
    $('.order-page__submit-button').toggle();
    $('.order-page__full-form').toggle();
    $('.order-page__full-form-headliner').toggleClass('hidden');
    $('.order-page__full-form-button.hide').toggleClass('hidden');
    $('.order-page__full-form-button.show').toggle();
});

// Map switcher

$('.map-switcher__nav-item').click(function(){
    $(this).addClass('active');
    $('.map-switcher__nav-item').not(this).removeClass('active');
});

$('.map-switcher__nav-item.china').click(function(){
    $('.map-switcher__canvas img').not(this).removeClass('active');
    $('.map-switcher__canvas .map1').addClass('active'); 
});

$('.map-switcher__nav-item.container-shipping').click(function(){
    $('.map-switcher__canvas img').not(this).removeClass('active');
    $('.map-switcher__canvas .map2').addClass('active');
});

$('.map-switcher__nav-item.supplies').click(function(){
    $('.map-switcher__canvas img').not(this).removeClass('active');
    $('.map-switcher__canvas .map3').addClass('active');
});

// Additional

$('.page-menu__menu .current').click(function(){
   return false;
});


// $('ul.tabs__caption li.active').click(function() {
//     $('.tabs__caption li').not(this).addClass('visible');
//     // $('.ul.tabs__caption li.active').not(this).removeClass('visible');
// });

// $('ul.tabs__caption li.visible').click(function() {
//     $('ul.tabs__caption li').removeClass('visible');
// });


// Toggle menu

$(".header__toggle-menu").click(function() {
  $('.header__toggle-menu #toggle').toggleClass("on");
  $(".header__menu").slideToggle();
});


// Owl carousel response

$owl = $('body').find('.solutions__carousel');

// set the owl-carousel otions
var carousel_Settings = {
  items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: '1000',
};

function initialize(){
  var containerWidth = $(window).width();
  if(containerWidth <= 767) {
    // initialize owl-carousel if window screensize is less the 767px
    $owl.owlCarousel( carousel_Settings );
  } else {
    // destroy owl-carousel and remove all depending classes if window screensize is bigger then 767px
    $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    $owl.find('.owl-stage-outer').children().unwrap();
  }
}

// initilize after window resize
var id;
$(window).resize( function() {
  clearTimeout(id);
  id = setTimeout(initialize, 0);
});

// initilize onload
initialize();

// Solutions 

  $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
      $('#tosolutions').fadeIn();
    } else {
      $('#tosolutions').fadeOut();
    }
   
  });


$('#tosolutions').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
