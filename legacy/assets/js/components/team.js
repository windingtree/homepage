$(function () {
    const $teamMemberLink = $('.js-team-member-link');

    $teamMemberLink.on('click', function () {
        const $this = $(this);

        $teamMemberLink
            .not($this)
            .closest('.js-team-member')
            .find('.js-team-member-text')
            .hide();

        $this
            .closest('.js-team-member')
            .find('.js-team-member-text')
            .toggle();

        return false;
    });
});
