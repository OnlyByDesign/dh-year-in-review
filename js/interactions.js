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
  }; // checks if a div is visible in viewport
  
  var navActive = function navActive() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
  }; // This changes the nav after 100px of scrolling | adds 'active' class
  
  var controller = new ScrollMagic.Controller(); // Init scrollMagic controller
  var parallaxScroll = function parallaxScroll(el, speed, hook, duration) {
    $(el[0]).each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(el[0].children);
      tl.to(child, 1, 
        { y: ((speed) + "px"), ease: Linear.easeNone }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: hook,
        duration: (duration + '%')
      }).setTween(tl).addTo(controller);
    });
  }; // Scrolling parallax 
    
  $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
    var reward = $("#rewardingGraphTrigger");
    if (reward.isOnScreen() && !reward.parent().hasClass("active")) reward.parent().addClass("active");
  }); // On scroll functions
    
  (function init() {
    navActive();
    parallaxScroll($("#rewardingParallax1"), -500, 1, 200);
    parallaxScroll($("#rewardingParallax2"), -250, 1, 250);
    console.log('Init interaction');
  })(); // Initializer for interaction.js
    
    
    
    