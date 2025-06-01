var t=globalThis,e={},r={},a=t.parcelRequire6801;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in r){var a=r[t];delete r[t];var c={id:t,exports:{}};return e[t]=c,a.call(c.exports,c,c.exports),c.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},t.parcelRequire6801=a);var c=a.register;c("7xXel",function(t,e){var r=a("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await (0,r.getProduct)(e).then(({_id:t,name:e,img:r,category:a,price:c,size:s,desc:o,is10PercentOff:i,popularity:d})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=r,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=a,document.querySelector("#product-size").textContent=s,document.querySelector("#product-popularity").textContent=d,document.querySelector("#product-price").textContent=c,document.querySelector("#product-desc").textContent=o,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:"Add to"})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(r.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(r)))}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(r.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(r)),document.getElementById(`${t.target.closest("[data-productmodal]").id}`).querySelector("[data-productadd='true']").textContent="✓")}})}),c("4T1Q4",function(t,e){Object.defineProperty(t.exports,"getProduct",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let r=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}}}),c("1eDY5",function(t,e){let r=document.querySelector("body"),a=document.querySelector('[data-thanks="backdrop"]'),c=document.querySelector('[data-thanks="close"]'),s=document.querySelector('[data-email="backdrop"]'),o=document.querySelector('[data-email="close"]'),i=document.querySelector("#subscribe-form"),d=[];function n(t){t.preventDefault(),(t.currentTarget!==a||t.currentTarget===t.target)&&(r.classList.toggle("no-scroll"),a.classList.toggle("is-hidden"))}function l(t){t.preventDefault(),(t.currentTarget!==s||t.currentTarget===t.target)&&(r.classList.toggle("no-scroll"),s.classList.toggle("is-hidden"))}i.addEventListener("submit",t=>{var e;t.preventDefault(),(e=t.currentTarget.querySelector("input").value,d.includes(e)||(d.push(e),0))?(t.currentTarget.querySelector("input").value="",r.classList.toggle("no-scroll"),s.classList.toggle("is-hidden")):(t.currentTarget.querySelector("input").value="",r.classList.toggle("no-scroll"),a.classList.toggle("is-hidden"))}),o.addEventListener("click",l),s.addEventListener("click",l),c.addEventListener("click",n),a.addEventListener("click",n)});const s=async(t,e,r,a)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${a}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let o="",i="",d="";const n=(t,e,r,a)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}s(t,e,r,a).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:a,size:c,price:s,is10PercentOff:o,popularity:i})=>`
    <li id="${t}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${r}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${a}</span></p>
        <p class="products__size">Size: <span>${c}</span></p>
        <p class="products__popularity">Popularity: <span>${i}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${s}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":""}
            </div>
        </div>
    </li>
    `).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),n(o=document.querySelector("#filters-input").value,i,1,d)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,i="all"===t.target.id?"":t.target.id,n(o,i,1,d)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,d="allAlphabet"===t.target.id?"":t.target.id,n(o,i,1,d)});const l=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}};import.meta.resolve("i5EMe"),l().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:a,size:c,is10PercentOff:s,popularity:o})=>`<li id='${t}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${r}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${a}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${c}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${o}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
    <svg class="aa" width="12" height="12">
      <use href="#cart"></use>
    </svg>`}
        </button>
      </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json())}catch(t){return t}})().then(t=>{document.querySelector("").innerHTML=t.map(({_id:t,name:e,img:r,price:a})=>`
         <li id='${t}' class="discount__item">
        <svg class="discount__svg-discount">
          <use href="./svg/icons.svg#discount"></use>
        </svg>
        <div class="discount__box-img">
          <img
            src="${r}"
            alt="${e}"
            class="discount__image"
          />
        </div>
        <div class="discount__svg-price">
          <h3 class="discount__item-title">${e}</h3>
          <div class="discount__item-wrap">
            <p class="discount__price">$${a}</p>
            <div class="discount__svg-container">
              <svg class="discount__basket">
                <use href="./svg/icons.svg#cart"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
      `).join("")});let u=1;const p=(t,e,r,a)=>{s(r,e,t,a).then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:a,size:c,price:s,is10PercentOff:o,popularity:i})=>`<li id="${t}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${r}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${a}</span></p>
        <p class="products__size">Size: <span>${c}</span></p>
        <p class="products__popularity">Popularity: <span>${i}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${s}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":""}
            </div>
        </div>
    </li>`).join("")})},g=(t,e,r,a)=>{s(r,e,t,a).then(({totalPages:e})=>{let r="";for(let a=t;a<=e&&a<=t+3;a+=1)r+=`<li id='${a}' class="pagination__item ${t===a?"pagination__accent":""}">
        <button class="pagination__btn">${a}
        </button>
      </li>`;e>4&&(r+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=r,t-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),t-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),t+2>e?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),t+1>e?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};g(1,i,o,d),document.querySelector("#pagination-list").addEventListener("click",t=>{t.target.classList.contains("pagination__btn")&&Number.parseInt(t.target.parentElement.id)!==u&&(g(u=Number.parseInt(t.target.parentElement.id),i,o,d),p(u,i,o,d))}),document.querySelector("#next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(g(u+=1,i,o,d),p(u,i,o,d))}),document.querySelector("#double-next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(g(u+=2,i,o,d),p(u,i,o,d))}),document.querySelector("#prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(g(u-=1,i,o,d),p(u,i,o,d))}),document.querySelector("#double-prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(g(u-=2,i,o,d),p(u,i,o,d))}),document.querySelector("#filters-form").addEventListener("submit",t=>{g(u=1,i,o,d)}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{g(u=1,i,o,d)}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{g(u=1,i,o,d)}),a("7xXel"),a("1eDY5");
//# sourceMappingURL=async-masters-project.01f45bef.js.map
