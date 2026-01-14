(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();function B(e=""){return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${e}`).then(n=>n.json())}const z=document.querySelector(".hero__list"),C=document.querySelector(".header__inp"),q=document.querySelector(".header__btn"),S=document.querySelector(".header__input");let v=[];function F(e,n=60){return e.length<=n?e:e.slice(0,n).trim()+"..."}function Z(e,n=50){return e.length<=n?e:e.slice(0,n).trim()+"..."}function x(e){var d,M,y,u;let n="./img/modal-decstop.jpg";if(e.images&&e.images.length>0){for(let m=0;m<e.images.length;m++)if(e.images[m].width>=640){n=e.images[m].url;break}n==="./img/modal-decstop.jpg"&&(n=e.images[0].url)}const i=Z(e.name,30),o=((M=(d=e.dates)==null?void 0:d.start)==null?void 0:M.localDate)||"Unknown date",s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let l="Unknown place";return((u=(y=e._embedded)==null?void 0:y.venues)==null?void 0:u.length)>0&&(l=e._embedded.venues[0].name||l),l=F(l,15),`
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
  `}function O(e){z.innerHTML=e.map(x).join(""),window.lastEvents=e}function G(){const e=C.value.trim(),n=S.value;let i="&size=30";return e.length>0&&(i+="&keyword="+encodeURIComponent(e)),n.length>0&&(i+="&countryCode="+n),i}function b(){B(G()).then(e=>{var n,i;((i=(n=e._embedded)==null?void 0:n.events)==null?void 0:i.length)>0?(v=e._embedded.events,O(v)):z.innerHTML="<li>Nothing found</li>"}).catch(e=>{console.error(e),z.innerHTML="<li>Nothing found</li>"})}q.addEventListener("click",e=>{e.preventDefault(),b()});C.addEventListener("input",b);S.addEventListener("change",b);async function Q(){return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()).filter(i=>{var o;return i.cca2&&((o=i.name)==null?void 0:o.common)}).map(i=>({code:i.cca2,name:i.name.common})).sort((i,o)=>i.name.localeCompare(o.name,"uk"))}async function Y(e){const n=await Q(),i='<option value="">Choose country</option>',o=n.map(s=>`<option value="${s.code}">${s.name} (${s.code})</option>`).join("");e.innerHTML=i+o,e.value=""}document.addEventListener("DOMContentLoaded",async()=>{await Y(S),b(),S.addEventListener("change",b)});const U=document.querySelector(".backdrop");document.querySelector(".modal__btn");const W=document.querySelector(".hero");W.addEventListener("click",e=>{if(e.target.closest(".hero__item"))U.style.opacity="1",U.style.pointerEvents="all";else return});const L=document.querySelector(".pagination"),E=document.querySelector(".hero__list"),N=document.querySelector(".header__inp"),$=document.querySelector(".header__btn"),D=document.querySelector(".header__input");if(!(!L||!E)){let l=function(t,a){const c=Math.floor(999/a)+1;return Math.min(t,c)},d=function(t,a=60){return t?t.length<=a?t:t.slice(0,a).trim()+"...":""},M=function(t,a=50){return t?t.length<=a?t:t.slice(0,a).trim()+"...":""},y=function(t){var w,g,k,A;let a="./img/modal-decstop.jpg";if(t.images&&t.images.length>0){for(let T=0;T<t.images.length;T++)if(t.images[T].width>=640){a=t.images[T].url;break}a==="./img/modal-decstop.jpg"&&(a=t.images[0].url)}const c=M(t.name,30),r=((g=(w=t.dates)==null?void 0:w.start)==null?void 0:g.localDate)||"Unknown date",f="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDE1MyAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDAuNUgxNTIuNVY5M0MxNTIuNSAxMjAuMzM4IDEzMC4zMzggMTQyLjUgMTAzIDE0Mi41SDAuNVY1MEMwLjUgMjIuNjYxOSAyMi42NjE5IDAuNSA1MCAwLjVaIiBzdHJva2U9IiNEQzU2QzUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=";let h="Unknown place";return((A=(k=t._embedded)==null?void 0:k.venues)==null?void 0:A.length)>0&&(h=t._embedded.venues[0].name||h),h=d(h,15),`
      <li class="hero__item">
        <div class="hero__card">
          <img class="hero__icon" src="${f}" alt="fons">
          <img src="${a}" alt="${c}" class="hero__images" />
          <h3 class="hero__title">${c}</h3>
          <div class="hero__box">
            <svg class="hero__img">
              <use href="./img/symbol-defs.svg#icon-place"></use>
            </svg>
            <h4 class="hero__desk">${h}</h4>
          </div>
          <p class="hero__text">${r}</p>
        </div>
      </li>
    `},u=function(t){window.lastEvents=t,E.innerHTML=t.map(y).join("")},m=function(){const t=N?N.value.trim():"",a=D?D.value:"";let r=`&size=30&page=${i-1}`;return t.length>0&&(r+="&keyword="+encodeURIComponent(t)),a.length>0&&(r+="&countryCode="+a),r},I=function(){L.innerHTML="";const t=(f,h,w={})=>{const g=document.createElement("button");g.type="button",g.className="page",g.textContent=f,w.disabled&&(g.disabled=!0),w.active&&g.classList.add("is-active"),h!=null&&(g.dataset.page=String(h)),L.appendChild(g)},a=Math.floor(5/2);let c=i-a,r=i+a;c<1&&(r+=1-c,c=1),r>o&&(c-=r-o,r=o),c=Math.max(1,c),t("«",i-1,{disabled:i===1}),c>1&&(t("1",1,{active:i===1}),c>2&&t("...",null,{disabled:!0}));for(let f=c;f<=r;f+=1)t(String(f),f,{active:f===i});r<o&&(r<o-1&&t("...",null,{disabled:!0}),t(String(o),o,{active:i===o})),t("»",i+1,{disabled:i===o})},p=function(){E.innerHTML='<p class="hero__desk deskbox">Loading...</p>',window.lastEvents=[],B(m()).then(t=>{var c;t&&t.page&&typeof t.page.totalPages=="number"?o=l(t.page.totalPages,30):o=1,i>o&&(i=o),I();const a=((c=t==null?void 0:t._embedded)==null?void 0:c.events)||[];a.length>0?u(a):(window.lastEvents=[],E.innerHTML='<p class="hero__desk deskbox">Nothing found</p>')}).catch(t=>{console.error(t),o=1,i=1,I(),window.lastEvents=[],E.innerHTML='<p class="hero__desk deskbox">Nothing found</p>'})};var X=l,R=d,Z=M,x=y,O=u,G=m,K=I,b=p;let i=1,o=1,s=null;L.addEventListener("click",t=>{const a=t.target.closest("button.page");if(!a||a.disabled)return;const c=Number(a.dataset.page);c&&(i=c,p())}),$&&$.addEventListener("click",t=>{t.preventDefault(),t.stopImmediatePropagation(),i=1,p()},!0),N&&N.addEventListener("input",t=>{t.stopImmediatePropagation(),clearTimeout(s),s=setTimeout(()=>{i=1,p()},350)},!0),D&&D.addEventListener("change",t=>{t.stopImmediatePropagation(),i=1,p()},!0),I(),p()}const _=document.querySelector(".backdrop"),J=document.querySelector(".modal__btn"),P=document.querySelector(".modal__file"),H=document.querySelector(".hero__list");J.addEventListener("click",function(){_.style.opacity="0",_.style.pointerEvents="none"});_.addEventListener("click",function(e){e.target===_&&(_.style.opacity="0",_.style.pointerEvents="none")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(_.style.opacity="0",_.style.pointerEvents="none")});H.addEventListener("click",function(e){let n=e.target.closest(".hero__item");if(!n)return;let i=Array.prototype.indexOf.call(H.children,n),o=window.lastEvents[i];o&&(V(o),_.style.opacity="1",_.style.pointerEvents="all")});function R(e,n){return e.length>n?e.slice(0,n)+"...":e}function V(e){let n="No description";e.info?n=e.info:e.description&&(n=e.description),n=R(n,120);let i="—";e.dates&&e.dates.start&&e.dates.start.localDate&&(i=e.dates.start.localDate);let o="—";e.dates&&e.dates.start&&e.dates.start.localTime&&(o=e.dates.start.localTime);let s="",l="",d="";e._embedded&&e._embedded.venues&&e._embedded.venues.length>0&&(s=e._embedded.venues[0].city.name,l=e._embedded.venues[0].country.name,d=e._embedded.venues[0].name);let M=e.name;e._embedded&&e._embedded.attractions&&e._embedded.attractions.length>0&&(M=e._embedded.attractions[0].name),e.priceRanges&&e.priceRanges.length>0&&(e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency);const y="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yMjIyMiAwTDAgMEwwIDE5LjMzMzNIMy4yMjIyMkwzLjIyMjIyIDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTExLjMyNjYgMEw4LjEwNDQgMEw4LjEwNDQgMTkuMzMzM0gxMS4zMjY2TDExLjMyNjYgMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTYuMjA4OCAwTDEyLjk4NjYgMEwxMi45ODY2IDE5LjMzMzNIMTYuMjA4OEwxNi4yMDg4IDBaIiBmaWxsPSIjMEUwRTBFIi8+PHBhdGggZD0iTTI4Ljk5OTkgMEwyNC4yMTU0IDBMMjQuMjE1NCAxOS4zMzMzSDI4Ljk5OTlMMjguOTk5OSAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik02LjQ0NDQ4IDBMNC44ODIxOSAwTDQuODgyMTkgMTkuMzMzM0g2LjQ0NDQ4TDYuNDQ0NDggMFoiIGZpbGw9IiMwRTBFMEUiLz48cGF0aCBkPSJNMTkuMzMzMyAwTDE3Ljc3MSAwTDE3Ljc3MSAxOS4zMzMzSDE5LjMzMzNMMTkuMzMzMyAwWiIgZmlsbD0iIzBFMEUwRSIvPjxwYXRoIGQ9Ik0yMi41NTU1IDBMMjAuOTkzMiAwTDIwLjk5MzIgMTkuMzMzM0gyMi41NTU1TDIyLjU1NTUgMFoiIGZpbGw9IiMwRTBFMEUiLz48L3N2Zz4=";let u="./img/modal-decstop.jpg",m="./img/modal-logo.jpg";if(e.images&&e.images.length>0){for(let j=0;j<e.images.length;j++)if(e.images[j].width>=640){u=e.images[j].url;break}u==="./img/modal-decstop.jpg"&&(u=e.images[0].url),m=e.images[0].url}P.innerHTML=`
    <img src="${m}" alt="logo" class="modal__img">
    <div class="modal__box">
      <img src="${u}" alt="poster" class="modal__images">
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
          <p class="modal__text">${d}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text modal__artist">${M}</p>
        </li>
        <li class="modal__item">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__bex">
           <img class="modal__icon" src="${y}" alt="icon">
            <p class="modal__desk">Standart 300-500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
             <div class="modal__bex">
           <img class="modal__icon" src="${y}" alt="icon">
            <p class="modal__desk">VIP 1000-1500 UAH</p>
          </div>
          <button class="modal__button" data-url="${e.url}">BUY TICKETS</button>
        </li>
      </ul>
    </div>
  `;let I=P.querySelector(".modal__button");I&&I.addEventListener("click",function(){window.open(this.dataset.url,"_blank")});let p=document.querySelector(".modal__sub");p&&(p.onclick=function(){window.open("https://www.google.com/search?q="+M,"_blank")})}
//# sourceMappingURL=index.js.map
