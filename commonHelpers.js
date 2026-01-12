(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function S(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(t=>t.json())}const f=document.querySelector(".hero__list"),L=document.querySelector(".header__inp"),q=document.querySelector(".header__btn"),p=document.querySelector(".header__input");let E=[];function v(e,t=60){return e.length<=t?e:e.slice(0,t).trim()+"..."}function O(e){var s,a,r,d;let t="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let c=0;c<e.images.length;c++)if(e.images[c].width>=640){t=e.images[c].url;break}t==="./img/modal-decstop.jpg"&&(t=e.images[0].url)}const o=e.name,i=((a=(s=e.dates)==null?void 0:s.start)==null?void 0:a.localDate)||"Unknown date";let n="Unknown place";return((d=(r=e._embedded)==null?void 0:r.venues)==null?void 0:d.length)>0&&(n=e._embedded.venues[0].name||n),n=v(n,15),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="./img/img-event.png" alt="fons">
        <img src="${t}" alt="${o}" class="hero__images" />
        <h3 class="hero__title">${o}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${n}</h4>
        </div>
        <p class="hero__text">${i}</p>
      </div>
    </li>
  `}function T(e){f.innerHTML=e.map(O).join(""),window.lastEvents=e}function j(){const e=L.value.trim(),t=p.value;let o="&size=30";return e.length>0&&(o+="&keyword="+encodeURIComponent(e)),t.length>0&&(o+="&countryCode="+t),o}function m(){S(j()).then(e=>{var t,o;((o=(t=e._embedded)==null?void 0:t.events)==null?void 0:o.length)>0?(E=e._embedded.events,T(E)):f.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),f.innerHTML="<li>Nothing found</li>"})}q.addEventListener("click",e=>{e.preventDefault(),m()});L.addEventListener("input",m);p.addEventListener("change",m);async function x(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(o=>{var i;return o.cca2&&((i=o.name)==null?void 0:i.common)}).map(o=>({code:o.cca2,name:o.name.common})).sort((o,i)=>o.name.localeCompare(i.name,"uk"))}async function C(e){const t=await x(),o='<option value="">Choose country</option>',i=t.map(n=>`<option value="${n.code}">${n.name} (${n.code})</option>`).join("");e.innerHTML=o+i,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await C(p),m(),p.addEventListener("change",m)});const $=document.querySelector(".backdrop");document.querySelector(".modal__btn");const H=document.querySelector(".hero");H.addEventListener("click",e=>{if(e.target.closest(".hero__item"))$.style.opacity="1",$.style.pointerEvents="all";else return});const l=document.querySelector(".backdrop"),M=document.querySelector(".modal__btn"),w=document.querySelector(".modal__file"),k=document.querySelector(".hero__list");M.addEventListener("click",function(){l.style.opacity="0",l.style.pointerEvents="none"});l.addEventListener("click",function(e){e.target===l&&(l.style.opacity="0",l.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(l.style.opacity="0",l.style.pointerEvents="none")});k.addEventListener("click",function(e){let t=e.target.closest(".hero__item");if(!t)return;let o=Array.prototype.indexOf.call(k.children,t),i=window.lastEvents[o];i&&(R(i),l.style.opacity="1",l.style.pointerEvents="all")});function N(e,t){return e.length>t?e.slice(0,t)+"...":e}function R(e){let t="No description";e.info?t=e.info:e.description&&(t=e.description),t=N(t,120);let o="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(o=e.dates.start.localDate);let i="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(i=e.dates.start.localTime);let n="",s="",a="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(n=e._embedded.venues[0].city.name,s=e._embedded.venues[0].country.name,a=e._embedded.venues[0].name);let r=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(r=e._embedded.attractions[0].name);let d="—",c="—",g="";e.priceRanges&&e.priceRanges.length>0&&(d=e.priceRanges[0].min,c=e.priceRanges[0].max,g=e.priceRanges[0].currency);let u="./img/modal-decstop.jpg",h="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let _=0;_<e.images.length;_++)if(e.images[_].width>=640){u=e.images[_].url;break}u==="./img/modal-decstop.jpg"&&(u=e.images[0].url),h=e.images[0].url}w.innerHTML=`
    <img src="${h}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${u}" alt="poster" class="modal__images">
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
          <p class="modal__text modal__artist">${r}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="../img/ticket.png" alt="icon">
            <p class="modal__desk">Standart ${d}-${c} ${g}</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `;let y=w.querySelector(".modal__button");y&&y.addEventListener("click",function(){window.open(this.dataset.url,"_blank")});let b=document.querySelector(".modal__sub");b&&(b.onclick=function(){window.open("https://www.google.com/search?q="+r,"_blank")})}
//# sourceMappingURL=commonHelpers.js.map
