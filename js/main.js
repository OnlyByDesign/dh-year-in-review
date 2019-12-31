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
var navActive = function navActive() {
  $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
};
var isActive = function isActive(el, target) {
  $.fn.isOnScreen = function() { 
    var win, viewport, bounds;
    win = $(window);
    viewport = { top : win.scrollTop(), left : win.scrollLeft() };
    viewport.right = viewport.left + win.width(), viewport.bottom = viewport.top + win.height();
    bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth(), bounds.bottom = bounds.top + this.outerHeight();
    return (!( viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom ));
  };
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
 * ======= ANIMATION FUNCTIONS =========
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
function revealInnovation() {
  var innovationTriggers = ["#innovation4Trigger","#innovation5Trigger","#innovation6Trigger"];
  var innovationSections = ["#innovation1","#innovation2","#innovation3","#innovation4","#innovation5","#innovation6"];
  isActive($("#innovation4Trigger"), $("#innovation4").children());
  isActive($("#innovation5Trigger"), $("#innovation5").children());
  isActive($("#innovation6Trigger"), $("#innovation6").children());
  if ($("#innovationBest")[0].classList.contains("active")) {
    if ($("#innovation4")[0].classList.contains("active")) {
      $("#innovation1")[0].classList.remove("active");
    };
    if ($("#innovation5")[0].classList.contains("active")) {
      $("#innovation2")[0].classList.remove("active");
    };
    if ($("#innovation6")[0].classList.contains("active")) {
      $("#innovation3")[0].classList.remove("active");
    };
  };
};
/*======================================
 * =====================================
 * =========== INITIALIZER =============
 * =====================================
 * ==================================*/
var scrollInit = function eventlInit() {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
    isActive($(".fueling__fg"), $(".fueling__bg")); 
    isActive($(".rewarding__bars"), $("#rewardingGraphTrigger")); 
    isActive($("#innovationBest"), $("#innovationBest").children());
    revealInnovation();
  });
};
var clickInit = function clickInit() {
  $(".numbers__icon--item").click(function() {
    swapActive( this, ".numbers__selected", "item", "selected" )
  });
};
var baseInit = function baseInit() {
  navActive()
  $("#selected1").parent().parent().addClass("active");
  $("#item1").addClass("active");
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
    },
    securityInit: {
      0: parallaxScroll( $("#securityBg1"), 100, -50, 1, 200 ),
      1: parallaxScroll( $("#securityBg2"), -100, 50, 1, 200 ),
      2: parallaxScroll( $("#securityBg3"), 100, -50, 1, 200 ),
      3: parallaxScroll( $("#securityBg4"), 100, 0, 1, 200 ),
      4: parallaxScroll( $("#securityBg5"), -100, -50, 1, 200 ),
      5: parallaxScroll( $("#securityBg6"), 100, 50, 0, 200 )
    },
    innovationInit: {
      0: parallaxScroll( $("#innovationBgL"), -500, 0, 1, 200 ),
      1: parallaxScroll( $("#innovationBgR"), -500, 0, 1, 200 ),
      2: parallaxPinner( $("#innovationFocus"), $("#innovationFocus"), 0.25, 300 )
    },
    testimonialInit: {
      0: bamboo(document.getElementById("testimonialSlider"), {
          autoPlay: false,
          timeout: 999999999999999999999999999,
          speed: 9999999999999999999999999999,
          hideDot: false,
          hideArrow: false,
          prev: document.querySelector('.prev'),
          next: document.querySelector('.next'),
          dots: document.querySelector('.dots')
      })
    },
    lifeInit: {
      0: bamboo(document.getElementById("lifeSlider"), {
          autoPlay: false,
          timeout: 999999999999999999999999999,
          speed: 9999999999999999999999999999,
          hideDot: false,
          hideArrow: false,
          prev: document.querySelector('.prev'),
          next: document.querySelector('.next'),
          dots: document.querySelector('.dots')
      })
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
  console.log("Main: " + new Date().toUTCString());
})();
  
  
  
  


