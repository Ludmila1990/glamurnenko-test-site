window.onscroll = () => {
    const header = document.querySelector('.header');
    const Y = window.scrollY;

    if (Y > 650) {
        header.classList.add('header_fixed');
    }else {
        header.classList.remove('header_fixed');
    }
}

document.getElementById("scroll-up").onclick = function () {
    document.getElementById("main").scrollIntoView({behavior: "smooth"});
}

 
