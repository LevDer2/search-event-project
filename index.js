(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();function E(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(t=>t.json())}const _=document.querySelector(".hero__list"),w=document.querySelector(".header__inp"),j=document.querySelector(".header__btn"),g=document.querySelector(".header__input");let y=[];function b(e,t=60){return e.length<=t?e:e.slice(0,t).trim()+"..."}function T(e,t=50){return e.length<=t?e:e.slice(0,t).trim()+"..."}function D(e){var l,d,u,c;let t="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let r=0;r<e.images.length;r++)if(e.images[r].width>=640){t=e.images[r].url;break}t==="./img/modal-decstop.jpg"&&(t=e.images[0].url)}const o=T(e.name,30),s=((d=(l=e.dates)==null?void 0:l.start)==null?void 0:d.localDate)||"Unknown date",i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let n="Unknown place";return((c=(u=e._embedded)==null?void 0:u.venues)==null?void 0:c.length)>0&&(n=e._embedded.venues[0].name||n),n=b(n,15),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="${i}" alt="fons">
        <img src="${t}" alt="${o}" class="hero__images" />
        <h3 class="hero__title">${o}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${n}</h4>
        </div>
        <p class="hero__text">${s}</p>
      </div>
    </li>
  `}function L(e){_.innerHTML=e.map(D).join(""),window.lastEvents=e}function z(){const e=w.value.trim(),t=g.value;let o="&size=30";return e.length>0&&(o+="&keyword="+encodeURIComponent(e)),t.length>0&&(o+="&countryCode="+t),o}function M(){E(z()).then(e=>{var t,o;((o=(t=e._embedded)==null?void 0:t.events)==null?void 0:o.length)>0?(y=e._embedded.events,L(y)):_.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),_.innerHTML="<li>Nothing found</li>"})}j.addEventListener("click",e=>{e.preventDefault(),M()});w.addEventListener("input",M);g.addEventListener("change",M);async function N(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(o=>{var s;return o.cca2&&((s=o.name)==null?void 0:s.common)}).map(o=>({code:o.cca2,name:o.name.common})).sort((o,s)=>o.name.localeCompare(s.name,"uk"))}async function S(e){const t=await N(),o='<option value="">Choose country</option>',s=t.map(i=>`<option value="${i.code}">${i.name} (${i.code})</option>`).join("");e.innerHTML=o+s,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await S(g),M(),g.addEventListener("change",M)});const f=document.querySelector(".backdrop");document.querySelector(".modal__btn");const k=document.querySelector(".hero");k.addEventListener("click",e=>{if(e.target.closest(".hero__item"))f.style.opacity="1",f.style.pointerEvents="all";else return});const a=document.querySelector(".backdrop"),A=document.querySelector(".modal__btn"),h=document.querySelector(".modal__file"),I=document.querySelector(".hero__list");A.addEventListener("click",function(){a.style.opacity="0",a.style.pointerEvents="none"});a.addEventListener("click",function(e){e.target===a&&(a.style.opacity="0",a.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(a.style.opacity="0",a.style.pointerEvents="none")});I.addEventListener("click",function(e){let t=e.target.closest(".hero__item");if(!t)return;let o=Array.prototype.indexOf.call(I.children,t),s=window.lastEvents[o];s&&(B(s),a.style.opacity="1",a.style.pointerEvents="all")});function U(e,t){return e.length>t?e.slice(0,t)+"...":e}function B(e){let t="No description";e.info?t=e.info:e.description&&(t=e.description),t=U(t,120);let o="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(o=e.dates.start.localDate);let s="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(s=e.dates.start.localTime);let i="",n="",l="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(i=e._embedded.venues[0].city.name,n=e._embedded.venues[0].country.name,l=e._embedded.venues[0].name);let d=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(d=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const u="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let c="./img/modal-decstop.jpg",r="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let m=0;m<e.images.length;m++)if(e.images[m].width>=640){c=e.images[m].url;break}c==="./img/modal-decstop.jpg"&&(c=e.images[0].url),r=e.images[0].url}h.innerHTML=`
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
          <p class="modal__text">${o}</p>
          <p class="modal__text">${s} (${i}/${n})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${i}, ${n}</p>
          <p class="modal__text">${l}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${d}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${u}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${u}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `,h.querySelectorAll(".modal__button").forEach(m=>{m.addEventListener("click",function(){window.open(this.dataset.url,"_blank")})});let p=document.querySelector(".modal__sub");p&&(p.onclick=function(){window.open("https://www.google.com/search?q="+encodeURIComponent(d),"_blank")})}
//# sourceMappingURL=index.js.map
