window.addEventListener('load', function() {
    $('.tm-bio-link').click(function(){
        $(this).siblings("tm-bio-text").toggle();
    });
});