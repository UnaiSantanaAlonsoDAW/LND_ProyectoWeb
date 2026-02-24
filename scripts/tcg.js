const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

const cards = document.querySelectorAll(".tcg-card img");

cards.forEach(card => {
  card.addEventListener("click", () => {

    popup.style.display = "flex";
    popupImg.src = card.src;

  });
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};

popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};