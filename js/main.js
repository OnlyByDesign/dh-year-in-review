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
 * ========== DOM FUNCTIONS ============
 * =====================================
 * ==================================*/
var navActive = function navActive() {
  $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
}; // This changes the nav after 100px of scrolling | adds 'active' class

 $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
 });

(function init() {
  navActive();
  console.log("Init main: " + new Date().toUTCString());
})(); // Initializer for main.js