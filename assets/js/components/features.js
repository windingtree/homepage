const $featureNav = $('.js-feature-nav');

if (Modernizr.mq(MQ.up)) {
    $featureNav.on('click', function() {
        const $this = $(this);
        const index = $this.attr('href');
        const transitionDuration = 200;

        $featureNav.removeClass('is-active');
        $this.addClass('is-active');

        $('.js-feature')
            .stop(0)
            .slideUp(transitionDuration);
        $('.js-feature[data-is="' + index + '"]')
            .stop(0)
            .slideDown(transitionDuration);

        return false;
    });
}

