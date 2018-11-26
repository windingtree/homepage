$(function () {

    $('[data-toggle="tooltip"]').tooltip()

    const $roadmapToggleBtn = $('.js-roadmap-toggle-btn');

    $roadmapToggleBtn.on('click', function () {
        if (this.getAttribute('aria-expanded') === 'true') {
            console.log('opened');
            $(this).find('.mdi').addClass('mdi-plus-circle');
            $(this).find('.mdi').removeClass('mdi-minus-circle-outline');
        } else {
            console.log('closed');
            $(this).find('.mdi').addClass('mdi-minus-circle-outline');
            $(this).find('.mdi').removeClass('mdi-plus-circle');
        }
    });
});
