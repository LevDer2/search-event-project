(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();function F(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(i=>i.json())}const L=document.querySelector(".hero__list"),Z=document.querySelector(".header__inp"),Q=document.querySelector(".header__btn"),N=document.querySelector(".header__input");function Y(e,i=60){return e?e.length>i?e.slice(0,i).trim()+"...":e:""}function x(e,i=50){return e?e.length>i?e.slice(0,i).trim()+"...":e:""}function G(e,i){var f,I,M,_,m,y;let t="./img/modal-decstop.jpg";if((f=e.images)!=null&&f.length){for(let S of e.images)if(S.width>=640){t=S.url;break}t==="./img/modal-decstop.jpg"&&(t=e.images[0].url)}const o=x(e.name,30),a=Y(((_=(M=(I=e._embedded)==null?void 0:I.venues)==null?void 0:M[0])==null?void 0:_.name)||"Unknown",15),c=((y=(m=e.dates)==null?void 0:m.start)==null?void 0:y.localDate)||"Unknown date";return`
    <li class="hero__item" data-index="${i}">
      <div class="hero__card">
        <img class="hero__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=" alt="fons">
        <img class="hero__images" src="${t}" alt="${o}" />
        <h3 class="hero__title">${o}</h3>
        <div class="hero__box">
          <svg class="hero__img"><use href="./img/symbol-defs.svg#icon-place"></use></svg>
          <h4 class="hero__desk">${a}</h4>
        </div>
        <p class="hero__text">${c}</p>
      </div>
    </li>
  `}function O(e){window.lastEvents=e,L.innerHTML=e.map((i,t)=>G(i,t)).join("")}function R(){const e=Z.value.trim(),i=N.value;let t="&size=30";return e&&(t+="&keyword="+encodeURIComponent(e)),i&&(t+="&countryCode="+i),t}function D(){F(R()).then(e=>{var t;const i=((t=e._embedded)==null?void 0:t.events)||[];i.length>0?O(i):L.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),L.innerHTML="<li>Nothing found</li>"})}Q.addEventListener("click",e=>{e.preventDefault(),D()});Z.addEventListener("input",D);N.addEventListener("change",D);async function W(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(t=>{var o;return t.cca2&&((o=t.name)==null?void 0:o.common)}).map(t=>({code:t.cca2,name:t.name.common})).sort((t,o)=>t.name.localeCompare(o.name,"uk"))}async function J(e){const i=await W(),t='<option value="">Choose country</option>',o=i.map(a=>`<option value="${a.code}">${a.name} (${a.code})</option>`).join("");e.innerHTML=t+o,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await J(N),D()});const P=document.querySelector(".backdrop");document.querySelector(".modal__btn");const V=document.querySelector(".hero");V.addEventListener("click",e=>{if(e.target.closest(".hero__item"))P.style.opacity="1",P.style.pointerEvents="all";else return});const T=document.querySelector(".pagination"),E=document.querySelector(".hero__list"),w=document.querySelector(".header__inp"),H=document.querySelector(".header__btn"),j=document.querySelector(".header__input");if(T&&E){let c=function(n,l=60){return n?n.length>l?n.slice(0,l).trim()+"...":n:""},g=function(n,l=50){return n?n.length>l?n.slice(0,l).trim()+"...":n:""},f=function(n,l){var d,z,k,v,A,U;let s="./img/modal-decstop.jpg";if((d=n.images)!=null&&d.length){for(let $ of n.images)if($.width>=640){s=$.url;break}s==="./img/modal-decstop.jpg"&&(s=n.images[0].url)}const r=g(n.name,30),u=((k=(z=n.dates)==null?void 0:z.start)==null?void 0:k.localDate)||"Unknown date",h=c(((U=(A=(v=n._embedded)==null?void 0:v.venues)==null?void 0:A[0])==null?void 0:U.name)||"Unknown",15);return`
      <li class="hero__item" data-index="${l}">
        <div class="hero__card">
          <img class="hero__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=" alt="fons">
          <img class="hero__images" src="${s}" alt="${r}" />
          <h3 class="hero__title">${r}</h3>
          <div class="hero__box">
            <svg class="hero__img"><use href="./img/symbol-defs.svg#icon-place"></use></svg>
            <h4 class="hero__desk">${h}</h4>
          </div>
          <p class="hero__text">${u}</p>
        </div>
      </li>
    `},I=function(n){window.lastEvents=n,E.innerHTML=n.map((l,s)=>f(l,s)).join("")},M=function(){const n=(w==null?void 0:w.value.trim())||"",l=(j==null?void 0:j.value)||"";let r=`&size=30&page=${t-1}`;return n&&(r+="&keyword="+encodeURIComponent(n)),l&&(r+="&countryCode="+l),r},_=function(){T.innerHTML="";const n=(u,h,b={})=>{const d=document.createElement("button");d.type="button",d.className="page",d.textContent=u,b.disabled&&(d.disabled=!0),b.active&&d.classList.add("is-active"),h!=null&&(d.dataset.page=String(h)),T.appendChild(d)},l=Math.floor(5/2);let s=t-l,r=t+l;s<1&&(r+=1-s,s=1),r>o&&(s-=r-o,r=o),s=Math.max(1,s),n("«",t-1,{disabled:t===1}),s>1&&(n("1",1,{active:t===1}),s>2&&n("...",null,{disabled:!0}));for(let u=s;u<=r;u++)n(String(u),u,{active:u===t});r<o&&(r<o-1&&n("...",null,{disabled:!0}),n(String(o),o,{active:t===o})),n("»",t+1,{disabled:t===o})};var q=c,x=g,G=f,O=I,R=M,ee=_;let t=1,o=1,a=null;async function m(){var r,u;E.innerHTML='<p class="hero__desk deskbox">Loading...</p>';const n="rvylvsHWc98giycRfhDFKtIp8G9FNDPl",l=M(),s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${n}${l}`;try{const h=await fetch(s);if(!h.ok)throw new Error("API Error");const b=await h.json();o=(r=b.page)!=null&&r.totalPages?Math.min(Math.floor(999/30)+1,b.page.totalPages):1,t>o&&(t=o),_();const d=((u=b._embedded)==null?void 0:u.events)||[];d.length>0?I(d):E.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'}catch(h){console.error(h),o=1,t=1,_(),E.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'}}T.addEventListener("click",n=>{const l=n.target.closest("button.page");if(!l||l.disabled)return;const s=Number(l.dataset.page);s&&(t=s,m())}),H&&H.addEventListener("click",n=>{n.preventDefault(),t=1,m()}),w&&w.addEventListener("input",n=>{clearTimeout(a),a=setTimeout(()=>{t=1,m()},350)}),j&&j.addEventListener("change",n=>{t=1,m()}),_(),m()}const p=document.querySelector(".backdrop"),K=document.querySelector(".modal__btn"),B=document.querySelector(".modal__file"),C=document.querySelector(".hero__list");K.addEventListener("click",function(){p.style.opacity="0",p.style.pointerEvents="none"});p.addEventListener("click",function(e){e.target===p&&(p.style.opacity="0",p.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(p.style.opacity="0",p.style.pointerEvents="none")});C.addEventListener("click",function(e){let i=e.target.closest(".hero__item");if(!i)return;let t=Array.prototype.indexOf.call(C.children,i),o=window.lastEvents[t];o&&(X(o),p.style.opacity="1",p.style.pointerEvents="all")});function q(e,i){return e.length>i?e.slice(0,i)+"...":e}function X(e){let i="No description";e.info?i=e.info:e.description&&(i=e.description),i=q(i,120);let t="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(t=e.dates.start.localDate);let o="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(o=e.dates.start.localTime);let a="",c="",g="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(a=e._embedded.venues[0].city.name,c=e._embedded.venues[0].country.name,g=e._embedded.venues[0].name);let f=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(f=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let M="./img/modal-decstop.jpg",_="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let y=0;y<e.images.length;y++)if(e.images[y].width>=640){M=e.images[y].url;break}M==="./img/modal-decstop.jpg"&&(M=e.images[0].url),_=e.images[0].url}B.innerHTML=`
    <img src="${_}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${M}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${i}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${t}</p>
          <p class="modal__text">${o} (${a}/${c})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${a}, ${c}</p>
          <p class="modal__text">${g}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${f}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${I}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${I}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `,B.querySelectorAll(".modal__button").forEach(y=>{y.addEventListener("click",function(){window.open(this.dataset.url,"_blank")})});let m=document.querySelector(".modal__sub");m&&(m.onclick=function(){window.open("https://www.google.com/search?q="+encodeURIComponent(f),"_blank")})}
//# sourceMappingURL=index.js.map
