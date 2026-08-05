const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Create the sliding underline
const indicator = document.createElement("span");
indicator.classList.add("nav-indicator");
navbar.appendChild(indicator);

function moveIndicator(link) {
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.left = `${link.offsetLeft}px`;
}

// Set initial position
window.addEventListener("load", () => {
    const activeLink = document.querySelector(".navbar a.active");
    if (activeLink) moveIndicator(activeLink);
});

// Move underline when clicking
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
        moveIndicator(this);
    });
});

// Update active section while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);

            if (activeLink) {
                activeLink.classList.add("active");
                moveIndicator(activeLink);
            }
        }
    });
});

// Recalculate on resize
window.addEventListener("resize", () => {
    const activeLink = document.querySelector(".navbar a.active");
    if (activeLink) moveIndicator(activeLink);
});