import{a as u,S as f,i as m}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(o){const s={params:{key:"44207215-6e26e0e4c00d7fc92f72264f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get("https://pixabay.com/api",s).then(i=>i.data).catch(i=>console.log(i))}const g=new f(".gallery-list a",{captionDelay:250,captionsData:"alt"});function h(o,s){if(o.hits.length!==0){const i=o.hits.map(r=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${r.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${r.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${r.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${r.downloads}</p>
                    </div>
            </li>`).join("");s.innerHTML=i,g.refresh()}else m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}const l=document.querySelector(".form-search-imgs"),c=document.querySelector(".img-search-request"),p=document.querySelector(".gallery-list"),n=document.querySelector(".loader");l.addEventListener("submit",async o=>{o.preventDefault(),p.innerHTML="",n.classList.remove("js-hide"),c.value.trim()!==""?await d(c.value).then(s=>{h(s,p),n.classList.add("js-hide")}).catch(s=>{console.log(s)}):(m.error({message:"Please request for search imgs",position:"topCenter"}),n.classList.add("js-hide")),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
