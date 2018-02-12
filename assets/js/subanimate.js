$(document).ready(function () {
    $('html, body').css({
        height: '100%'
    });
    coverPlay();
});

function coverPlay() {
    $(".nav-drop-link").velocity("fadeIn", {
        delay: 200,
        duration: 1400
    });
    $(".wrapper-text").velocity("fadeIn", {
        delay: 200,
        duration: 1400
    });
    $(".credit").velocity("fadeIn", {
        delay: 200,
        duration: 1400
    });
}

var menuVis = false;

function menuAnim() {
    $(".wrapper-nav").stop();
    $('.nav-drop-link').toggleClass('rotated');
    $('.nav-drop-link a').toggleClass('opac');
    if (menuVis === false) {
        $(".wrapper-nav")
            .css('opacity', 0)
            .slideDown('fast')
            .animate(
                {opacity: 1},
                {queue: false, duration: 'slow'}
            );
        menuVis = true;
    } else {
        $(".wrapper-nav")
            .css('opacity', 1)
            .slideUp('slow')
            .animate(
                {opacity: 0},
                {queue: false, duration: 'fast'}
            );
        menuVis = false;
    }
}