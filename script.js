//Slide-show
const buttons = document.querySelectorAll("[data-carousel-button]")
// Image carousel
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Snowflakes configuration
const colors = [
    "rgba(255,255,255,1)",
    "rgba(222,184,142,1)",
    "rgba(232,248,255,1)",
    "rgba(135,143,145,1)"
];

const imageUrl = [
    "img/snowflake1.png",
    "img/snowflake2.png",
    "img/snowflake3.png",
    "img/snowflake4.png",
];

const options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    color: colors,
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: imageUrl,

    // Movement variants for snowflakes
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 4,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 3,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
};

// Initialize snowflakes on window load
window.onload = function () {
    initSparticles();
};

// Function to initialize sparticles (snowflakes)
function initSparticles() {
    const $main = document.querySelector('.falling');
    window.mySparticles = new sparticles.Sparticles($main, options);
}

