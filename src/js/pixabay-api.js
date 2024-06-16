import axios from 'axios';
// import { page, perPage } from '../main.js';

export async function getImgs(requestImgs) {

    // axios.defaults.baseURL = 'http://pixabay.com/api'
    const option = {
        params: {
            key: '44207215-6e26e0e4c00d7fc92f72264f5',
            q: requestImgs,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            // page,
            // per_page: perPage,
        },
    }
    const response = await axios.get('https://pixabay.com/api', option);
    console.log(response.data);
    return response.data;
}