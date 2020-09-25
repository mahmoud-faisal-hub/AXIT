$(function () {
    // Calculate Navbar Height And Header Top Margin

    function test() {
        var navHeight = $("nav.navbar").outerHeight();

        $("section.header").css("margin-top", navHeight);
    }

    test();

    $(window).on("resize", function () {
        test();
    });

    // Sync The Navbar With The Page On Scroll

    $("nav.navbar .navbar-brand").on("click", function () {
        $("body, html").animate(
            {
                scrollTop: 0,
            },
            1500
        );
    });

    $("nav.navbar .navbar-nav .nav-item").on("click", function () {
        $("body, html").animate(
            {
                scrollTop: $(
                    "#" + $(this).find("a.nav-link").data("target")
                ).offset().top,
            },
            1500
        );
    });

    $(window).on("scroll", function () {
        $("section[id]").each(function () {
            if (
                $(window).scrollTop() + $(window).outerHeight() / 4 >=
                $(this).offset().top
            ) {
                var navLinks = "nav.navbar .navbar-nav li.nav-item a.nav-link";
                $(navLinks).parent().removeClass("active");
                $(navLinks + "[data-target = '" + $(this).attr("id") + "']")
                    .parent()
                    .addClass("active");
            }
        });
        // if (
        //     $(window).scrollTop() >=
        //     $("section.header").offset().top +
        //         $("section.header").outerHeight() +
        //         $("nav.navbar").outerHeight()
        // ) {
        //     $("nav.navbar").css({
        //         opacity: "0.8",
        //     });
        // } else {
        //     $("nav.navbar").css({
        //         opacity: "1",
        //     });
        // }
    });

    // Features Tab System

    $(".features .tabs ul li").on("click", function () {
        var tab = $("#" + $(this).data("target"));
        $(this).addClass("active").siblings().removeClass("active");
        $(tab)
            .siblings()
            .animate(
                {
                    opacity: "0",
                },
                function () {
                    $(this).css({
                        display: "none",
                        opacity: "1",
                    });
                    $(tab).fadeIn();
                }
            );
    });

    // Scroll To Top Button

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= $(".section-3").offset().top) {
            if ($(".scroll-to-top").css("display") !== "flex") {
                $(".scroll-to-top").css("display", "flex").hide().fadeIn();
            }
        } else {
            if ($(".scroll-to-top").css("display") !== "none") {
                $(".scroll-to-top").fadeOut();
            }
        }
    });

    $(".scroll-to-top").on("click", function () {
        $("body, html").animate(
            {
                scrollTop: 0,
            },
            1500
        );
    });
});
