$(function () {

    // Calculate Navbar Height And Header Top Margin

    function test() {

        var navHeight = $("nav.navbar").outerHeight();

        $("section.header").css("margin-top", navHeight);

        console.log(navHeight);

    };

    test();

    $(window).on("resize", function () {

        test();

    });
    

});
