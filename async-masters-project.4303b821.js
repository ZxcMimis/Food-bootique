const t=async(t,e,r,c)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${c}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let e="",r="",c="";const a=(e,r,c,a)=>{if(r.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`;return}t(e,r,c,a).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:c,size:a,price:o,is10PercentOff:s,popularity:d})=>`
    <li id="${t}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${r}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${c}</span></p>
        <p class="products__size">Size: <span>${a}</span></p>
        <p class="products__popularity">Popularity: <span>${d}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${o}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":` <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
                </svg>`}
            </div>
        </div>
    </li>
    `).join("")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),a(e=document.querySelector("#filters-input").value,r,1,c)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,r="all"===t.target.id?"":t.target.id,a(e,r,1,c)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,c="allAlphabet"===t.target.id?"":t.target.id,a(e,r,1,c)}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:c,size:a,is10PercentOff:o,popularity:s})=>`<li id='${t}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${r}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${c}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${a}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${s}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":` <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>`}
        </button>
      </li>`).join("")});const o=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await o(e).then(({_id:t,name:e,img:r,category:c,price:a,size:o,desc:s,is10PercentOff:d,popularity:u})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=r,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=c,document.querySelector("#product-size").textContent=o,document.querySelector("#product-popularity").textContent=u,document.querySelector("#product-price").textContent=a,document.querySelector("#product-desc").textContent=s,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:`Add to
          <svg class="product__icon" width="18" height="18">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        `})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(r.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(r)))}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(r.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(r)))}});
//# sourceMappingURL=async-masters-project.4303b821.js.map
