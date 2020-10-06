let slideAutoIndex = 0;
showAutoSlides();

function plusSlides(n) {
    showAutoSlides(slideAutoIndex += n);
}

function currentSlide(n) {
    showAutoSlides(slideAutoIndex = n)

}

function showAutoSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    /*AUTO SLIDER */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideAutoIndex++;
    if (slideAutoIndex > slides.length) {
        slideAutoIndex = 1
    }
    slides[slideAutoIndex - 1].style.display = "block";
    setTimeout(showAutoSlides, 20000);
}