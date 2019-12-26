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
function parallaxPinner(trigger, target, hook, dur) {
  var controller = new ScrollMagic.Controller();
  var build = (function() {
      var scene = new ScrollMagic.Scene({
        triggerElement: $(trigger)[0],
        triggerHook: (hook),
        duration: (dur + '%')
      })
      .setPin($(target)[0])
      .addTo(controller);
      $($(target)[0]).addClass("active");
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


/*======================================
 * =====================================
 * =========== INITIALIZER =============
 * =====================================
 * ==================================*/
(function init() {
  var scrollInit = (function scrollInit() {
    $(window).scroll(function() {
      isActive($(".rewarding__bars"), $("#rewardingGraphTrigger"));
    });
  })();
  var domInit = {
    initial: {
      0: swapActive( ".numbers__icon--item", ".numbers__selected", "item", "selected" )
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
      0: parallaxPinner( $("#standFor"), $("#standForFocus"), 0, 100 )
    }
  };
  console.log("Init interaction: " + new Date().toUTCString());
})(); 
  
  
  
  