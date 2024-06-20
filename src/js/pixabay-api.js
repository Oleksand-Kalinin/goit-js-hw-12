import axios from 'axios';

export async function getImgs(requestImgs, numberPage, countImgsForOnePage) {

    axios.defaults.baseURL = 'https://pixabay.com/api/'
    const option = {
        params: {
            key: '44207215-6e26e0e4c00d7fc92f72264f5',
            q: requestImgs,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: numberPage,
            per_page: countImgsForOnePage,
        },
    }
    const response = await axios.get('', option);
    return response.data;

}