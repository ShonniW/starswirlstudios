const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    showSlide(current);
});

showSlide(current);