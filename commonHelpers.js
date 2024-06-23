import{a as g,S as v,i as f}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function y(r,s,a){g.defaults.baseURL="https://pixabay.com/api/";const t={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}};return(await g.get("",t)).data}const j=new v(".gallery-list a",{captionDelay:250,captionsData:"alt"});function L(r,s){if(r.hits.length!==0){const a=r.hits.map(t=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${t.webformatURL}"
                            alt="${t.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${t.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${t.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${t.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${t.downloads}</p>
                    </div>
            </li>`).join("");s.insertAdjacentHTML("beforeend",a),j.refresh()}else f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const h=document.querySelector(".form-search-imgs"),d=document.querySelector(".img-search-request"),m=document.querySelector(".gallery-list"),l=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");let u=15,n=1,p,b;h.addEventListener("submit",async r=>{if(r.preventDefault(),n=1,m.innerHTML="",l.classList.remove("js-hide"),i.classList.add("js-hide"),d.value.trim()!=="")try{const s=await y(d.value,n,u);L(s,m),b=d.value,p=Math.ceil(s.total/u),n<p&&i.classList.remove("js-hide"),l.classList.add("js-hide")}catch(s){console.log(s)}else f.error({message:"Please request for search imgs",position:"topCenter"}),l.classList.add("js-hide");h.reset()});i.addEventListener("click",async r=>{n+=1,i.classList.add("js-hide");const s=r.target.getBoundingClientRect().top-12;l.classList.remove("js-hide");try{const a=await y(b,n,u);L(a,m),n>=p?(i.classList.add("js-hide"),f.success({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})):i.classList.remove("js-hide"),l.classList.add("js-hide"),setTimeout(()=>{window.scrollBy({top:s,behavior:"smooth"})},1200)}catch(a){console.log(a)}});
//# sourceMappingURL=commonHelpers.js.map
