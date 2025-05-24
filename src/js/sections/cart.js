import { getProduct } from "../fetchs/getProduct";

if (!Object.keys(localStorage).includes("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const makesMarkup = () => {
  document.querySelector("#cart-length").textContent = JSON.parse(
    localStorage.getItem("cart")
  ).length;
  document.getElementById("cart-list").innerHTML = "";
  if (JSON.parse(localStorage.getItem("cart")).length === 0) {
    document.getElementById("cart-body").classList.add("display-none");
    document.getElementById("cart-nobody").classList.remove("display-none");
    return;
  } else {
    document.getElementById("cart-body").classList.remove("display-none");
    document.getElementById("cart-nobody").classList.add("display-none");
  }
  JSON.parse(localStorage.getItem("cart")).forEach(async (product) => {
    await getProduct(product.id).then(
      ({ _id, img, name, category, size, price }) => {
        document.getElementById("cart-list").insertAdjacentHTML(
          "beforeend",
          `<li id="${_id}" data-product="true" class="cart__item">
            <button data-productclose="true" class="cart__close">
              <svg class="cart__dagger" width="20" height="20">
                <use href="./svg/icons.svg#close"></use>
              </svg>
            </button>
            <div class="cart__wrapper">
              <img src="${img}" alt="${name}" class="cart__img" />
            </div>
            <div class="cart__text">
              <h3 class="cart__header">${name}</h3>
              <ul class="cart__infos">
                <li class="cart__info">
                  Category: <span class="cart__value">${category}</span>
                </li>
                <li class="cart__info">
                  Size: <span class="cart__value">${size}</span>
                </li>
              </ul>
              <div class="cart__down">
                <p class="cart__dollars">$<span class="cart__cost">${price}</span></p>
                <div data-cart='count' class="cart__count">
                  <button data-action='minus' class="cart__action">
                    <svg class="cart__operation" width="14" height="14">
                      <use href="./svg/icons.svg#minus"></use>
                    </svg>
                  </button>
                  <p data-action="count" class="cart__countnum">${
                    JSON.parse(localStorage.getItem("cart")).find(
                      (item) => item.id === _id
                    ).count
                  }</p>
                  <button data-action='plus' class="cart__action">
                    <svg class="cart__operation" width="14" height="14">
                      <use href="./svg/icons.svg#plus"></use>
                    </svg>
                  </button>
                </div>
              </div>  
            </div>
          </li>`
        );
      }
    );
  });
};

const countPrice = () => {
  document.querySelector("#cart-price").textContent = "0";
  JSON.parse(localStorage.getItem("cart")).forEach(async (item) => {
    await getProduct(item.id).then(({ price }) => {
      let sum = Number.parseFloat(
        document.querySelector("#cart-price").textContent
      );
      sum += item.count * price;
      document.querySelector("#cart-price").textContent = sum.toFixed(2);
    });
  }, 0);
};

makesMarkup();
countPrice();

document.querySelector("#cart-list").addEventListener("click", (e) => {
  if (
    e.target.dataset.productclose === "true" ||
    e.target.closest(`[data-productclose="true"]`)
  ) {
    const array = JSON.parse(localStorage.getItem("cart"));
    const index = array.indexOf(
      array.find(
        (item) => item.id === e.target.closest(`[data-product="true"]`).id
      )
    );
    array.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(array));
    makesMarkup();
    countPrice();
  } else if (
    e.target.dataset.action === "plus" ||
    e.target.closest(`[data-action="plus"]`)
  ) {
    const array = JSON.parse(localStorage.getItem("cart"));
    let count = array.find(
      (item) => item.id === e.target.closest(`[data-product="true"]`).id
    ).count;
    count += 1;
    e.target
      .closest(`[data-product="true"]`)
      .querySelector(`[data-action="count"]`).textContent = count;
    array.find(
      (item) => item.id === e.target.closest(`[data-product="true"]`).id
    ).count = count;
    localStorage.setItem("cart", JSON.stringify(array));
    countPrice();
  } else if (
    e.target.dataset.action === "minus" ||
    e.target.closest(`[data-action="minus"]`)
  ) {
    const array = JSON.parse(localStorage.getItem("cart"));
    let count = array.find(
      (item) => item.id === e.target.closest(`[data-product="true"]`).id
    ).count;
    if (count <= 1) {
      return;
    }
    count -= 1;
    e.target
      .closest(`[data-product="true"]`)
      .querySelector(`[data-action="count"]`).textContent = count;
    array.find(
      (item) => item.id === e.target.closest(`[data-product="true"]`).id
    ).count = count;
    localStorage.setItem("cart", JSON.stringify(array));
    countPrice();
  }
});

document.querySelector("#cart-del").addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify([]));
  document.getElementById("cart-list").innerHTML = "";
  makesMarkup();
});
