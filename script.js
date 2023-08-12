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

// Get cookies string
let cookies = document.cookie.split(';');
for (let i = 0; i < cookies.length; i++) {
  let value = cookies[i].split('=');
  // If we find our visit cookie update paragraph with the latest timestamp
  if (value[0] === 'visit') {
    console.log(value[1]);
    document.getElementById("lastVisit").innerHTML = "Your last visit is: " + value[1];
  }
}

// Update cookie
const date = new Date();
document.cookie = "visit=" + date.toUTCString();