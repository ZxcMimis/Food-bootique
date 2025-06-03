var t=globalThis,e={},r={},c=t.parcelRequire6801;null==c&&((c=function(t){if(t in e)return e[t].exports;if(t in r){var c=r[t];delete r[t];var a={id:t,exports:{}};return e[t]=a,c.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},t.parcelRequire6801=c);var a=c.register;a("7xXel",function(t,e){var r=c("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await (0,r.getProduct)(e).then(({_id:t,name:e,img:r,category:c,price:a,size:s,desc:o,is10PercentOff:d,popularity:i})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=r,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=c,document.querySelector("#product-size").textContent=s,document.querySelector("#product-popularity").textContent=i,document.querySelector("#product-price").textContent=a,document.querySelector("#product-desc").textContent=o,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:`Add to <svg class="product__icon" width="18" height="18">
            <use href="#cart"></use>
          </svg>`})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(r.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(r)))}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(r.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(r)),document.getElementById(`${t.target.closest("[data-productmodal]").id}`).querySelector("[data-productadd='true']").textContent="✓")}})}),a("4T1Q4",function(t,e){Object.defineProperty(t.exports,"getProduct",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let r=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}}}),a("1eDY5",function(t,e){let r=document.querySelector("body"),c=document.querySelector('[data-thanks="backdrop"]'),a=document.querySelector('[data-thanks="close"]'),s=document.querySelector('[data-email="backdrop"]'),o=document.querySelector('[data-email="close"]'),d=document.querySelector("#subscribe-form"),i=[];function n(t){t.preventDefault(),(t.currentTarget!==c||t.currentTarget===t.target)&&(r.classList.toggle("no-scroll"),c.classList.toggle("is-hidden"))}function l(t){t.preventDefault(),(t.currentTarget!==s||t.currentTarget===t.target)&&(r.classList.toggle("no-scroll"),s.classList.toggle("is-hidden"))}d.addEventListener("submit",t=>{var e;t.preventDefault(),(e=t.currentTarget.querySelector("input").value,i.includes(e)||(i.push(e),0))?(t.currentTarget.querySelector("input").value="",r.classList.toggle("no-scroll"),s.classList.toggle("is-hidden")):(t.currentTarget.querySelector("input").value="",r.classList.toggle("no-scroll"),c.classList.toggle("is-hidden"))}),o.addEventListener("click",l),s.addEventListener("click",l),a.addEventListener("click",n),c.addEventListener("click",n)});const s=async(t,e,r,c)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${c}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let o="",d="",i="";const n=(t,e,r,c)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}s(t,e,r,c).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:c,size:a,price:s,is10PercentOff:o,popularity:d})=>`<li id="${t}" data-product="true" class="products__item">
                <div class="products__container_img">
                    <img src="${r}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">Avocado</h2>
                <p class="products__category">Category: <span>${c}</span></p>
                <p class="products__size">Size: <span>${a}</span></p>
                <p class="products__popularity">Popularity: <span>${d}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${s}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),n(o=document.querySelector("#filters-input").value,d,1,i)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,d="all"===t.target.id?"":t.target.id,n(o,d,1,i)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,i="allAlphabet"===t.target.id?"":t.target.id,n(o,d,1,i)}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:c,size:a,is10PercentOff:s,popularity:o})=>`<li id='${t}' data-product='true' class="popular__item">
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
            </li>            <li class="popular__point">
              Popularity: <span class="popular__span">${o}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
    <svg class="popular__icon" width="12" height="12">
      <use href="#cart"></use>
    </svg>`}
        </button>
      </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json())}catch(t){return t}})().then(t=>{let e="";for(let r=0;r<2;r+=1)e+=`
             <li id='${t[r]._id}' class="discount__item">
            <svg class="discount__svg-discount">
              <use href="#discount"></use>
            </svg>
            <div class="discount__box-img">
              <img
                src="${t[r].img}"
                alt="${t[r].name}"
                class="discount__image"
              />
            </div>
            <div class="discount__svg-price">
              <h3 class="discount__item-title">${t[r].name}</h3>
              <div class="discount__item-wrap">
                <p class="discount__price">$${t[r].price}</p>
                <div class="discount__svg-container">
                  <svg class="discount__basket">
                    <use href="#cart"></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          `;document.querySelector(".discount__list").innerHTML=e});let l=1;const u=(t,e,r,c)=>{s(r,e,t,c).then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:c,size:a,price:s,is10PercentOff:o,popularity:d})=>`<li id="${t}" data-product="true" class="products__item">
                <div class="products__container_img">
                    <img src="${r}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">Avocado</h2>
                <p class="products__category">Category: <span>${c}</span></p>
                <p class="products__size">Size: <span>${a}</span></p>
                <p class="products__popularity">Popularity: <span>${d}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${s}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join("")})},p=(t,e,r,c)=>{s(r,e,t,c).then(({totalPages:e})=>{let r="";for(let c=t;c<=e&&c<=t+3;c+=1)r+=`<li id='${c}' class="pagination__item ${t===c?"pagination__accent":""}">
        <button class="pagination__btn">${c}
        </button>
      </li>`;e>4&&(r+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=r,t-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),t-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),t+2>e?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),t+1>e?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};p(1,d,o,i),document.querySelector("#pagination-list").addEventListener("click",t=>{t.target.classList.contains("pagination__btn")&&Number.parseInt(t.target.parentElement.id)!==l&&(p(l=Number.parseInt(t.target.parentElement.id),d,o,i),u(l,d,o,i))}),document.querySelector("#next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l+=1,d,o,i),u(l,d,o,i))}),document.querySelector("#double-next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l+=2,d,o,i),u(l,d,o,i))}),document.querySelector("#prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l-=1,d,o,i),u(l,d,o,i))}),document.querySelector("#double-prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l-=2,d,o,i),u(l,d,o,i))}),document.querySelector("#filters-form").addEventListener("submit",t=>{p(l=1,d,o,i)}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{p(l=1,d,o,i)}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{p(l=1,d,o,i)}),c("7xXel"),c("1eDY5");
//# sourceMappingURL=async-masters-project.ab9cfa3a.js.map
