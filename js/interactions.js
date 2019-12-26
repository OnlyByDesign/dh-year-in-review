var DOM = {
    hero: $("#hero")[0],
    numbers: $("#byTheNumbers")[0],
    fueling: $("#fuelingFuture")[0],
    rewarding: $("#rewardingGrowth")[0],
    mental: $("#mentalHealth")[0],
    security: $("#securityTelecom")[0],
    innovation: $("#innovationBest")[0],
    testimonials: $("#memorableTestimonials")[0],
    life: $("#lifeDialogue")[0],
    stand: $("#standFor")[0],
    message: $("#messageLeaders")[0]
  };
  
  
  /*======================================
   * =====================================
   * ======= UNIVERSAL FUNCTIONS =========
   * =====================================
   * ==================================*/
  $.fn.isOnScreen = function() { 
    var win, viewport, bounds;
    win = $(window);
    viewport = { top : win.scrollTop(), left : win.scrollLeft() };
    viewport.right = viewport.left + win.width(), viewport.bottom = viewport.top + win.height();
    bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth(), bounds.bottom = bounds.top + this.outerHeight();
    return (!( viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom ));
  };
  
  
  /*======================================
   * =====================================
   * ======== PARALLAX FUNCTIONS =========
   * =====================================
   * ==================================*/
  function parallaxScroll(el, vertical, horizontal, hook, duration) {
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
  function parallaxPinner(trigger, target, dur) {
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
  
  
  /*======================================
   * =====================================
   * ========== DOM FUNCTIONS ============
   * =====================================
   * ==================================*/
  function isActive(el, target) {
    if (el.isOnScreen()) {
      if (!target.parent().hasClass("active")) target.parent().addClass("active");
    };
  };
  function swapActive(el, target, value1, value2) {
    $(el).click(function() {
      var a = "active";
      var get = $($(('#' + this.id.replace(value1, value2)))[0]);
      if (!get.hasClass(a)) {
        console.log(get);
        $(target + '.' + a).removeClass(a);
        get.addClass(a);
      };
    });
  };
  function scrollEvent() {
    $(window).scroll(function() {
      isActive($(".rewarding__bars"), $("#rewardingGraphTrigger"));
    });
  };
  
  
  /*======================================
   * =====================================
   * =========== INITIALIZER =============
   * =====================================
   * ==================================*/
  (function init() {
    var domInit = {
      initial: {
        0: scrollEvent()
      },
      event: {
        0: swapActive( ".numbers__icon--item", ".numbers__selected", "item", "selected",  )
      },
      custom: {
        0: $("#selected1").parent().parent().addClass("active")
      }
    }
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
        0: parallaxScroll( $("#innovationBgL"), -200, 0, 1, 200 ),
        1: parallaxScroll( $("#innovationBgR"), -500, 0, 1, 200 )
      },
      standInit: {
        0: parallaxPinner( $("#standPinTrigger"), $("#standFor"), 300 )
      }
    };
    console.log("Init interaction: " + new Date().toUTCString());
  })(); 
    
    
    
    