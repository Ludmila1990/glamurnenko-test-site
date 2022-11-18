$(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
        $('.header').addClass('header_fixed');
    } else {
        $('.header').removeClass('header_fixed');
    }
});

document.getElementById("scroll-up").onclick = function () {
    document.getElementById("main").scrollIntoView({behavior: "smooth"});
}




 

