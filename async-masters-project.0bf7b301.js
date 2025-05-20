(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(s=>s.json())}catch(s){return s}})().then(s=>{document.querySelector("#popular__list").innerHTML=s.map(({_id:s,name:a,img:p,category:l,size:t,is10PercentOff:i,popularity:o})=>`<li id='${s}' class="popular__item">
        <div class="popular__wrapper">
          <img src="${p}" alt="${a}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${a}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${l}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${t}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${o}</span>
            </li>
          </ul>
        </div>
        <button class="popular__cart">
          <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        </button>
      </li>`).join("")});
//# sourceMappingURL=async-masters-project.0bf7b301.js.map
