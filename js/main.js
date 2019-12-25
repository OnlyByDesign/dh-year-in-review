var navActive = function navActive() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
  }; // This changes the nav after 100px of scrolling | adds 'active' class
  
  $(window).scroll(function() {
    if ($(window).scrollTop() < 200) navActive();
  }); // On scroll functions
  
  (function init() {
    navActive();
    console.log('Init main');
  })(); // Initializer for main.js