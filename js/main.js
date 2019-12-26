var navActive = function navActive() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
  };
  
   $(window).scroll(function() {
      if ($(window).scrollTop() < 200) navActive();
   });
  
  (function init() {
    navActive();
    console.log("Init main: " + new Date().toUTCString());
  })();