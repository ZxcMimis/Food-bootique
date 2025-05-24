var t=globalThis,e={},a={},r=t.parcelRequire6801;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in a){var r=a[t];delete a[t];var c={id:t,exports:{}};return e[t]=c,r.call(c.exports,c,c.exports),c.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},t.parcelRequire6801=r);var c=r.register;c("4T1Q4",function(t,e){Object.defineProperty(t.exports,"getProduct",{get:()=>a,set:void 0,enumerable:!0,configurable:!0});let a=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}}}),c("1eDY5",function(t,e){}),c("7xXel",function(t,e){var a=r("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await (0,a.getProduct)(e).then(({_id:t,name:e,img:a,category:r,price:c,size:o,desc:d,is10PercentOff:s,popularity:n})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=a,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=r,document.querySelector("#product-size").textContent=o,document.querySelector("#product-popularity").textContent=n,document.querySelector("#product-price").textContent=c,document.querySelector("#product-desc").textContent=d,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:`Add to
          <svg class="product__icon" width="18" height="18">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        `})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),a=[...JSON.parse(localStorage.getItem("cart"))];a.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(a.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(a)))}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),a=[...JSON.parse(localStorage.getItem("cart"))];a.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(a.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(a)))}})});var o=r("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([]));const d=()=>{if(document.getElementById("cart-list").innerHTML="",0===JSON.parse(localStorage.getItem("cart")).length){document.getElementById("cart-body").classList.add("display-none"),document.getElementById("cart-nobody").classList.remove("display-none");return}document.getElementById("cart-body").classList.remove("display-none"),document.getElementById("cart-nobody").classList.add("display-none"),document.querySelector("#cart-length").textContent=JSON.parse(localStorage.getItem("cart")).length,JSON.parse(localStorage.getItem("cart")).forEach(async t=>{await (0,o.getProduct)(t.id).then(({_id:t,img:e,name:a,category:r,size:c,price:o})=>{document.getElementById("cart-list").insertAdjacentHTML("beforeend",`<li id="${t}" data-product="true" class="cart__item">
            <button data-productclose="true" class="cart__close">
              <svg class="cart__dagger" width="20" height="20">
                <use href="./svg/icons.svg#close"></use>
              </svg>
            </button>
            <div class="cart__wrapper">
              <img src="${e}" alt="${a}" class="cart__img" />
            </div>
            <div class="cart__text">
              <h3 class="cart__header">${a}</h3>
              <ul class="cart__infos">
                <li class="cart__info">
                  Category: <span class="cart__value">${r}</span>
                </li>
                <li class="cart__info">
                  Size: <span class="cart__value">${c}</span>
                </li>
              </ul>
              <div class="cart__down">
                <p class="cart__dollars">$<span class="cart__cost">${o}</span></p>
                <div data-cart='count' class="cart__count">
                  <button data-action='minus' class="cart__action">
                    <svg class="cart__operation" width="14" height="14">
                      <use href="./svg/icons.svg#minus"></use>
                    </svg>
                  </button>
                  <p data-action="count" class="cart__countnum">${JSON.parse(localStorage.getItem("cart")).find(e=>e.id===t).count}</p>
                  <button data-action='plus' class="cart__action">
                    <svg class="cart__operation" width="14" height="14">
                      <use href="./svg/icons.svg#plus"></use>
                    </svg>
                  </button>
                </div>
              </div>  
            </div>
          </li>`)})})},s=()=>{document.querySelector("#cart-price").textContent="0",JSON.parse(localStorage.getItem("cart")).forEach(async t=>{await (0,o.getProduct)(t.id).then(({price:e})=>{let a=Number.parseFloat(document.querySelector("#cart-price").textContent);a+=t.count*e,document.querySelector("#cart-price").textContent=a.toFixed(2)})},0)};d(),s(),document.querySelector("#cart-list").addEventListener("click",t=>{if("true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')){let e=JSON.parse(localStorage.getItem("cart")),a=e.indexOf(e.find(e=>e.id===t.target.closest('[data-product="true"]').id));e.splice(a,1),localStorage.setItem("cart",JSON.stringify(e)),d(),s()}else if("plus"===t.target.dataset.action||t.target.closest('[data-action="plus"]')){let e=JSON.parse(localStorage.getItem("cart")),a=e.find(e=>e.id===t.target.closest('[data-product="true"]').id).count;a+=1,t.target.closest('[data-product="true"]').querySelector('[data-action="count"]').textContent=a,e.find(e=>e.id===t.target.closest('[data-product="true"]').id).count=a,localStorage.setItem("cart",JSON.stringify(e)),s()}else if("minus"===t.target.dataset.action||t.target.closest('[data-action="minus"]')){let e=JSON.parse(localStorage.getItem("cart")),a=e.find(e=>e.id===t.target.closest('[data-product="true"]').id).count;if(a<=1)return;a-=1,t.target.closest('[data-product="true"]').querySelector('[data-action="count"]').textContent=a,e.find(e=>e.id===t.target.closest('[data-product="true"]').id).count=a,localStorage.setItem("cart",JSON.stringify(e)),s()}}),document.querySelector("#cart-del").addEventListener("click",()=>{localStorage.setItem("cart",JSON.stringify([])),document.getElementById("cart-list").innerHTML=""}),r("1eDY5"),r("7xXel");
//# sourceMappingURL=cart.bab762c1.js.map
