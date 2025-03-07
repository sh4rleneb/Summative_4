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
