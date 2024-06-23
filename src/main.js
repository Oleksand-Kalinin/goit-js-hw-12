import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImgs } from "./js/pixabay-api.js";
import { markupGallery } from "./js/render-functions.js";
import {
    formSearchImgs,
    inputSearchImgs,
    galleryListEl,
    loaderEl,
    btnLoadMoreEl
} from "./js/refs.js";

let countImgsForOnePage = 15;
let numberPage = 1;
let totalPage;
let currentUserRequest;



formSearchImgs.addEventListener('submit', async (event) => {

    event.preventDefault();
    galleryListEl.innerHTML = '';
    loaderEl.classList.remove('js-hide');
    btnLoadMoreEl.classList.add('js-hide');

    if (inputSearchImgs.value.trim() !== '') {
        try {
            const objImgs = await getImgs(inputSearchImgs.value, numberPage, countImgsForOnePage);
            markupGallery(objImgs, galleryListEl);

            currentUserRequest = inputSearchImgs.value;
            totalPage = Math.ceil(objImgs.total / countImgsForOnePage);

            if (numberPage < totalPage) {
                btnLoadMoreEl.classList.remove('js-hide');
            }

            loaderEl.classList.add('js-hide');

        }
        catch (err) {
            console.log(err);
        }
    } else {
        iziToast.error({
            message: 'Please request for search imgs',
            position: 'topCenter',
        });
        loaderEl.classList.add('js-hide');
    }

    formSearchImgs.reset();

})



btnLoadMoreEl.addEventListener('click', async (e) => {

    numberPage += 1;
    const heightForScroll = e.target.getBoundingClientRect().top - 12;



    loaderEl.classList.remove('js-hide');

    try {
        const objImgs = await getImgs(currentUserRequest, numberPage, countImgsForOnePage);
        markupGallery(objImgs, galleryListEl);

        if (numberPage >= totalPage) {
            btnLoadMoreEl.classList.add('js-hide');
            iziToast.success({
                message: `We're sorry, but you've reached the end of search results.`,
                position: 'bottomCenter',
            });
        }

        loaderEl.classList.add('js-hide');


        setTimeout(() => {
            window.scrollBy({
                top: heightForScroll,
                behavior: 'smooth'
            });
        }, 1200);

    }
    catch (err) {
        console.log(err);
    }

});