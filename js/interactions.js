// This changes the nav after 100px of scrolling
var navActive = function navActive() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
  };
  // // function to check if a div is visible in viewport
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
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };
  // Init scrollMagic parallax
  var controller = new ScrollMagic.Controller();
  var parallaxScroll = function parallaxScroll(el) {
    $(el[0]).each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(el[0].children);
      tl.to(
        child, 1, 
        { y: -200, ease: Linear.easeNone }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
      }).setTween(tl).addTo(controller);
    });
  };
  
  
  // throttle this
  $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
    //if ($("#rewardingGrowth").isOnScreen()) parallaxScroll($("#rewardingParallax"));
  });
  
  (function init() {
    navActive();
    parallaxScroll($("#rewardingParallax"));
    console.log('Init interaction');
  })();