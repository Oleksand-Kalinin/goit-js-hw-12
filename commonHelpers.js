import{a as f,S as u,i as m}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function d(o){const r={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}},a=await f.get("https://pixabay.com/api",r);return console.log(a.data),a.data}const g=new u(".gallery-list a",{captionDelay:250,captionsData:"alt"});function y(o,r){if(o.hits.length!==0){const a=o.hits.map(t=>`
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
            </li>`).join("");r.innerHTML=a,g.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const l=document.querySelector(".form-search-imgs"),c=document.querySelector(".img-search-request"),p=document.querySelector(".gallery-list"),n=document.querySelector(".loader");l.addEventListener("submit",async o=>{o.preventDefault(),p.innerHTML="",n.classList.remove("js-hide"),c.value.trim()!==""?await d(c.value).then(r=>{y(r,p),n.classList.add("js-hide")}):(m.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide")),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
