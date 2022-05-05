import './css/styles.css';
import { refs } from './refs';
import { setSeachIterfaceOption } from './setSearchInterfaceOption';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchSeachRequest, options } from './makeAPIRequestInstance';

refs.form.addEventListener('submit', onSearch);
refs.showMoreButton.addEventListener('click', onSearch);

let eventTarget = null;

function onSearch(event) {
  setSeachIterfaceOption();
  event.preventDefault();
  if (event.target.id === 'search-form') {
    refs.showMoreBlock.classList.add('not-visible');
  }
  if (event.target.id === 'show-more') {
    refs.showMoreButton.setAttribute('disabled', 'disabled');
  }
  eventTarget = event.target;
  options.params.q = refs.input.value;
  options.params.page = event.target.id === 'search-form' ? 1 : options.params.page + 1;
  fetchSeachRequest(eventTarget);
}

// function getImageData(result) {
//   const imagesData = [];
//   return result.hits.map(hit => {

//     return { largeImageURL, webformatURL, tags };
//   });
// }

// const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
