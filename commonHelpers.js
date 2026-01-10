(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function b(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(r=>r.json())}const h=document.querySelector(".hero__list"),_=document.querySelector(".header__inp"),E=document.querySelector(".header__btn"),v=document.querySelector(".header__input");let f=[];function L(e){var o,c,a,d,u,m,p;const r=((c=(o=e.images)==null?void 0:o.find(g=>g.width>=640))==null?void 0:c.url)||((d=(a=e.images)==null?void 0:a[0])==null?void 0:d.url)||"./img/modal-decstop.jpg",n=e.name,i=e.dates.start.localDate,t=((p=(m=(u=e._embedded)==null?void 0:u.venues)==null?void 0:m[0])==null?void 0:p.name)||"Unknown place";return`
    <li class="hero__item">
    <div class="hero__card">
      <img class="hero__icon" src="./img/img-event.svg" alt="">
      <img src="${r}" alt="${n}" class="hero__images" />
      <h3 class="hero__title">${n}</h3>
      <div class="hero__box">
        <svg class="hero__img">
          <use href="./img/symbol-defs.svg#icon-place"></use>
        </svg>
        <h4 class="hero__desk">${t}</h4>
      </div>
      <p class="hero__text">${i}</p>
      </div>
    </li>
  `}function q(e){h.innerHTML=e.map(L).join("")}function S(){const e=_.value.trim(),r=v.value;let n="&size=30";return e&&(n+=`&keyword=${encodeURIComponent(e)}`),r&&(n+=`&countryCode=${r}`),n}function l(){b(S()).then(e=>{var r;f=((r=e._embedded)==null?void 0:r.events)||[],q(f)}).catch(()=>{h.innerHTML="<li>Nothing found</li>"})}E.addEventListener("click",e=>{e.preventDefault(),l()});_.addEventListener("input",l);v.addEventListener("change",l);l();const y=document.querySelector(".backdrop");document.querySelector(".modal__btn");const k=document.querySelector(".hero");k.addEventListener("click",e=>{if(e.target.closest(".hero__item"))y.style.opacity="1",y.style.pointerEvents="all";else return});const s=document.querySelector(".backdrop"),$=document.querySelector(".modal__btn");$.addEventListener("click",()=>{s.style.opacity="0",s.style.pointerEvents="none"});s.addEventListener("click",()=>{s.style.opacity="0",s.style.pointerEvents="none"});
//# sourceMappingURL=commonHelpers.js.map
