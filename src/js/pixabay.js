
export function getImgs(requestImgs) {
    const searchParams = new URLSearchParams({
        key: '44207215-6e26e0e4c00d7fc92f72264f5',
        q: requestImgs,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
}