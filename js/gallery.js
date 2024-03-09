const smallImages = document.querySelectorAll("li img");
const bigImage = document.getElementById("bigImage");
const imageCaption = document.getElementById("caption");

function selectBigImage(event) {
   // Use alt property to find color
   const color = event.srcElement.alt;

   // Apply CSS class to add greyscale effect
   smallImages.forEach(currentImage => {
      currentImage.classList.remove("active");
   });
   event.target.classList.add("active");

   // Update big image to a new picture
   bigImage.src = "images/flowers-" + color + "-large.jpg";
   imageCaption.innerHTML = "A " + color + " flower";
}

// For each image found add click event
smallImages.forEach(currentImage => {
   currentImage.addEventListener("click", selectBigImage);
});

