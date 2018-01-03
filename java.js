$(document).ready(function () {
    $(".timeline").slideDown(5000);
    $("#page_wrapper").slideDown(8000);
    $(".container_drop").click(function () {
        $(".container_drop").toggleClass("change");
        $(".dropdown").slideToggle();
    });

    $(".project").click(function () {
        $("#slideup_arrow").fadeIn(700);
        $(".active").slideUp();
        $(".project_info").removeClass("active");
        $(".project_info").addClass("active");
        $("html, body").animate({
            scrollTop: 280
        }, 800);
    });

    /*---------- PROJECT INFORMATION ------*/

    $("#tommy").click(function () {
        $("#info_tommy").slideDown(900);
    });
    $("#cphdox").click(function () {
        $("#info_cphdox").slideDown("slow");
    });
    $("#redesign").click(function () {
        $("#info_redesign").slideDown("slow");
    });
    $("#kea_rent").click(function () {
        $("#info_kea_rent").slideDown("slow");
    });
    $("#reachout").click(function () {
        $("#info_reachout").slideDown("slow");
    });
    $("#moonbar_probably").click(function () {
        $("#info_moonbar_probably").slideDown("slow");
    });
    $("#sexogsamfund").click(function () {
        $("#info_sexogsamfund").slideDown("slow");
    });
    $("#stilartsite").click(function () {
        $("#info_stilartsite").slideDown("slow");
    });

    /*---------- RETURN ARROW ---------*/
    $("#slideup_arrow").on("click", SwitchBack);

    function SwitchBack() {
        $(".project_info").slideUp();
        $("#slideup_arrow").hide();
        $(".project_info").removeClass("active");
        console.log("Switch færdig")
    }
});
