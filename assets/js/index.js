$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        //autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        checkVisible: false,
    });
});