(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function S(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(t=>t.json())}const f=document.querySelector(".hero__list"),k=document.querySelector(".header__inp"),L=document.querySelector(".header__btn"),g=document.querySelector(".header__input");function q(e,t=60){return e?e.length<=t?e:e.slice(0,t).trim()+"...":""}function v(e){var a,c,d,m;const t="img/img-event.png";let o="img/modal-desktop.jpg";if(e.images&&e.images.length>0){const u=e.images.find(r=>r.width>=640);o=u?u.url:e.images[0].url}const i=e.name||"No title",n=((c=(a=e.dates)==null?void 0:a.start)==null?void 0:c.localDate)||"Unknown date";let s="Unknown place";return((m=(d=e._embedded)==null?void 0:d.venues)==null?void 0:m.length)>0&&(s=e._embedded.venues[0].name||s),s=q(s,15),`
    <li class="hero__item">
      <div class="hero__card">
        <!-- Локальна іконка -->
        <img class="hero__icon" src="${t}" alt="fons">

        <!-- Картинка події -->
        <img src="${o}" alt="${i}" class="hero__images" />

        <h3 class="hero__title">${i}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${s}</h4>
        </div>
        <p class="hero__text">${n}</p>
      </div>
    </li>
  `}function C(e){if(!e||e.length===0){f.innerHTML="<li>Nothing found</li>";return}f.innerHTML=e.map(v).join(""),window.lastEvents=e}function O(){const e=k.value.trim(),t=g.value;let o="&size=30";return e&&(o+="&keyword="+encodeURIComponent(e)),t&&(o+="&countryCode="+encodeURIComponent(t)),o}function p(){S(O()).then(e=>{var o;const t=((o=e._embedded)==null?void 0:o.events)||[];C(t)}).catch(e=>{console.error(e),f.innerHTML="<li>Nothing found</li>"})}L.addEventListener("click",e=>{e.preventDefault(),p()});k.addEventListener("input",p);g.addEventListener("change",p);async function T(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(o=>{var i;return o.cca2&&((i=o.name)==null?void 0:i.common)}).map(o=>({code:o.cca2,name:o.name.common})).sort((o,i)=>o.name.localeCompare(i.name,"uk"))}async function H(e){const t=await T(),o='<option value="">Choose country</option>',i=t.map(n=>`<option value="${n.code}">${n.name} (${n.code})</option>`).join("");e.innerHTML=o+i,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await H(g),p()});const E=document.querySelector(".backdrop");document.querySelector(".modal__btn");const I=document.querySelector(".hero");I.addEventListener("click",e=>{if(e.target.closest(".hero__item"))E.style.opacity="1",E.style.pointerEvents="all";else return});const l=document.querySelector(".backdrop"),M=document.querySelector(".modal__btn"),$=document.querySelector(".modal__file"),w=document.querySelector(".hero__list");M.addEventListener("click",function(){l.style.opacity="0",l.style.pointerEvents="none"});l.addEventListener("click",function(e){e.target===l&&(l.style.opacity="0",l.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(l.style.opacity="0",l.style.pointerEvents="none")});w.addEventListener("click",function(e){let t=e.target.closest(".hero__item");if(!t)return;let o=Array.prototype.indexOf.call(w.children,t),i=window.lastEvents[o];i&&(R(i),l.style.opacity="1",l.style.pointerEvents="all")});function N(e,t){return e.length>t?e.slice(0,t)+"...":e}function R(e){let t="No description";e.info?t=e.info:e.description&&(t=e.description),t=N(t,120);let o="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(o=e.dates.start.localDate);let i="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(i=e.dates.start.localTime);let n="",s="",a="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(n=e._embedded.venues[0].city.name,s=e._embedded.venues[0].country.name,a=e._embedded.venues[0].name);let c=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(c=e._embedded.attractions[0].name);let d="—",m="—",u="";e.priceRanges&&e.priceRanges.length>0&&(d=e.priceRanges[0].min,m=e.priceRanges[0].max,u=e.priceRanges[0].currency);let r="./img/modal-decstop.jpg",h="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let _=0;_<e.images.length;_++)if(e.images[_].width>=640){r=e.images[_].url;break}r==="./img/modal-decstop.jpg"&&(r=e.images[0].url),h=e.images[0].url}$.innerHTML=`
    <img src="${h}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${r}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${o}</p>
          <p class="modal__text">${i} (${n}/${s})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${n}, ${s}</p>
          <p class="modal__text">${a}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${c}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="../img/ticket.png" alt="icon">
            <p class="modal__desk">Standart ${d}-${m} ${u}</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `;let y=$.querySelector(".modal__button");y&&y.addEventListener("click",function(){window.open(this.dataset.url,"_blank")});let b=document.querySelector(".modal__sub");b&&(b.onclick=function(){window.open("https://www.google.com/search?q="+c,"_blank")})}
//# sourceMappingURL=commonHelpers.js.map
