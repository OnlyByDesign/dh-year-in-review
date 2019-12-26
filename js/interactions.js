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
 * =========== INITIALIZER =============
 * =====================================
 * ==================================*/
(function init() {
  var eventInit = (function eventlInit() {
    $(window).scroll(function() {
      isActive($(".rewarding__bars"), $("#rewardingGraphTrigger"));
    });
    $(".numbers__icon--item").click(function() {
      swapActive( this, ".numbers__selected", "item", "selected" )
    });
  })();
  var domInit = {
    custom: {
      0: $("#selected1").parent().parent().addClass("active"),
      1: $("#item1").addClass("active")
    }
  };
  var parallaxInit = {
    rewardInit: {
      0: parallaxScroll( $("#rewardingParallax1"), -500, 0, 1, 200 ),
      1: parallaxScroll( $("#rewardingParallax2"), -250, 0, 1, 200 )
    },
    mentalInit: {
      0: parallaxScroll( $("#mentalParallax0"), 0, -50, 1, 200 ),
      1: parallaxScroll( $("#mentalParallax1"), 0, -100, 1, 200 ),
      2: parallaxScroll( $("#mentalParallax2"), 0, 200, 1, 250 ),
      3: parallaxScroll( $("#mentalParallax3"), 0, -300, 1, 300 )
    },
    innovationInit: {
      0: parallaxScroll( $("#innovationBgL"), -200, 0, 1, 200 ),
      1: parallaxScroll( $("#innovationBgR"), -500, 0, 1, 200 )
    },
    standInit: {
      0: parallaxPinner( $("#standFor"), $("#standForFocus"), 0, 200 )
    }
  };
  console.log("Interaction: " + new Date().toUTCString());
})(); 
  
  
  
  