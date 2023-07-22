let slideIndex = 1;

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".carousel-slider img");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
}
