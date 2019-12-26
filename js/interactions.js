$.fn.isOnScreen = function() { 
    var win, viewport, bounds;
    win = $(window);
    viewport = { top : win.scrollTop(), left : win.scrollLeft() };
    viewport.right = viewport.left + win.width(), viewport.bottom = viewport.top + win.height();
    bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth(), bounds.bottom = bounds.top + this.outerHeight();
    return (!( viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom ));
  };
  var isActive = function isActive(el, target) {
    if (el.isOnScreen()) {
      if (!target.parent().hasClass("active")) target.parent().addClass("active");
    };
  };
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
  }; 
  var parallaxPinner = function parallaxPinner(trigger, target, dur) {
    var controller = new ScrollMagic.Controller();
    var build = (function() {
        var scene = new ScrollMagic.Scene({
          triggerElement: $(trigger)[0],
          duration: dur
        })
        .setPin($(target)[0])
        .addTo(controller);
      })();
  };
  
  (function init() {
    $(window).scroll(function() {
      isActive($(".rewarding__bars"), $("#rewardingGraphTrigger"));
    });
    var parallaxInit = {
      rewardInit: {
        0: parallaxScroll( $("#rewardingParallax1"), -500, 0, 1, 200 ),
        1: parallaxScroll( $("#rewardingParallax2"), -250, 0, 1, 200 )
      },
      mentalInit: {
        0: parallaxScroll( $("#mentalParallax0"), 0, 50, 1, 200 ),
        1: parallaxScroll( $("#mentalParallax1"), 0, -100, 1, 200 ),
        2: parallaxScroll( $("#mentalParallax2"), 0, 200, 1, 250 ),
        3: parallaxScroll( $("#mentalParallax3"), 0, -300, 1, 300 )
      },
      innovationInit: {
        0: parallaxScroll( $("#innovationBgL"), -100, 0, 1, 200 ),
        1: parallaxScroll( $("#innovationBgR"), -400, 0, 1, 200 )
      },
      standInit: {
        0: parallaxPinner( $("#standPinTrigger"), $("#standFor"), 300 )
      }
    };
    console.log('Init interaction');
  })(); 
    
    
    
    