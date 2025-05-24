var t=globalThis,e={},r={},c=t.parcelRequire6801;null==c&&((c=function(t){if(t in e)return e[t].exports;if(t in r){var c=r[t];delete r[t];var o={id:t,exports:{}};return e[t]=o,c.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},t.parcelRequire6801=c);var o=c.register;o("7xXel",function(t,e){var r=c("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await (0,r.getProduct)(e).then(({_id:t,name:e,img:r,category:c,price:o,size:a,desc:s,is10PercentOff:d,popularity:u})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=r,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=c,document.querySelector("#product-size").textContent=a,document.querySelector("#product-popularity").textContent=u,document.querySelector("#product-price").textContent=o,document.querySelector("#product-desc").textContent=s,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:`Add to
          <svg class="product__icon" width="18" height="18">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        `})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(r.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(r)))}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(r.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(r)))}})}),o("4T1Q4",function(t,e){Object.defineProperty(t.exports,"getProduct",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let r=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}}}),o("1eDY5",function(t,e){});const a=async(t,e,r,c)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${c}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let s="",d="",u="";const l=(t,e,r,c)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`;return}a(t,e,r,c).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:c,size:o,price:a,is10PercentOff:s,popularity:d})=>`
    <li id="${t}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${r}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${c}</span></p>
        <p class="products__size">Size: <span>${o}</span></p>
        <p class="products__popularity">Popularity: <span>${d}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${a}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":` <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
                </svg>`}
            </div>
        </div>
    </li>
    `).join("")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),l(s=document.querySelector("#filters-input").value,d,1,u)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,d="all"===t.target.id?"":t.target.id,l(s,d,1,u)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,u="allAlphabet"===t.target.id?"":t.target.id,l(s,d,1,u)}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:c,size:o,is10PercentOff:a,popularity:s})=>`<li id='${t}' data-product='true' class="popular__item">
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
              Size: <span class="popular__span">${o}</span>
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
      </li>`).join("")}),c("7xXel"),c("1eDY5");
//# sourceMappingURL=async-masters-project.7d37bf3a.js.map
