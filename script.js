const button = document.querySelector(".read-more-button");
const paragraphToReveal = document.querySelector(".primary-paragraph-hidden");

button.addEventListener("click", () => {
  paragraphToReveal.style.display = "block";
});
