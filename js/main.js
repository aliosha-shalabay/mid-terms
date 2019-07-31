$("input[type='number']").inputSpinner();
jQuery(document).ready(function () {
    $('.slider-feedbakc').slick({
        prevArrow: false,
        nextArrow: false

    });

    $('.next-feed').click(function(){
        $(".slider-feedbakc").slick('slickNext');
        $(".slider-feedbakc2").slick('slickNext');
    });
    $('.prev-feed').click(function(){
        $(".slider-feedbakc").slick('slickPrev');
        $(".slider-feedbakc2").slick('slickPrev');
    });

    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }],
    });

    $('.slider-feedbakc2').slick({
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }],
    });
});
