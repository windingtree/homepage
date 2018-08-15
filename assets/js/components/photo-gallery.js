$(function () {

    $('.js-photo-gallery').slick({
        mobileFirst: true,

        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><i class="mdi mdi-48px mdi-chevron-left text-primary"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="mdi mdi-48px mdi-chevron-right text-primary"></i></button>',
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 3
                }
            }
        ]
    });

    $('#photoGalleryModal').on('show.bs.modal', function (event) {
        const $figure = $(event.relatedTarget);
        const imageSrc = $figure.find('> img').attr('src');
        const $modal = $(this);

        $modal.find('img').attr('src', imageSrc);
    });

});
