const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.slider__arrow_next',
        prevEl: '.slider__arrow_prev',
    },

    pagination: {
        el: '.slider__slideNumber',
        type: 'fraction',
        renderFraction: function (currentClass) {
            return '0<span class="' + currentClass + '"></span>';
        },
    },

    autoHeight: true
});
