const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

// Show next slide
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length; // Cycle to the next slide
    updateSlidePosition();
});

// Show previous slide
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length; // Cycle to the previous slide
    updateSlidePosition();
});

// Update slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlidePosition();
}, 5000);
