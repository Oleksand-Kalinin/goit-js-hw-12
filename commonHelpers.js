import{a as g,S as v,i as f}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function y(r,s,a){g.defaults.baseURL="https://pixabay.com/api/";const t={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}};return(await g.get("",t)).data}const q=new v(".gallery-list a",{captionDelay:250,captionsData:"alt"});function L(r,s){if(r.hits.length!==0){const a=r.hits.map(t=>`
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
            </li>`).join("");s.insertAdjacentHTML("beforeend",a),q.refresh()}else f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const h=document.querySelector(".form-search-imgs"),d=document.querySelector(".img-search-request"),u=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),l=document.querySelector(".btn-load-more");let m=15,i,p,b;h.addEventListener("submit",async r=>{if(r.preventDefault(),u.innerHTML="",n.classList.remove("js-hide"),l.classList.add("js-hide"),i=1,d.value.trim()!=="")try{const s=await y(d.value,i,m);L(s,u),b=d.value,p=Math.ceil(s.total/m),i<p&&l.classList.remove("js-hide"),n.classList.add("js-hide")}catch(s){console.log(s)}else f.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide");h.reset()});l.addEventListener("click",async()=>{i+=1,n.classList.remove("js-hide");try{const r=await y(b,i,m);L(r,u),i>=p&&(l.classList.add("js-hide"),f.success({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})),n.classList.add("js-hide");const a=document.querySelector(".gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy(0,a*2+24)},1500)}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
