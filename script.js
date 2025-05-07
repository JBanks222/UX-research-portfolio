let slideIndex = 0;
const screenshots = ["screenshot1.png", "screenshot2.png", "screenshot3.png"]; // Add your images here!

function showSlide(index) {
  const slide = document.getElementById('slide-image');
  slide.src = screenshots[index];
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % screenshots.length;
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + screenshots.length) % screenshots.length;
  showSlide(slideIndex);
}
