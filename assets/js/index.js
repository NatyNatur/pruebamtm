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


    $('.leaders-counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('#rolModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var rol_html = button.prev('h2').html();
        var img = button.prevAll('img').first().attr('src');
        console.log(img);
        var rol_sub = button.data('sub');
        var rol_descr = button.data('descr');

        var modal = $(this)
        modal.find('.modal-title').text(rol_html);
        modal.find('.modal-body .modal-img').attr('src', img);
        modal.find('.modal-body .modal-rol-descr').text(rol_descr);
        modal.find('.modal-body .modal-rol-sub').text(rol_sub);
    })
});