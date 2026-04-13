document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const links = document.querySelectorAll(".scroll-link");
    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 500);
        showOnScroll();
    });

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });

    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        reveals.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add("active");
            }
        });

    }

    window.addEventListener("scroll", showOnScroll);
});