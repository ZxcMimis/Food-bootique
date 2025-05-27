const backdrop = document.querySelector(".order__modal");
const orderButton = document.querySelector(".order-button");
const closeButton = document.querySelector(".order__close-btn");

orderButton.addEventListener("click", () => {
  backdrop.classList.toggle("is-hidden");
  document.body.style.overflow = "hidden";
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.classList.toggle("is-hidden");
    document.body.style.overflow = "visible";
  }
});

closeButton.addEventListener("click", () => {
  backdrop.classList.toggle("is-hidden");
  document.body.style.overflow = "visible";
});
