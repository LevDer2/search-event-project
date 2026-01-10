(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function h(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(o=>o.json())}const d=document.querySelector(".hero__list"),m=document.querySelector(".header__inp"),p=document.querySelector(".header__btn"),f=document.querySelector(".header__input");let a=[];function g(e){let o="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let n=0;n<e.images.length;n++)if(e.images[n].width>=640){o=e.images[n].url;break}o==="./img/modal-decstop.jpg"&&(o=e.images[0].url)}const r=e.name,c=e.dates&&e.dates.start&&e.dates.start.localDate?e.dates.start.localDate:"Unknown date";let t="Unknown place";return e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&e._embedded.venues[0].name&&(t=e._embedded.venues[0].name),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="./img/img-event.svg" alt="">
        <img src="${o}" alt="${r}" class="hero__images" />
        <h3 class="hero__title">${r}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${t}</h4>
        </div>
        <p class="hero__text">${c}</p>
      </div>
    </li>
  `}function _(e){d.innerHTML=e.map(g).join("")}function y(){const e=m.value.trim(),o=f.value;let r="&size=30";return e&&e.length>0&&(r+="&keyword="+encodeURIComponent(e)),o&&o.length>0&&(r+="&countryCode="+o),r}function i(){h(y()).then(function(e){e._embedded&&e._embedded.events&&e._embedded.events.length>0?(a=e._embedded.events,_(a)):d.innerHTML="<li>Nothing found</li>"}).catch(function(e){console.error(e),d.innerHTML="<li>Nothing found</li>"})}p.addEventListener("click",function(e){e.preventDefault(),i()});m.addEventListener("input",i);f.addEventListener("change",i);i();const u=document.querySelector(".backdrop");document.querySelector(".modal__btn");const v=document.querySelector(".hero");v.addEventListener("click",e=>{if(e.target.closest(".hero__item"))u.style.opacity="1",u.style.pointerEvents="all";else return});const s=document.querySelector(".backdrop"),b=document.querySelector(".modal__btn");b.addEventListener("click",()=>{s.style.opacity="0",s.style.pointerEvents="none"});s.addEventListener("click",()=>{s.style.opacity="0",s.style.pointerEvents="none"});
//# sourceMappingURL=commonHelpers.js.map
