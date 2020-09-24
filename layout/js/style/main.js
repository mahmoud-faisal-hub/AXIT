$(function () {

    // Calculate Navbar Height And Header Top Margin

    function test() {

        var navHeight = $("nav.navbar").outerHeight();

        $("section.header").css("margin-top", navHeight);

    };

    test();

    $(window).on("resize", function () {

        test();

    });
    
    // Features Tab System

    $(".features .tabs ul li").on("click", function() {

        var tab = $("#" + $(this).data("target"));
        $(this).addClass("active").siblings().removeClass("active");
        $(tab).siblings().animate({
            opacity: "0",
        }, function() {

            $(this).css({
                "display": "none",
                "opacity": "1"
            });
            $(tab).fadeIn();

        });

    });

});
