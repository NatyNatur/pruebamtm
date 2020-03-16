var modal;
var modal_button;
var rol_color;


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        checkVisible: false,
        responsiveClass: true,
        responsive: {
            0: {
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    // cambiar fondo header al hacer scroll
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("bkgr-navbar");
        } else {
            $("nav").removeClass("bkgr-navbar");
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        var nav_height = $('nav')[0].scrollHeight;
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            if (hash == '#contact') {
                $('div.moreInfo').show();
            }

            $('html, body').animate({
                scrollTop: $(hash).offset().top - nav_height
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        }
    });

    $('.closeMoreInfo').on('click', function() {
        $('div.moreInfo').hide();
    })

    $('.getInfoForm').on('click', function(event) {
        //event.preventDefault();
        // validar inputs
        console.log('formulario');
    })

    $('.leaders-counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now).toLocaleString());
                // revisar formato para 1000
            }
        });
    });

    $('#rolModal').on('show.bs.modal', function(event) {
        modal_button = $(event.relatedTarget) // Button that triggered the modal
            //var rol_html = button.prev('h2').html();
        var img = modal_button.prevAll('img').first().attr('src');
        var rol_name = modal_button.data('rolname');
        var rol_sub = modal_button.data('sub');
        var rol_descr = modal_button.data('descr');
        rol_color = modal_button.data('color');

        modal = $(this);
        modal.find('.modal-header').addClass('rol-' + rol_color);
        modal.find('.modal-title').text(rol_name);
        modal.find('.modal-body .modal-img').attr('src', img);
        modal.find('.modal-body .modal-rol-descr p').text(rol_descr);
        modal.find('.modal-body .modal-rol-sub').text(rol_sub).addClass(rol_color + 'Font');
    })

    // remover clases de colores al cerrar modal.
    $("#rolModal").on('hide.bs.modal', function(event) {
        modal.find('.modal-header').removeClass('rol-' + rol_color);
        modal.find('.modal-body .modal-rol-sub').removeClass(rol_color + 'Font');
    })
});