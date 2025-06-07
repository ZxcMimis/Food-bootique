import { getFilteredProducts } from "../fetchs/getFilteredProducts";



const productsListContainer = document.querySelector("#products-list");

getFilteredProducts("", "", 1, "").then((data) => {
    productsListContainer.innerHTML = data.results
        .map(
            ({ _id, name, img, category, size, price, popularity }) => `
    <li id="${_id}" class="products__item">
        <div class="products__container_img">
            <img src="${img}" alt="${name}" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <button class="products__svg_btn add-to-cart-btn">
                <svg class="products__basket" width="18" height="18">
                    <use href="#cart"></use>
                </svg>
            </button>
        </div>
    </li>
    `
        )
        .join("");
});


productsListContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.add-to-cart-btn');
    if (!clickedButton) {
        return;
    }


    const useElement = clickedButton.querySelector('use');
    if (useElement) {
        const currentIcon = useElement.getAttribute('href');
        if (currentIcon === '#cart') {
            useElement.setAttribute('href', '#check'); 
        }
    }
});





















