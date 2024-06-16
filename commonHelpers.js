import{a as l,S as u,i as m}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function d(a){l.defaults.baseURL="https://pixabay.com/api";const r={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:h,per_page:L}};return(await l.get("",r)).data}const g=new u(".gallery-list a",{captionDelay:250,captionsData:"alt"});function y(a,r){if(a.hits.length!==0){const o=a.hits.map(t=>`
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
            </li>`).join("");r.innerHTML=o,g.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const c=document.querySelector(".form-search-imgs"),p=document.querySelector(".img-search-request"),f=document.querySelector(".gallery-list"),n=document.querySelector(".loader");let h=1,L=15;c.addEventListener("submit",async a=>{a.preventDefault(),f.innerHTML="",n.classList.remove("js-hide"),p.value.trim()!==""?await d(p.value).then(r=>{y(r,f),n.classList.add("js-hide")}):(m.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide")),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
