<!--  On Page Load Animations-->

$(document).ready(function () {
    $('html, body').css({
        height: '100%'
    });
});
$(window).on('load', function() {
    $('.cover').velocity({
        opacity: 1
    }, 500, '[200, 20]');
    window.setTimeout("coverPlay();", 1000); //call fade in 1 seconds
});
function coverPlay() {
    $(".cover").velocity("fadeOut", {duration: 200});
    $(".nav-drop-link").velocity("fadeIn", {
        delay: 400,
        duration: 1400
    });
    $(".mid-float-left").velocity({
        delay: 300,
        opacity: 1,
        translateX: '100px'
    }, 1400, '[200, 20]');
    $(".wrapper-prof")
        .css('display', 'table-cell')
        .animate(
            { opacity: 1 },
            { queue: false, duration: 2000 }
        );
    $(".credit").velocity("fadeIn", {
        delay: 200,
        duration: 1400
    });
}

function profileLoad () {
    $('.quote-float').css('opacity', 0);
    $('.mid-float-left, .mid-float-right').velocity({
        opacity: 0,
        translateX: '250px'
    }, 300);
}

<!--  Menu Animations-->

var menuVis = false;
function menuAnim() {
    $(".wrapper-nav").stop();
    $('.nav-drop-link').toggleClass('rotated');
    $('.nav-drop-link a').toggleClass('opac');
    if (menuVis === false){
        $(".wrapper-nav")
            .css('opacity', 0)
            .slideDown('fast')
            .animate(
                { opacity: 1 },
                { queue: false, duration: 'slow' }
            );
        menuVis = true;
    } else {
        $(".wrapper-nav")
            .css('opacity', 1)
            .slideUp('slow')
            .animate(
                { opacity: 0 },
                { queue: false, duration: 'fast' }
            );
        menuVis = false;
    }
}

var se = "/  /  /  /  /  /  /  /  /";
var ma = "/  /  /  /  /  /  /  /  /  /";
var de = "/  /  /  /  /  /  /  /  /  /  /  /  /  /";
var pa = "/  /  /  /  /  /  /  /";
var ja = "/  /  /  /  /  /  /";

$(document).ready(function () {
    var timer;

    $('#se')
        .mouseenter(function () {
            timer = window.setTimeout(function () {
                $('.changer')
                    .text(se);
            }, 450);
        })
        .mouseleave(function () {
            window.clearTimeout(timer);
        });

    $('#ma')
        .mouseenter(function () {
            timer = window.setTimeout(function () {
                $('.changer')
                    .text(ma);
            }, 450);

        })
        .mouseleave(function () {
            window.clearTimeout(timer);
        });

    $('#de')
        .mouseenter(function () {
            timer = window.setTimeout(function () {
                $('.changer')
                    .text(de);
            }, 450);
        })
        .mouseleave(function () {
            window.clearTimeout(timer);
        });

    $('#pa')
        .mouseenter(function () {
            timer = window.setTimeout(function () {
                $('.changer')
                    .text(pa);
            }, 450);
        })
        .mouseleave(function () {
            window.clearTimeout(timer);
        });

    $('#ja')
        .mouseenter(function () {
            timer = window.setTimeout(function () {
                $('.changer')
                    .text(ja);
            }, 450);
        })
        .mouseleave(function () {
            window.clearTimeout(timer);
        });
});

$(function(){
    $('.bubble').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");

        setTimeout(function(){
            window.location = goTo;
        },500);
    });
});