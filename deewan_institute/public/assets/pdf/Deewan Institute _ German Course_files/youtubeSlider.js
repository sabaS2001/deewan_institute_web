const carousel = document.getElementById('carousel');
const mainVideo = document.getElementById('main-video');
const options = document.querySelectorAll('.video-option');
options.forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all
        options.forEach(opt => opt.classList.remove('active'));
        // Add active to clicked
        option.classList.add('active');
        // Update main video
        const videoId = option.getAttribute('data-video-id');
        mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
    });
});

