import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImgs } from "./js/pixabay";
import { markupGallery } from "./js/render-functions";

const formSearchImgs = document.querySelector('.form-search-imgs');
const inputSearchImgs = document.querySelector('.img-search-request');
const galleryListEl = document.querySelector('.gallery-list');
const loaderEl = document.querySelector('.loader');


formSearchImgs.addEventListener('submit', (event) => {
    event.preventDefault();
    galleryListEl.innerHTML = '';
    loaderEl.classList.remove('js-hide');

    if (inputSearchImgs.value.trim() !== '') {
        getImgs(inputSearchImgs.value, galleryListEl, loaderEl)
            .then((objImgs) => {
                markupGallery(objImgs, galleryListEl);
                loaderEl.classList.add('js-hide');
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