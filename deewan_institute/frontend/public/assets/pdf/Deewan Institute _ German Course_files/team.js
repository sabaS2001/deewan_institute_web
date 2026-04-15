const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1,       // Default: 1 slide on mobile
    spaceBetween: 20,       // Space between slides
    loop: true,             // Infinite loop
    autoplay: {
        delay: 3000,          // Auto-slide every 3s (optional; remove if not wanted)
        disableOnInteraction: false,
    },
    speed: 1000,            // Animation speed
    navigation: {           // Enable arrows
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {          // Responsive: Show more slides on larger screens
        768: {                // Tablet+
            slidesPerView: 2,
        },
        1024: {               // Desktop+
            slidesPerView: 3,
        },
    },
});
