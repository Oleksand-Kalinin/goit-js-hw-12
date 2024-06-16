import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImgs } from "./js/pixabay-api.js";
import { markupGallery } from "./js/render-functions.js";

const formSearchImgs = document.querySelector('.form-search-imgs');
const inputSearchImgs = document.querySelector('.img-search-request');
const galleryListEl = document.querySelector('.gallery-list');
const loaderEl = document.querySelector('.loader');
// export let page = 1;
// export let perPage = 15;


formSearchImgs.addEventListener('submit', async (event) => {
    event.preventDefault();
    galleryListEl.innerHTML = '';
    loaderEl.classList.remove('js-hide');

    if (inputSearchImgs.value.trim() !== '') {
        await getImgs(inputSearchImgs.value, galleryListEl, loaderEl)
            .then((objImgs) => {
                markupGallery(objImgs, galleryListEl);
                loaderEl.classList.add('js-hide');
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        iziToast.error({
            message: 'Please request for search imgs',
            position: 'topCenter',
        });
        loaderEl.classList.add('js-hide');
    }
    formSearchImgs.reset();

})
