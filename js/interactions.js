/*======================================
 * =====================================
 * ========== DOM FUNCTIONS ============
 * =====================================
 * ==================================*/
var isActive = function isActive(el, target) {
  if (el.isOnScreen()) {
    if (!target.parent().hasClass("active")) target.parent().addClass("active");
  };
};
var swapActive = function swapActive(el, target, value1, value2) {
  var active = false;
  return function(el, target, value1, value2) {
    if (!active) {
      active = true;
      var a = "active";
      if (!($(el).hasClass(a))) {
        if ($(el).hasClass("numbers__icon--item")) {
          var get = $(('#' + el.id.replace(value1, value2)))[0];
          $('.' + $(el)[0].classList[0] + '.' + a)[0].classList.remove(a);
          $(el)[0].classList.add(a);
          $(target + '.' + a)[0].classList.remove(a);
          get.parentElement.parentElement.classList.add(a);
        };
      };
      setTimeout(function() {
        active = false;
      }, 1000);
    };
  };
}();

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
 * ======= ANIMATION FUNCTIONS =========
 * =====================================
 * ==================================*/


/*======================================
 * =====================================
 * =========== INITIALIZER =============
 * =====================================
 * ==================================*/
var baseInit = function baseInit() {
  $("#selected1").parent().parent().addClass("active");
  $("#item1").addClass("active");
};
var scrollInit = function eventlInit() {
  $(window).scroll(function() {
    isActive($(".rewarding__bars"), $("#rewardingGraphTrigger")); 
  });
};
var clickInit = function clickInit() {
  $(".numbers__icon--item").click(function() {
    swapActive( this, ".numbers__selected", "item", "selected" )
  });
};

(function init() {
  var domInit = {
    events: {
      0: scrollInit(),
      1: clickInit()
    },
    custom: baseInit()
  };
  var interactionInit = {
    rewardInit: {
      0: parallaxScroll( $("#rewardingParallax1"), -500, 0, 1, 200 ),
      1: parallaxScroll( $("#rewardingParallax2"), -250, 0, 1, 200 )
    },
    mentalInit: {
      0: parallaxScroll( $("#mentalParallax0"), 0, -50, 1, 200 ),
      1: parallaxScroll( $("#mentalParallax1"), 0, -100, 1, 200 ),
      2: parallaxScroll( $("#mentalParallax2"), 0, 200, 1, 250 ),
      3: parallaxScroll( $("#mentalParallax3"), 0, -300, 1, 300 )
      //4: parallaxPinner( $("#mentalFocus"), $("#mentalFocus"), 0.5, 100 )
    },
    securityInit: {
      0: parallaxScroll( $("#securityBg1"), 100, -50, 1, 200 ),
      1: parallaxScroll( $("#securityBg2"), -100, 50, 1, 200 ),
      2: parallaxScroll( $("#securityBg3"), 100, -50, 1, 200 ),
      3: parallaxScroll( $("#securityBg4"), 100, 0, 1, 200 ),
      4: parallaxScroll( $("#securityBg5"), -100, -50, 1, 200 ),
      5: parallaxScroll( $("#securityBg6"), 100, 50, 0, 200 ),
    },
    innovationInit: {
      0: parallaxScroll( $("#innovationBgL"), -500, 0, 1, 200 ),
      1: parallaxScroll( $("#innovationBgR"), -1000, 0, 1, 200 ),
      2: parallaxPinner( $("#innovationFocus"), $("#innovationFocus"), 0.25, 100 )
    },
    testimonialInit: {
      0: bamboo(document.getElementById("testimonialSlider"))
    },
    lifeInit: {
      0: bamboo(document.getElementById("lifeSlider"))
    },
    standInit: {
      0: parallaxPinner( $("#standForFocus1"), $("#standForFocus1"), 0, 100 ),
      1: parallaxPinner( $("#standForFocus2"), $("#standForFocus2"), 0, 100 ),
      2: parallaxPinner( $("#standForFocus3"), $("#standForFocus3"), 0, 100 ),
      3: parallaxPinner( $("#standForFocus4"), $("#standForFocus4"), 0, 100 ),
      4: parallaxPinner( $("#standForFocus5"), $("#standForFocus5"), 0, 100 ),
      5: parallaxPinner( $("#standForFocus6"), $("#standForFocus6"), 0, 100 ),
      6: parallaxPinner( $("#standForFocus7"), $("#standForFocus7"), 0, 100 )
    }
  };
  console.log("Interaction: " + new Date().toUTCString());
})(); 
  
  
  
  