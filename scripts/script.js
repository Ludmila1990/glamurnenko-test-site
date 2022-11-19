$(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
        $('.header').addClass('header_fixed');
    } else {
        $('.header').removeClass('header_fixed');
    }
});

$(document).ready(function(){
    $("#scroll-up").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });
});






 

