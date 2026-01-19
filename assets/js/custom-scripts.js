$(document).ready(function(){


    // header section scripts start ----------------------------------------------------------
     $('.foodie_header_menu li:has(ul)').addClass('have-submenu');

    // mobile menu open/close script start
    // $(".mobile_burger_btn").click(function(){
    //     $(".header-menu_wrap").addClass("opened");
    // });
    // $(".mobile-menu-close-btn").click(function(){
    //     $(".header-menu_wrap").removeClass("opened");
    // });
    $(".mobile-menu-event-btn").click(function(){
        $(".header-menu_wrap").toggleClass("opened");
        $(".header-menu_wrap").removeClass("megamenu-opened");
    });
    $(".mob-sub").click(function(){
        $(this).toggleClass("active");
        $(this).children("ul").slideToggle();
    });
    // mobile menu open/close script ended



    // mobile megamenu ui start
    $(".header-mob-recipe-btn").click(function(){
        $(".header-menu_wrap").toggleClass("opened megamenu-opened");
    })
    // mobile megamenu ui ended

    // header section scripts ended ----------------------------------------------------------


    // home hero section scripts start ----------------------------------------------------------
    $(".foodielandHero").slick({
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
        {
        breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '5px',
            }
        },
    ]
    });
    // home hero section scripts ended ----------------------------------------------------------


    // home category section scripts start ----------------------------------------------------------
    $(".foodielandCatSlider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
        breakpoint: 1367,
            settings: {
                slidesToShow: 5,
            }
        },
        {
        breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
        breakpoint: 680,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
    });
    // home category section scripts ended ----------------------------------------------------------
    $(".heart").click(function(){
        $(this).closest(".food-cards").toggleClass("pink-on");
    });


   

    AOS.init();



})