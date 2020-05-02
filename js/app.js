var swiper = new Swiper(".swiper-container", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {

            $('.arrow-up').fadeIn(1000);
        } else {
            $('.arrow-up').fadeOut(1000);

        }
    });
});


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " loader-hidden";
});