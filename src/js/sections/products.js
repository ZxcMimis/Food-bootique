import { getFilteredProducts } from "../fetchs/getFilteredProducts";

getFilteredProducts("", "", 1, "").then((data) => {

    document.querySelector("#products-list").innerHTML = data.results
        .map(
            ({
                _id,
                name,
                img,
                category,
                size,
                price,
                is10PercentOff,
                popularity,
            }) => `
    <li id="${_id}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${img}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
        <p class="products__price">$${price}</p>
            <button class="products__svg_btn">
                <svg class="products__basket">
                    <use href="#cart"></use>
                </svg>
            </button>
        </div>
    </li>
    `
        )
        .join("");

});





















