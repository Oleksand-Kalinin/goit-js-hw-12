import{a as g,S as v,i as f}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function y(o,s,a){g.defaults.baseURL="https://pixabay.com/api/";const t={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}};return(await g.get("",t)).data}const w=new v(".gallery-list a",{captionDelay:250,captionsData:"alt"});function L(o,s){if(o.hits.length!==0){const a=o.hits.map(t=>`
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
            </li>`).join("");s.insertAdjacentHTML("beforeend",a),w.refresh()}else f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const h=document.querySelector(".form-search-imgs"),d=document.querySelector(".img-search-request"),m=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),l=document.querySelector(".btn-load-more");let u=15,i,p,b;h.addEventListener("submit",async o=>{if(o.preventDefault(),m.innerHTML="",n.classList.remove("js-hide"),l.classList.add("js-hide"),i=1,d.value.trim()!=="")try{const s=await y(d.value,i,u);L(s,m),b=d.value,p=Math.ceil(s.total/u),i<p&&l.classList.remove("js-hide"),n.classList.add("js-hide")}catch(s){console.log(s)}else f.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide");h.reset()});l.addEventListener("click",async()=>{i+=1,n.classList.remove("js-hide");try{const o=await y(b,i,u);L(o,m),i>=p&&(l.classList.add("js-hide"),f.success({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})),n.classList.add("js-hide");const a=(document.querySelector(".gallery-item").getBoundingClientRect().height+24)*2;setTimeout(()=>{window.scrollBy({top:a,behavior:"smooth"})},1200)}catch(o){console.log(o)}});
//# sourceMappingURL=commonHelpers.js.map
