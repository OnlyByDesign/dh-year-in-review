var navActive = function navActive() {
    $(window).scrollTop() > 100 ? $('.header').addClass('active') : $('.header').removeClass('active');
};

$(window).scroll(function() {
    navActive();
});

console.log('Init interaction');