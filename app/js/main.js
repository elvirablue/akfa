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
  $(".solutions__carousel").owlCarousel({
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