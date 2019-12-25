// This changes the nav after 100px of scrolling
var navActive = function navActive() {
    $(window).scrollTop() > 100 ? 
    $('.header').addClass('active') : 
    $('.header').removeClass('active');
  };
  // function to check if a div is visible in viewport
  $.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(
        viewport.right < bounds.left || 
        viewport.left > bounds.right || 
        viewport.bottom < bounds.top || 
        viewport.top > bounds.bottom
    ));
  };
  // Init scrollMagic parallax
  var controller = new ScrollMagic.Controller();
  var parallaxScroll = function parallaxScroll(el) {
    $(el).each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(".parallax__item");
      tl.to(child, 1, 
        { y: -180, ease: Linear.easeNone }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
      }).setTween(tl).addIndicators({
          colorTrigger: "black",
          colorStart: "black",
          colorEnd: "black",
          indent: 10
        }).addTo(controller);
    });
  };
  
  // throttle this
  $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
    if ($("#rewardingGrowth").isOnScreen()) console.log('1');
  });
  
  (function init() {
    navActive();
    console.log('Init interaction');
  })();