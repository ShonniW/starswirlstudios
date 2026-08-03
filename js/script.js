document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", function () {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    document.getElementById("prev").addEventListener("click", function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    showSlide(current);
});