(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();function b(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(t=>t.json())}const _=document.querySelector(".hero__list"),E=document.querySelector(".header__inp"),j=document.querySelector(".header__btn"),g=document.querySelector(".header__input");let f=[];function T(e,t=60){return e.length<=t?e:e.slice(0,t).trim()+"..."}function D(e,t=50){return e.length<=t?e:e.slice(0,t).trim()+"..."}function L(e){var l,d,m,c;let t="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let r=0;r<e.images.length;r++)if(e.images[r].width>=640){t=e.images[r].url;break}t==="./img/modal-decstop.jpg"&&(t=e.images[0].url)}const i=D(e.name,30),s=((d=(l=e.dates)==null?void 0:l.start)==null?void 0:d.localDate)||"Unknown date",o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let n="Unknown place";return((c=(m=e._embedded)==null?void 0:m.venues)==null?void 0:c.length)>0&&(n=e._embedded.venues[0].name||n),n=T(n,15),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="${o}" alt="fons">
        <img src="${t}" alt="${i}" class="hero__images" />
        <h3 class="hero__title">${i}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${n}</h4>
        </div>
        <p class="hero__text">${s}</p>
      </div>
    </li>
  `}function z(e){_.innerHTML=e.map(L).join(""),window.lastEvents=e}function N(){const e=E.value.trim(),t=g.value;let i="&size=30";return e.length>0&&(i+="&keyword="+encodeURIComponent(e)),t.length>0&&(i+="&countryCode="+t),i}function u(){b(N()).then(e=>{var t,i;((i=(t=e._embedded)==null?void 0:t.events)==null?void 0:i.length)>0?(f=e._embedded.events,z(f)):_.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),_.innerHTML="<li>Nothing found</li>"})}j.addEventListener("click",e=>{e.preventDefault(),u()});E.addEventListener("input",u);g.addEventListener("change",u);async function S(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(i=>{var s;return i.cca2&&((s=i.name)==null?void 0:s.common)}).map(i=>({code:i.cca2,name:i.name.common})).sort((i,s)=>i.name.localeCompare(s.name,"uk"))}async function k(e){const t=await S(),i='<option value="">Choose country</option>',s=t.map(o=>`<option value="${o.code}">${o.name} (${o.code})</option>`).join("");e.innerHTML=i+s,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await k(g),u(),g.addEventListener("change",u)});const h=document.querySelector(".backdrop");document.querySelector(".modal__btn");const A=document.querySelector(".hero");A.addEventListener("click",e=>{if(e.target.closest(".hero__item"))h.style.opacity="1",h.style.pointerEvents="all";else return});const a=document.querySelector(".backdrop"),B=document.querySelector(".modal__btn"),I=document.querySelector(".modal__file"),w=document.querySelector(".hero__list");B.addEventListener("click",function(){a.style.opacity="0",a.style.pointerEvents="none"});a.addEventListener("click",function(e){e.target===a&&(a.style.opacity="0",a.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(a.style.opacity="0",a.style.pointerEvents="none")});w.addEventListener("click",function(e){let t=e.target.closest(".hero__item");if(!t)return;let i=Array.prototype.indexOf.call(w.children,t),s=window.lastEvents[i];s&&(U(s),a.style.opacity="1",a.style.pointerEvents="all")});function O(e,t){return e.length>t?e.slice(0,t)+"...":e}function U(e){let t="No description";e.info?t=e.info:e.description&&(t=e.description),t=O(t,120);let i="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(i=e.dates.start.localDate);let s="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(s=e.dates.start.localTime);let o="",n="",l="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(o=e._embedded.venues[0].city.name,n=e._embedded.venues[0].country.name,l=e._embedded.venues[0].name);let d=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(d=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const m="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let c="./img/modal-decstop.jpg",r="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let M=0;M<e.images.length;M++)if(e.images[M].width>=640){c=e.images[M].url;break}c==="./img/modal-decstop.jpg"&&(c=e.images[0].url),r=e.images[0].url}I.innerHTML=`
    <img src="${r}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${c}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${i}</p>
          <p class="modal__text">${s} (${o}/${n})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${o}, ${n}</p>
          <p class="modal__text">${l}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${d}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${m}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${m}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `;let p=I.querySelector(".modal__button");p&&p.addEventListener("click",function(){window.open(this.dataset.url,"_blank")});let y=document.querySelector(".modal__sub");y&&(y.onclick=function(){window.open("https://www.google.com/search?q="+d,"_blank")})}
//# sourceMappingURL=commonHelpers.js.map
