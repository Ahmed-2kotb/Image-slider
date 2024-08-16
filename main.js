document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-container img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const slideNumber = document.getElementById("slide-number");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, idx) => {
            img.classList.remove("active");
            if (idx === index) {
                img.classList.add("active");
            }
        });
        slideNumber.textContent = `Slide #${index + 1}`;
    }

    showImage(currentIndex);

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            showImage(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex += 1;
            showImage(currentIndex);
        }
    });
});
