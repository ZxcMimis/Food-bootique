const t=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}};t().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:s,size:c,is10PercentOff:o,popularity:a})=>`<li id='${t}' class="popular__item">
        <div class="popular__wrapper">
          <img src="${r}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${s}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${c}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${a}</span>
            </li>
          </ul>
        </div>
        <button class="popular__cart">
          <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        </button>
      </li>`).join("")});const e=async(t,e,r,s)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${s}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let r="",s="",c="";const o=(t,r,s,c)=>{e(t,r,s,c).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:s,size:c,price:o,is10PercentOff:a,popularity:l})=>`
    <li id="${t}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${r}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${s}</span></p>
        <p class="products__size">Size: <span>${c}</span></p>
        <p class="products__popularity">Popularity: <span>${l}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${o}</p>
            <div  data-productadd="true"  class="products__svg_container">
                <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
                </svg>
            </div>
        </div>
    </li>
    `).join("")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),o(r=document.querySelector("#filters-input").value,s,1,c)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,s="all"===t.target.id?"":t.target.id,o(r,s,1,c)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,c="allAlphabet"===t.target.id?"":t.target.id,o(r,s,1,c)}),t().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:s,size:c,is10PercentOff:o,popularity:a})=>`<li id='${t}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${r}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${s}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${c}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${a}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
          <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        </button>
      </li>`).join("")});const a=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await a(e).then(({name:t,img:e,category:r,price:s,size:c,desc:o,is10PercentOff:a,popularity:l})=>{document.querySelector("#product-img").src=e,document.querySelector("#product-img").alt=t,document.querySelector("#product-name").textContent=t,document.querySelector("#product-category").textContent=r,document.querySelector("#product-size").textContent=c,document.querySelector("#product-popularity").textContent=l,document.querySelector("#product-price").textContent=s,document.querySelector("#product-desc").textContent=o})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""});
//# sourceMappingURL=async-masters-project.c2d0e39d.js.map
