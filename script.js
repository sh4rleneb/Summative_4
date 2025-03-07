document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 50) {
                card.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
        const info = this.querySelector(".more-info");
        if (info.style.display === "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    });
});

