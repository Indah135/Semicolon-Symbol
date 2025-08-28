const text = `"Your story isn’t over yet; the semicolon reminds us to keep going."`;
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50); // kecepatan ketik
  }
}
typeEffect();

document.querySelector(".show-image").addEventListener("click", function(e) {
  e.preventDefault(); 
  const imgContainer = document.getElementById("image-container");

  if (imgContainer.style.display === "none" || imgContainer.style.display === "") {
    imgContainer.style.display = "block";
  } else {
    imgContainer.style.display = "none";
  }
});