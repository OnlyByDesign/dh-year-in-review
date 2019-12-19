$(window).scroll(function() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
});

console.log('init interaction');