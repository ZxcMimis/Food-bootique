import { getDiscountProducts } from "../fetchs/getDiscountProducts";
getDiscountProducts().then((products) => {
    document.querySelector("").innerHTML = products
    .map(
        ({_id, name, img, price}) => `
         <li id='${_id}' class="discount__item">
        <svg class="discount__svg-discount">
          <use href="./svg/icons.svg#discount"></use>
        </svg>
        <div class="discount__box-img">
          <img
            src="${img}"
            alt="${name}"
            class="discount__image"
          />
        </div>
        <div class="discount__svg-price">
          <h3 class="discount__item-title">${name}</h3>
          <div class="discount__item-wrap">
            <p class="discount__price">$${price}</p>
            <div class="discount__svg-container">
              <svg class="discount__basket">
                <use href="./svg/icons.svg#cart"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
      `
    )
    .join("")
})