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
  
  var parallaxScroll = function parallaxScroll(el, vertical, horizontal, hook, duration) {
    var controller = new ScrollMagic.Controller();
    var build = (function() {
      $(el[0]).each(function() {
        var tl = new TimelineMax();
        var child = $(this).find(el[0].children);
        tl.to(child, 1, {
          y:((vertical) + "px"), 
          x:((horizontal) + "px"), 
          ease: Linear.easeNone 
        });
        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: hook,
          duration: (duration + '%')
        }).setTween(tl).addTo(controller);
      });
    })();
  }; // On scroll parallax 
  
  var rewardInit = {
    0: parallaxScroll($("#rewardingParallax1"), -500, 0, 1, 200),
    1: parallaxScroll($("#rewardingParallax2"), -250, 0, 1, 250)
  };
  var mentalInit = {
    0: parallaxScroll($("#mentalParallax0"), 0, 100, 1, 200 ),
    1: parallaxScroll($("#mentalParallax1"), 0, -200, 1, 200 ),
    2: parallaxScroll($("#mentalParallax2"), 0, 400, 1, 250 ),
    3: parallaxScroll($("#mentalParallax3"), 0, -800, 1, 300 )
  };
  
  $(window).scroll(function() {
    // Rewarding section
    var reward = $("#rewardingGraphTrigger");
    if (reward.isOnScreen() && !reward.parent().hasClass("active")) reward.parent().addClass("active");
  }); // On scroll functions
  
  (function init() {
    rewardInit;
    console.log('Init interaction');
  })(); // Initializer for interaction.js
    
    
    
    