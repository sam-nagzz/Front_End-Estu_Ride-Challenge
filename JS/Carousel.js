// JavaScript source code

document.addEventListener('DOMContentLoaded', function () {
    const carouselsContainers = document.querySelectorAll('.room-option');

    carouselsContainers.forEach(function (carouselContainer) {
        const images = carouselContainer.querySelectorAll('.carousel-images img');
        const dots = carouselContainer.querySelectorAll('.carousel-indicators .dot');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');
        let currentImageIndex = 0;

        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.toggle('visible', index === currentImageIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentImageIndex)
            });
        }

        prevButton.addEventListener('click', function () {
            currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateCarousel();
        });

        updateCarousel();
    });
});