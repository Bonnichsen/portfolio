$(document).ready(function () {
    $(".container_drop").click(function () {
        $(".container_drop").toggleClass("change");
        $(".dropdown").slideToggle();
    });

    $(".nav_home").click(function () {
        $(".timeline").slideUp();
        $("#portfolio_wrapper").slideUp();
        $(".portfolio_text").hide();
        $(".cv_text").hide();
        $(".home_text").show();
        $(".active").slideUp();
        $(".project_info").removeClass("active");
    });

    $(".nav_cv").click(function () {
        $("#portfolio_wrapper").hide();
        $(".timeline").slideDown(5000);
        $(".timeline").show();
        $(".home_text").hide();
        $(".portfolio_text").hide();
        $(".cv_text").show();
        $(".active").slideUp();
        $(".project_info").removeClass("active");
    });

    $(".nav_portfolio").click(function () {
        $(".timeline").hide();
        $("#portfolio_wrapper").slideDown(7000);
        $(".home_text").hide();
        $(".cv_text").hide();
        $(".portfolio_text").show();
        $(".active").slideUp();
        $(".project_info").removeClass("active");
    });

    $(".project").click(function () {
        $("#slideup_arrow").fadeIn(700);
        $(".active").slideUp();
        $(".project_info").removeClass("active");
        $(".project_info").addClass("active");
        $("html, body").animate({
            scrollTop: 445
        }, 900);
    });
    /*---------- PROJECT INFORMATION ------*/

    $("#tommy").click(function () {
        $("#info_tommy").slideDown(900);
    });
    $("#cphdox").click(function () {
        $("#info_cphdox").slideDown(900);
    });
    $("#redesign").click(function () {
        $("#info_redesign").slideDown(900);
    });
    $("#kea_rent").click(function () {
        $("#info_kea_rent").slideDown(900);
    });
    $("#reachout").click(function () {
        $("#info_reachout").slideDown(900);
    });
    $("#moonbar_probably").click(function () {
        $("#info_moonbar_probably").slideDown(900);
    });
    $("#sexogsamfund").click(function () {
        $("#info_sexogsamfund").slideDown(900);
    });
    $("#stilartsite").click(function () {
        $("#info_stilartsite").slideDown(900);
    });
    $("#intro_video").click(function () {
        $("#info_intro").slideDown(900);
    });
    $("#animation_kealife").click(function () {
        $("#info_animation_kealife").slideDown(900);
    });

    /*---------- RETURN ARROW ---------*/
    $("#slideup_arrow").on("click", SwitchBack);

    function SwitchBack() {
        $(".project_info").slideUp();
        $("#slideup_arrow").hide();
        $(".project_info").removeClass("active");
        console.log("Switch færdig")
    }


    /*---- RETURN TO TOP BUTTON ----*/
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top_bttn").style.display = "block";
        } else {
            document.getElementById("top_bttn").style.display = "none";
        }
    }
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
