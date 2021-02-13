(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    $('.slick-slider').slick({
        centerMode: true,
        slidesToShow: 5,
        dots: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
    });
    //Slider
    // $('.about-slider-v1').slick();
    $('.about-slider-v1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    dots: true,
                    arrows: true,
                    swipe: true,
                    swipeToSlide: true,
                }
            }
        ]
    });
    // Service Slider

    $('.service-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.service-nav'
    });
    $('.service-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.service-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });






    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });





    $('.ofcavas-menu ul li a').on('click', function(e) {
        e.preventDefault();
        $('.ofcavas-menu').removeClass('current');
    });

    $('.ofcavas-menu ul li a').on('click', function(e) {
        e.preventDefault();
        $('.ofcavas-menu').removeClass('current');
    });


    // Hamburger-menu
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
    });


    $('.ofcavas-menu ul li a').on('click', function() {
        $('.hamburger-menu .line-top, .ofcavas-menu').removeClass('current');
        $('.hamburger-menu .line-center').removeClass('current');
        $('.hamburger-menu .line-bottom').removeClass('current');
    });






})(jQuery);