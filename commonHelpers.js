import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();function p(o){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44207215-6e26e0e4c00d7fc92f72264f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{console.log(e)})}const d=new f(".gallery-list a",{captionDelay:250,captionsData:"alt"});function g(o,r){if(o.hits.length!==0){const a=o.hits.map(e=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${e.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${e.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${e.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${e.downloads}</p>
                    </div>
            </li>`).join("");r.innerHTML=a,d.refresh()}else u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const l=document.querySelector(".form-search-imgs"),c=document.querySelector(".img-search-request"),m=document.querySelector(".gallery-list"),n=document.querySelector(".loader");l.addEventListener("submit",o=>{o.preventDefault(),m.innerHTML="",n.classList.remove("js-hide"),c.value.trim()!==""?p(c.value).then(r=>{g(r,m),n.classList.add("js-hide")}):(u.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide")),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
