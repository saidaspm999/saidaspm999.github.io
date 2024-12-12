// Select the slider container and slides
const sliderContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to go to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Pause sliding on hover
sliderContainer.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

// Resume sliding when not hovering
sliderContainer.addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 3000);
});
