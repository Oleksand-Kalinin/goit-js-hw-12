import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const lightbox = new SimpleLightbox('.gallery-list a', {
    captionDelay: 250,
    captionsData: 'alt',
});

export function markupGallery(objImgs, domEl) {
    if (objImgs.hits.length !== 0) {
        const markup = objImgs.hits
            .map(image => {
                return `
            <li class="gallery-item">
                <a class="gallery-link" href="${image.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${image.webformatURL}"
                            alt="${image.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${image.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${image.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${image.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${image.downloads}</p>
                    </div>
            </li>`
            })
            .join('');

        domEl.innerHTML = markup;

        lightbox.refresh();

    } else {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topCenter',
        });
    }

}
