(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();function H(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(n=>n.json())}const S=document.querySelector(".hero__list"),B=document.querySelector(".header__inp"),R=document.querySelector(".header__btn"),D=document.querySelector(".header__input");let A=[];function q(e,n=60){return e.length<=n?e:e.slice(0,n).trim()+"..."}function C(e,n=50){return e.length<=n?e:e.slice(0,n).trim()+"..."}function Z(e){var u,p,h,m;let n="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let g=0;g<e.images.length;g++)if(e.images[g].width>=640){n=e.images[g].url;break}n==="./img/modal-decstop.jpg"&&(n=e.images[0].url)}const i=C(e.name,30),o=((p=(u=e.dates)==null?void 0:u.start)==null?void 0:p.localDate)||"Unknown date",s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let l="Unknown place";return((m=(h=e._embedded)==null?void 0:h.venues)==null?void 0:m.length)>0&&(l=e._embedded.venues[0].name||l),l=q(l,15),`
    <li class="hero__item">
      <div class="hero__card">
        <img class="hero__icon" src="${s}" alt="fons">
        <img src="${n}" alt="${i}" class="hero__images" />
        <h3 class="hero__title">${i}</h3>
        <div class="hero__box">
          <svg class="hero__img">
            <use href="./img/symbol-defs.svg#icon-place"></use>
          </svg>
          <h4 class="hero__desk">${l}</h4>
        </div>
        <p class="hero__text">${o}</p>
      </div>
    </li>
  `}function x(e){S.innerHTML=e.map(Z).join(""),window.lastEvents=e}function O(){const e=B.value.trim(),n=D.value;let i="&size=30";return e.length>0&&(i+="&keyword="+encodeURIComponent(e)),n.length>0&&(i+="&countryCode="+n),i}function b(){H(O()).then(e=>{var n,i;((i=(n=e._embedded)==null?void 0:n.events)==null?void 0:i.length)>0?(A=e._embedded.events,x(A)):S.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),S.innerHTML="<li>Nothing found</li>"})}R.addEventListener("click",e=>{e.preventDefault(),b()});B.addEventListener("input",b);D.addEventListener("change",b);async function F(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(i=>{var o;return i.cca2&&((o=i.name)==null?void 0:o.common)}).map(i=>({code:i.cca2,name:i.name.common})).sort((i,o)=>i.name.localeCompare(o.name,"uk"))}async function Q(e){const n=await F(),i='<option value="">Choose country</option>',o=n.map(s=>`<option value="${s.code}">${s.name} (${s.code})</option>`).join("");e.innerHTML=i+o,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await Q(D),b(),D.addEventListener("change",b)});const v=document.querySelector(".backdrop");document.querySelector(".modal__btn");const Y=document.querySelector(".hero");Y.addEventListener("click",e=>{if(e.target.closest(".hero__item"))v.style.opacity="1",v.style.pointerEvents="all";else return});const T=document.querySelector(".pagination"),w=document.querySelector(".hero__list"),L=document.querySelector(".header__inp"),U=document.querySelector(".header__btn"),N=document.querySelector(".header__input");if(!(!T||!w)){let l=function(t,a){const c=Math.floor(999/a)+1;return Math.min(t,c)},u=function(t,a=60){return t?t.length<=a?t:t.slice(0,a).trim()+"...":""},p=function(t,a=50){return t?t.length<=a?t:t.slice(0,a).trim()+"...":""},h=function(t){var E,_,z,k;let a="./img/modal-decstop.jpg";if(t.images&&t.images.length>0){for(let j=0;j<t.images.length;j++)if(t.images[j].width>=640){a=t.images[j].url;break}a==="./img/modal-decstop.jpg"&&(a=t.images[0].url)}const c=p(t.name,30),d=((_=(E=t.dates)==null?void 0:E.start)==null?void 0:_.localDate)||"Unknown date",f="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let y="Unknown place";return((k=(z=t._embedded)==null?void 0:z.venues)==null?void 0:k.length)>0&&(y=t._embedded.venues[0].name||y),y=u(y,15),`
      <li class="hero__item">
        <div class="hero__card">
          <img class="hero__icon" src="${f}" alt="fons">
          <img src="${a}" alt="${c}" class="hero__images" />
          <h3 class="hero__title">${c}</h3>
          <div class="hero__box">
            <svg class="hero__img">
              <use href="./img/symbol-defs.svg#icon-place"></use>
            </svg>
            <h4 class="hero__desk">${y}</h4>
          </div>
          <p class="hero__text">${d}</p>
        </div>
      </li>
    `},m=function(t){window.lastEvents=t,w.innerHTML=t.map(h).join("")},g=function(){const t=L?L.value.trim():"",a=N?N.value:"";let d=`&size=30&page=${i-1}`;return t.length>0&&(d+="&keyword="+encodeURIComponent(t)),a.length>0&&(d+="&countryCode="+a),d},I=function(){T.innerHTML="";const t=(f,y,E={})=>{const _=document.createElement("button");_.type="button",_.className="page",_.textContent=f,E.disabled&&(_.disabled=!0),E.active&&_.classList.add("is-active"),y!=null&&(_.dataset.page=String(y)),T.appendChild(_)},a=Math.floor(5/2);let c=i-a,d=i+a;c<1&&(d+=1-c,c=1),d>o&&(c-=d-o,d=o),c=Math.max(1,c),t("«",i-1,{disabled:i===1}),c>1&&(t("1",1,{active:i===1}),c>2&&t("...",null,{disabled:!0}));for(let f=c;f<=d;f+=1)t(String(f),f,{active:f===i});d<o&&(d<o-1&&t("...",null,{disabled:!0}),t(String(o),o,{active:i===o})),t("»",i+1,{disabled:i===o})},r=function(){w.innerHTML='<p class="hero__desk deskbox">Loading...</p>',window.lastEvents=[],H(g()).then(t=>{var c;t&&t.page&&typeof t.page.totalPages=="number"?o=l(t.page.totalPages,30):o=1,i>o&&(i=o),I();const a=((c=t==null?void 0:t._embedded)==null?void 0:c.events)||[];a.length>0?m(a):(window.lastEvents=[],w.innerHTML='<p class="hero__desk deskbox">Nothing found</p>')}).catch(t=>{console.error(t),o=1,i=1,I(),window.lastEvents=[],w.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'})};var V=l,G=u,C=p,Z=h,x=m,O=g,X=I,b=r;let i=1,o=1,s=null;T.addEventListener("click",t=>{const a=t.target.closest("button.page");if(!a||a.disabled)return;const c=Number(a.dataset.page);c&&(i=c,r())}),U&&U.addEventListener("click",t=>{t.preventDefault(),t.stopImmediatePropagation(),i=1,r()},!0),L&&L.addEventListener("input",t=>{t.stopImmediatePropagation(),clearTimeout(s),s=setTimeout(()=>{i=1,r()},350)},!0),N&&N.addEventListener("change",t=>{t.stopImmediatePropagation(),i=1,r()},!0),I(),r()}const M=document.querySelector(".backdrop"),W=document.querySelector(".modal__btn"),P=document.querySelector(".modal__file"),$=document.querySelector(".hero__list");W.addEventListener("click",function(){M.style.opacity="0",M.style.pointerEvents="none"});M.addEventListener("click",function(e){e.target===M&&(M.style.opacity="0",M.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(M.style.opacity="0",M.style.pointerEvents="none")});$.addEventListener("click",function(e){let n=e.target.closest(".hero__item");if(!n)return;let i=Array.prototype.indexOf.call($.children,n),o=window.lastEvents[i];o&&(J(o),M.style.opacity="1",M.style.pointerEvents="all")});function G(e,n){return e.length>n?e.slice(0,n)+"...":e}function J(e){let n="No description";e.info?n=e.info:e.description&&(n=e.description),n=G(n,120);let i="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(i=e.dates.start.localDate);let o="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(o=e.dates.start.localTime);let s="",l="",u="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(s=e._embedded.venues[0].city.name,l=e._embedded.venues[0].country.name,u=e._embedded.venues[0].name);let p=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(p=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const h="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let m="./img/modal-decstop.jpg",g="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let r=0;r<e.images.length;r++)if(e.images[r].width>=640){m=e.images[r].url;break}m==="./img/modal-decstop.jpg"&&(m=e.images[0].url),g=e.images[0].url}P.innerHTML=`
    <img src="${g}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${m}" alt="poster" class="modal__images">
      <ul class="modal-list">
        <li class="modal__item">
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${n}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${i}</p>
          <p class="modal__text">${o} (${s}/${l})</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${s}, ${l}</p>
          <p class="modal__text">${u}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${p}</p>
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
  `,P.querySelectorAll(".modal__button").forEach(r=>{r.addEventListener("click",function(){window.open(this.dataset.url,"_blank")})});let I=document.querySelector(".modal__sub");I&&(I.onclick=function(){window.open("https://www.google.com/search?q="+encodeURIComponent(p),"_blank")})}
//# sourceMappingURL=index.js.map
