document.querySelectorAll(".slideshow").forEach(slideshow => {

    const slides = slideshow.querySelectorAll(".slide");
 const colorblock = slideshow.closest(".colorblock");

const next = colorblock.querySelector(".next");
const prev = colorblock.querySelector(".prev");

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    showSlide(current);
});