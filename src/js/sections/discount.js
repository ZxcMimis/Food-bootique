import { getDiscountProducts } from "../fetchs/getDiscountProducts";
getDiscountProducts().then((products) => {
    let markUp = "";
    for (let index = 0; index < 2; index+= 1) {
        markUp += `
             <li id='${products[index]._id}' class="discount__item">
            <svg class="discount__svg-discount">
              <use href="./svg/icons.svg#discount"></use>
            </svg>
            <div class="discount__box-img">
              <img
                src="${products[index].img}"
                alt="${products[index].name}"
                class="discount__image"
              />
            </div>
            <div class="discount__svg-price">
              <h3 class="discount__item-title">${products[index].name}</h3>
              <div class="discount__item-wrap">
                <p class="discount__price">$${products[index].price}</p>
                <div class="discount__svg-container">
                  <svg class="discount__basket">
                    <use href="#cart"></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          `
        
    }
    document.querySelector(".discount__list").innerHTML = markUp
})