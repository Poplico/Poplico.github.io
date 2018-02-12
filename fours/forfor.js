var open = false;
var opened = null;

function updateView(elId) {
    if (opened == elId) {
        return;
    } else if (open) {
        despand(elId);
    } else {
        expand();
    }

    function expand () {
        fadeFunc(elId, 0);
        $(".box-link").velocity("fadeOut", 400);
        $("#" + elId).css("z-index", "99");
        $("#" + elId).velocity({
            height: "100%",
            width: "100%"
        }, {
            easing: "easeInSine" // Default easing
        });
        $("#closebtn").show();
        open = true;
        opened = elId;
    }

    function despand() {
        fadeFunc(opened, 1);
        var box_link = $(".box-link");
        box_link.velocity("fadeIn", 400);
        $("#" + opened).velocity({
            height: "50%",
            width: "50%",
        }, {
            complete: setz(opened),
            easing: "easeInSine"
        });
        $("#closebtn").hide();
        open = false;
        opened = null;
    }

    function setz(elId) {
        $("#" + elId).css("z-index", "0");
    }

    function fadeFunc(cur, state) {
        var idAr = ['tl-box', 'tr-box', 'bl-box', 'br-box'];
        for (var i = 0; i < idAr.length; i++ ) {
            if (cur != idAr[i]) {
                if (state == 0) {
                    $("#" + idAr[i]).velocity("fadeOut", {duration: 300});
                } else {
                    $("#" + idAr[i]).velocity("fadeIn", {duration: 1000});
                }
            }
        }
    }
}
