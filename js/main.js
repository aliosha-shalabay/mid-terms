$("input[type='number']").inputSpinner();
jQuery(document).ready(function () {
    $('.slider-feedbakc').slick({
        prevArrow: false,
        nextArrow: false

    });

    $('.next-feed').click(function(){
        $(".slider-feedbakc").slick('slickNext');
    });
    $('.prev-feed').click(function(){
        $(".slider-feedbakc").slick('slickPrev');
    });

    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
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
});
