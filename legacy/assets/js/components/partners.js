window.addEventListener('load', function() {
    $('.js-partners-slider').each(function(index) {
        let slickOptions = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            draggable: false,
            pauseOnFocus: true,
            pauseOnHover: true,
            speed: 10000,
            touchMove: false,
            variableWidth: true
        };

        if (isEven(index + 1)) {
            $.extend(slickOptions, {
                rtl: true
            });
        }

        $(this).slick(slickOptions);
    });
});
