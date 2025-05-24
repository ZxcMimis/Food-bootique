import { getProduct } from "../fetchs/getProduct";

document.querySelector("body").addEventListener("click", async (e) => {
  if (
    e.target.dataset.productadd === "true" ||
    e.target.closest("[data-productadd]")
  ) {
    return;
  }
  if (
    e.target.dataset.product === "true" ||
    e.target.closest("[data-product]")
  ) {
    document.querySelector("#product-backdrop").classList.remove("is-hidden");
    document.querySelector("body").classList.add("no-scroll");
    let id;
    if (!(e.target.id === "")) {
      id = e.target.id;
    } else {
      id = e.target.closest("[data-product]").id;
    }
    await getProduct(id).then(
      ({
        name,
        img,
        category,
        price,
        size,
        desc,
        is10PercentOff,
        popularity,
      }) => {
        document.querySelector("#product-img").src = img;
        document.querySelector("#product-img").alt = name;
        document.querySelector("#product-name").textContent = name;
        document.querySelector("#product-category").textContent = category;
        document.querySelector("#product-size").textContent = size;
        document.querySelector("#product-popularity").textContent = popularity;
        document.querySelector("#product-price").textContent = price;
        document.querySelector("#product-desc").textContent = desc;
      }
    );
  }
});

document.querySelector("#product-close").addEventListener("click", async () => {
  document.querySelector("#product-backdrop").classList.add("is-hidden");
  document.querySelector("body").classList.remove("no-scroll");
  document.querySelector("#product-img").src = "";
  document.querySelector("#product-img").alt = "";
  document.querySelector("#product-name").textContent = "";
  document.querySelector("#product-category").textContent = "";
  document.querySelector("#product-size").textContent = "";
  document.querySelector("#product-popularity").textContent = "";
  document.querySelector("#product-price").textContent = "";
  document.querySelector("#product-desc").textContent = "";
});
