const t=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}};t().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:o,category:r,size:a,is10PercentOff:c,popularity:s})=>`<li id='${t}' class="popular__item">
        <div class="popular__wrapper">
          <img src="${o}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${r}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${a}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${s}</span>
            </li>
          </ul>
        </div>
        <button class="popular__cart">
          <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        </button>
      </li>`).join("")}),console.log("dd"),((t,e,o)=>{try{if(""===t)return fetch(`https://food-boutique.b.goit.study/api/products?category=${e}&page=1&limit=9`).then(t=>t);if(""===e)return fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}&page=${1}&limit=9`).then(t=>t);return fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=9`).then(t=>t)}catch(t){return t}})("Ackee","Fresh Produce",1).then(t=>{console.log(t)}),t().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:o,category:r,size:a,is10PercentOff:c,popularity:s})=>`<li id='${t}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${o}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${r}</span>
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
          <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        </button>
      </li>`).join("")});const e=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let o;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),o=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await e(o).then(({name:t,img:e,category:o,price:r,size:a,is10PercentOff:c,popularity:s})=>{document.querySelector("#product-img").src=e,document.querySelector("#product-img").alt=t,document.querySelector("#product-name").textContent=t,document.querySelector("#product-category").textContent=o,document.querySelector("#product-size").textContent=a,document.querySelector("#product-popularity").textContent=s,document.querySelector("#product-price").textContent=r})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent=""});
//# sourceMappingURL=async-masters-project.9256ea80.js.map
