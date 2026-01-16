(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();function F(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(t=>t.json())}const L=document.querySelector(".hero__list"),R=document.querySelector(".header__inp"),q=document.querySelector(".header__btn"),N=document.querySelector(".header__input");function Q(e,t=60){return e?e.length>t?e.slice(0,t).trim()+"...":e:""}function Y(e,t=50){return e?e.length>t?e.slice(0,t).trim()+"...":e:""}function W(e,t){var h,w,y,b,E,_;let i="./img/modal-decstop.jpg";if((h=e.images)!=null&&h.length){for(let c of e.images)if(c.width>=640){i=c.url;break}i==="./img/modal-decstop.jpg"&&(i=e.images[0].url)}const s=Y(e.name,30),n=Q(((b=(y=(w=e._embedded)==null?void 0:w.venues)==null?void 0:y[0])==null?void 0:b.name)||"Unknown",15),r=((_=(E=e.dates)==null?void 0:E.start)==null?void 0:_.localDate)||"Unknown date";return`
    <li class="hero__item" data-index="${t}">
      <div class="hero__card">
        <img class="hero__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=" alt="fons">
        <img class="hero__images" src="${i}" alt="${s}" />
        <h3 class="hero__title">${s}</h3>
        <div class="hero__box">
          <svg class="hero__img"><use href="./img/symbol-defs.svg#icon-place"></use></svg>
          <h4 class="hero__desk">${n}</h4>
        </div>
        <p class="hero__text">${r}</p>
      </div>
    </li>
  `}function J(e){window.lastEvents=e,L.innerHTML=e.map((t,i)=>W(t,i)).join("")}function V(){const e=R.value.trim(),t=N.value;let i="&size=30";return e&&(i+="&keyword="+encodeURIComponent(e)),t&&(i+="&countryCode="+t),i}function D(){F(V()).then(e=>{var i;const t=((i=e._embedded)==null?void 0:i.events)||[];t.length>0?J(t):L.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),L.innerHTML="<li>Nothing found</li>"})}q.addEventListener("click",e=>{e.preventDefault(),D()});R.addEventListener("input",D);N.addEventListener("change",D);async function K(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(i=>{var s;return i.cca2&&((s=i.name)==null?void 0:s.common)}).map(i=>({code:i.cca2,name:i.name.common})).sort((i,s)=>i.name.localeCompare(s.name,"uk"))}async function X(e){const t=await K(),i='<option value="">Choose country</option>',s=t.map(n=>`<option value="${n.code}">${n.name} (${n.code})</option>`).join("");e.innerHTML=i+s,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await X(N),D()});const x=document.querySelector(".backdrop");document.querySelector(".modal__btn");const ee=document.querySelector(".hero");ee.addEventListener("click",e=>{if(e.target.closest(".hero__item"))x.style.opacity="1",x.style.pointerEvents="all";else return});(()=>{if(window.__tmFooterInited)return;window.__tmFooterInited=!0;const e=document.querySelector(".pagination"),t=document.querySelector(".hero__list"),i=document.querySelector(".header__inp"),s=document.querySelector(".header__btn"),n=document.querySelector(".header__input");if(e&&t){let z=function(o,l=60){return o?o.length>l?o.slice(0,l).trim()+"...":o:""},k=function(o,l=50){return o?o.length>l?o.slice(0,l).trim()+"...":o:""},v=function(o,l){var m,P,$,H,B,C;let a="./img/modal-decstop.jpg";if((m=o.images)!=null&&m.length){for(let Z of o.images)if(Z.width>=640){a=Z.url;break}a==="./img/modal-decstop.jpg"&&(a=o.images[0].url)}const d=k(o.name,30),g=(($=(P=o.dates)==null?void 0:P.start)==null?void 0:$.localDate)||"Unknown date",p=z(((C=(B=(H=o._embedded)==null?void 0:H.venues)==null?void 0:B[0])==null?void 0:C.name)||"Unknown",15);return`
        <li class="hero__item" data-index="${l}">
          <div class="hero__card">
            <img class="hero__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=" alt="fons">
            <img class="hero__images" src="${a}" alt="${d}" />
            <h3 class="hero__title">${d}</h3>
            <div class="hero__box">
              <svg class="hero__img"><use href="./img/symbol-defs.svg#icon-place"></use></svg>
              <h4 class="hero__desk">${p}</h4>
            </div>
            <p class="hero__text">${g}</p>
          </div>
        </li>
      `},A=function(o){window.lastEvents=o,t.innerHTML=o.map((l,a)=>v(l,a)).join("")},U=function(){const o=(i==null?void 0:i.value.trim())||"",l=(n==null?void 0:n.value)||"";let d=`&size=30&page=${c-1}`;return o&&(d+="&keyword="+encodeURIComponent(o)),l&&(d+="&countryCode="+l),d},T=function(){e.innerHTML="";const o=(g,p,I={})=>{const m=document.createElement("button");m.type="button",m.className="page",m.textContent=g,I.disabled&&(m.disabled=!0),I.active&&m.classList.add("is-active"),p!=null&&(m.dataset.page=String(p)),e.appendChild(m)},l=Math.floor(5/2);let a=c-l,d=c+l;a<1&&(d+=1-a,a=1),d>u&&(a-=d-u,d=u),a=Math.max(1,a),o("«",c-1,{disabled:c===1}),a>1&&(o("1",1,{active:c===1}),a>2&&o("...",null,{disabled:!0}));for(let g=a;g<=d;g++)o(String(g),g,{active:g===c});d<u&&(d<u-1&&o("...",null,{disabled:!0}),o(String(u),u,{active:c===u})),o("»",c+1,{disabled:c===u})};var r=z,f=k,h=v,w=A,y=U,b=T;let c=1,u=1,S=null;async function j(){var d,g;t.innerHTML='<p class="hero__desk deskbox">Loading...</p>';const o="rvylvsHWc98giycRfhDFKtIp8G9FNDPl",l=U(),a=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${o}${l}`;try{const p=await fetch(a);if(!p.ok)throw new Error("API Error");const I=await p.json();u=(d=I.page)!=null&&d.totalPages?Math.min(Math.floor(999/30)+1,I.page.totalPages):1,c>u&&(c=u),T();const m=((g=I._embedded)==null?void 0:g.events)||[];m.length>0?A(m):t.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'}catch(p){console.error(p),u=1,c=1,T(),t.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'}}e.addEventListener("click",o=>{const l=o.target.closest("button.page");if(!l||l.disabled)return;const a=Number(l.dataset.page);a&&(c=a,j())}),s&&s.addEventListener("click",o=>{o.preventDefault(),c=1,j()}),i&&i.addEventListener("input",()=>{clearTimeout(S),S=setTimeout(()=>{c=1,j()},350)}),n&&n.addEventListener("change",()=>{c=1,j()}),T(),j()}})();const M=document.querySelector(".backdrop"),te=document.querySelector(".modal__btn"),G=document.querySelector(".modal__file"),O=document.querySelector(".hero__list");te.addEventListener("click",function(){M.style.opacity="0",M.style.pointerEvents="none"});M.addEventListener("click",function(e){e.target===M&&(M.style.opacity="0",M.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(M.style.opacity="0",M.style.pointerEvents="none")});O.addEventListener("click",function(e){let t=e.target.closest(".hero__item");if(!t)return;let i=Array.prototype.indexOf.call(O.children,t),s=window.lastEvents[i];s&&(oe(s),M.style.opacity="1",M.style.pointerEvents="all")});function ie(e,t){return e.length>t?e.slice(0,t)+"...":e}function oe(e){let t="No description";e.info?t=e.info:e.description&&(t=e.description),t=ie(t,120);let i="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(i=e.dates.start.localDate);let s="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(s=e.dates.start.localTime);let n="",r="",f="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(n=e._embedded.venues[0].city.name,r=e._embedded.venues[0].country.name,f=e._embedded.venues[0].name);let h=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(h=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const w="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let y="./img/modal-decstop.jpg",b="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let _=0;_<e.images.length;_++)if(e.images[_].width>=640){y=e.images[_].url;break}y==="./img/modal-decstop.jpg"&&(y=e.images[0].url),b=e.images[0].url}G.innerHTML=`
    <img src="${b}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${y}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${i}</p>
          <p class="modal__text">${s} (${n}/${r})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${n}, ${r}</p>
          <p class="modal__text">${f}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${h}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${w}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${w}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `,G.querySelectorAll(".modal__button").forEach(_=>{_.addEventListener("click",function(){window.open(this.dataset.url,"_blank")})});let E=document.querySelector(".modal__sub");E&&(E.onclick=function(){window.open("https://www.google.com/search?q="+encodeURIComponent(h),"_blank")})}
//# sourceMappingURL=index.js.map
