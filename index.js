(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();function R(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(n=>n.json())}const z=document.querySelector(".hero__list"),B=document.querySelector(".header__inp"),q=document.querySelector(".header__btn"),S=document.querySelector(".header__input");let v=[];function F(e,n=60){return e.length<=n?e:e.slice(0,n).trim()+"..."}function C(e,n=50){return e.length<=n?e:e.slice(0,n).trim()+"..."}function Z(e){var m,y,h,p;let n="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let _=0;_<e.images.length;_++)if(e.images[_].width>=640){n=e.images[_].url;break}n==="./img/modal-decstop.jpg"&&(n=e.images[0].url)}const i=C(e.name,30),o=((y=(m=e.dates)==null?void 0:m.start)==null?void 0:y.localDate)||"Unknown date",a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let s="Unknown place";return((p=(h=e._embedded)==null?void 0:h.venues)==null?void 0:p.length)>0&&(s=e._embedded.venues[0].name||s),s=F(s,15),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="${a}" alt="fons">
        <img src="${n}" alt="${i}" class="hero__images" />
        <h3 class="hero__title">${i}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${s}</h4>
        </div>
        <p class="hero__text">${o}</p>
      </div>
    </li>
  `}function x(e){z.innerHTML=e.map(Z).join(""),window.lastEvents=e}function G(){const e=B.value.trim(),n=S.value;let i="&size=30";return e.length>0&&(i+="&keyword="+encodeURIComponent(e)),n.length>0&&(i+="&countryCode="+n),i}function j(){R(G()).then(e=>{var n,i;((i=(n=e._embedded)==null?void 0:n.events)==null?void 0:i.length)>0?(v=e._embedded.events,x(v)):z.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),z.innerHTML="<li>Nothing found</li>"})}q.addEventListener("click",e=>{e.preventDefault(),j()});B.addEventListener("input",j);S.addEventListener("change",j);async function Q(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(i=>{var o;return i.cca2&&((o=i.name)==null?void 0:o.common)}).map(i=>({code:i.cca2,name:i.name.common})).sort((i,o)=>i.name.localeCompare(o.name,"uk"))}async function Y(e){const n=await Q(),i='<option value="">Choose country</option>',o=n.map(a=>`<option value="${a.code}">${a.name} (${a.code})</option>`).join("");e.innerHTML=i+o,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await Y(S),j(),S.addEventListener("change",j)});const U=document.querySelector(".backdrop");document.querySelector(".modal__btn");const W=document.querySelector(".hero");W.addEventListener("click",e=>{if(e.target.closest(".hero__item"))U.style.opacity="1",U.style.pointerEvents="all";else return});const L=document.querySelector(".pagination"),w=document.querySelector(".hero__list"),D=document.querySelector(".header__inp"),P=document.querySelector(".header__btn"),N=document.querySelector(".header__input");if(L&&w){let m=function(t,l){const r=Math.floor(999/l)+1;return Math.min(t,r)},y=function(t,l=60){return t?t.length<=l?t:t.slice(0,l).trim()+"...":""},h=function(t,l=50){return t?t.length<=l?t:t.slice(0,l).trim()+"...":""},p=function(t){var I,M,k,A;let l="./img/modal-decstop.jpg";if(t.images&&t.images.length>0){for(let T=0;T<t.images.length;T++)if(t.images[T].width>=640){l=t.images[T].url;break}l==="./img/modal-decstop.jpg"&&(l=t.images[0].url)}const r=h(t.name,30),c=((M=(I=t.dates)==null?void 0:I.start)==null?void 0:M.localDate)||"Unknown date",d="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let u="Unknown place";return((A=(k=t._embedded)==null?void 0:k.venues)==null?void 0:A.length)>0&&(u=t._embedded.venues[0].name||u),u=y(u,15),`
      <li class="hero__item">
        <div class="hero__card">
          <img class="hero__icon" src="${d}" alt="fons">
          <img src="${l}" alt="${r}" class="hero__images" />
          <h3 class="hero__title">${r}</h3>
          <div class="hero__box">
            <svg class="hero__img">
              <use href="./img/symbol-defs.svg#icon-place"></use>
            </svg>
            <h4 class="hero__desk">${u}</h4>
          </div>
          <p class="hero__text">${c}</p>
        </div>
      </li>
    `},_=function(t){s=t,w.innerHTML=t.map(p).join("")},b=function(){const t=D?D.value.trim():"",l=N?N.value:"";let c=`&size=30&page=${i-1}`;return t.length>0&&(c+="&keyword="+encodeURIComponent(t)),l.length>0&&(c+="&countryCode="+l),c},g=function(){L.innerHTML="";const t=(d,u,I={})=>{const M=document.createElement("button");M.type="button",M.className="page",M.textContent=d,I.disabled&&(M.disabled=!0),I.active&&M.classList.add("is-active"),u!=null&&(M.dataset.page=String(u)),L.appendChild(M)},l=Math.floor(5/2);let r=i-l,c=i+l;r<1&&(c+=1-r,r=1),c>o&&(r-=c-o,c=o),r=Math.max(1,r),t("«",i-1,{disabled:i===1}),r>1&&(t("1",1,{active:i===1}),r>2&&t("...",null,{disabled:!0}));for(let d=r;d<=c;d++)t(String(d),d,{active:d===i});c<o&&(c<o-1&&t("...",null,{disabled:!0}),t(String(o),o,{active:i===o})),t("»",i+1,{disabled:i===o})};var K=m,O=y,C=h,Z=p,x=_,G=b,X=g;let i=1,o=1,a=null,s=[];async function E(){var c;w.innerHTML='<p class="hero__desk deskbox">Loading...</p>',s=[];const t="rvylvsHWc98giycRfhDFKtIp8G9FNDPl",l=b(),r=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${t}${l}`;try{const d=await fetch(r);if(!d.ok)throw new Error("API Error");const u=await d.json();u&&u.page&&typeof u.page.totalPages=="number"?o=m(u.page.totalPages,30):o=1,i>o&&(i=o),g();const I=((c=u._embedded)==null?void 0:c.events)||[];I.length>0?_(I):(s=[],w.innerHTML='<p class="hero__desk deskbox">Nothing found</p>')}catch(d){console.error(d),o=1,i=1,g(),s=[],w.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'}}L.addEventListener("click",t=>{const l=t.target.closest("button.page");if(!l||l.disabled)return;const r=Number(l.dataset.page);r&&(i=r,E())}),P&&P.addEventListener("click",t=>{t.preventDefault(),t.stopImmediatePropagation(),i=1,E()},!0),D&&D.addEventListener("input",t=>{t.stopImmediatePropagation(),clearTimeout(a),a=setTimeout(()=>{i=1,E()},350)},!0),N&&N.addEventListener("change",t=>{t.stopImmediatePropagation(),i=1,E()},!0),g(),E()}const f=document.querySelector(".backdrop"),J=document.querySelector(".modal__btn"),$=document.querySelector(".modal__file"),H=document.querySelector(".hero__list");J.addEventListener("click",function(){f.style.opacity="0",f.style.pointerEvents="none"});f.addEventListener("click",function(e){e.target===f&&(f.style.opacity="0",f.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(f.style.opacity="0",f.style.pointerEvents="none")});H.addEventListener("click",function(e){let n=e.target.closest(".hero__item");if(!n)return;let i=Array.prototype.indexOf.call(H.children,n),o=window.lastEvents[i];o&&(V(o),f.style.opacity="1",f.style.pointerEvents="all")});function O(e,n){return e.length>n?e.slice(0,n)+"...":e}function V(e){let n="No description";e.info?n=e.info:e.description&&(n=e.description),n=O(n,120);let i="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(i=e.dates.start.localDate);let o="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(o=e.dates.start.localTime);let a="",s="",m="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(a=e._embedded.venues[0].city.name,s=e._embedded.venues[0].country.name,m=e._embedded.venues[0].name);let y=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(y=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const h="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let p="./img/modal-decstop.jpg",_="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let g=0;g<e.images.length;g++)if(e.images[g].width>=640){p=e.images[g].url;break}p==="./img/modal-decstop.jpg"&&(p=e.images[0].url),_=e.images[0].url}$.innerHTML=`
    <img src="${_}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${p}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${n}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${i}</p>
          <p class="modal__text">${o} (${a}/${s})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${a}, ${s}</p>
          <p class="modal__text">${m}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${y}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${h}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${h}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `,$.querySelectorAll(".modal__button").forEach(g=>{g.addEventListener("click",function(){window.open(this.dataset.url,"_blank")})});let b=document.querySelector(".modal__sub");b&&(b.onclick=function(){window.open("https://www.google.com/search?q="+encodeURIComponent(y),"_blank")})}
//# sourceMappingURL=index.js.map
