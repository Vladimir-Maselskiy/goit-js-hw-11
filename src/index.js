import './css/styles.css';
import { refs } from './refs';
import { makeHTML } from './makeHTMLResponce';
import { renderHTML } from './renderHTML';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchInstance, options } from './makeAPIRequestInstance';

refs.form.addEventListener('submit', onSearch);
refs.showMoreButton.addEventListener('click', onSearch);

console.log(refs.showMoreButton);

let eventTarget = null;

function onSearch(event) {
  event.preventDefault();
  refs.showMoreBlock.classList.add('not-visible');
  eventTarget = event.target;
  options.params.q = refs.input.value;
  options.params.page = event.target.id === 'search-form' ? 1 : options.params.page + 1;
  fetchSeachRequest(options);
}

function fetchSeachRequest(options) {
  searchInstance
    .get('', options)
    .then(responce => {
      const stringHTMLResponce = makeHTML(responce.data.hits);
      renderHTML(stringHTMLResponce, eventTarget);
    })
    .catch(console.log);
}

// function getImageData(result) {
//   const imagesData = [];
//   return result.hits.map(hit => {

//     return { largeImageURL, webformatURL, tags };
//   });
// }

// const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
