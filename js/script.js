"use strict";

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//===============================================================;
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
;
