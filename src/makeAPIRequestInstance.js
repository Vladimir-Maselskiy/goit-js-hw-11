const axios = require('axios');
import { makeHTML } from './makeHTMLResponce';
import { renderHTML } from './renderHTML';
import { makeNotiflixInfo } from './makeNotiflixInfo';

const KEY = '27043383-c7c491508b66f3626efdecd2d';
const BASE_URL = `https://pixabay.com/api/`;

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

function fetchSeachRequest(eventTarget) {
  searchInstance
    .get('', options)
    .then(responce => {
      console.log(responce);
      const stringHTMLResponce = makeHTML(responce.data.hits);
      renderHTML(stringHTMLResponce, eventTarget);
      makeNotiflixInfo(responce, options, eventTarget);
    })
    .catch(console.log);
}

export { fetchSeachRequest, options };
