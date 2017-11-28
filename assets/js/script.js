jQuery(document).ready(function($) {
    new WOW({
        scrollContainer: '#page'
    }).init();

    var mainMenu = $('.main-menu');
    var toggleMenu = $('.toggle-menu');

    toggleMenu.bind('click', function () {
        mainMenu.toggleClass('active');
    });

});