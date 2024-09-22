let currentSlide = 1;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    document.getElementById(`slide${slideNumber}`).style.display = 'block';

function nextSlide(current) {
    if (current < 14) {  // Adjust based on the total number of slides
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide(current) {
    if (current > 1) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function restart() {
    currentSlide = 1;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
