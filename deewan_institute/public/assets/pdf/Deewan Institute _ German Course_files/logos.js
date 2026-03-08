
const swiper = new Swiper('.mySwiper', {
    slidesPerView: '3',  // Adjusts to fit logos
    spaceBetween: 20,        // No gaps
    loop: true,             // Infinite loop
    autoplay: {
        delay: 2000,          // Auto-slide every 2s (adjust as needed)
        disableOnInteraction: false,  // Keeps autoplay after user interaction
    },
    speed: 1000,            // Animation speed
    autoplayDisableOnInteraction: false,  // Optional: keeps autoplay after clicks
});
