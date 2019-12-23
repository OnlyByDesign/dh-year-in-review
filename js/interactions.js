$(window).scroll(function() {
    var target = $(".header");
    $(window).scrollTop() > 100 ? target.addClass('active') : target.removeClass('active');
});

console.log('init interaction');