$(function () {
    $('.tm-bio-link').click(function(){
        $(".tm-bio-text").not($(this).siblings(".tm-bio-text")).hide();
        $(this).siblings(".tm-bio-text").toggle();
    });
});