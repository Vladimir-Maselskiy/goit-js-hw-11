const axios = require('axios');

const KEY = '27043383-c7c491508b66f3626efdecd2d';
const BASE_URL = `https://pixabay.com/api/`;

// console.log(refs.header);

const options = {
  params: {
    key: KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page: 1,
  },
};

const searchInstance = axios.create({
  baseURL: BASE_URL,
});

export { searchInstance, options };
