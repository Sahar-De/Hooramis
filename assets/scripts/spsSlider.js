
const swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: false,
    },
    navigation: {
        nextEl: '.swiper-button-nextN',
        prevEl: '.swiper-button-prevP',
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 7,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        760: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 2,
        },
    },
});

console.log("Swiper Details:",swiper);

