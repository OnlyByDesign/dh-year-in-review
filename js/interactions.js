/* ==== DIALOGUE 2019 INTERACTION SCRIPT ==== */
$(window).scroll(function() {
    if ($('.header').offset().top > 100) {
      $(this).classList.toggle('active');
    } else {
      $(this).classList.toggle('active');
    };
});