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


    //Slider
    // $('.about-slider-v1').slick();
    $('.about-slider-v1').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                dots: true,
                arrows: true,
                swipe: true,
                swipeToSlide: true,
            }
        }]
    });
    // Service Slider

    $('.service-for-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.service-nav'
    });
    $('.service-nav-one').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.service-for',
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });

    $('.service-for-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.service-nav'
    });
    $('.service-nav-two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.service-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    $('.service-for-three').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.service-nav'
    });
    $('.service-nav-three').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.service-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    $('.mobile-service-slider-one').slick({
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,

    });
    $('.mobile-service-slider-two').slick({
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,

    });
    $('.mobile-service-slider-three').slick({
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,

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