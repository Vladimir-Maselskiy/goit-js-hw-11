import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';

let lightbox = null;

export function renderHTML(stringHTMLResponce, eventTarget) {
  if (eventTarget.id === 'search-form') {
    refs.gallery.innerHTML = '';
    refs.showMoreBlock.classList.remove('not-visible');
    insertHLML(stringHTMLResponce);
    lightbox = new SimpleLightbox('.gallery a');
  }

  if (eventTarget.id === 'show-more') {
    insertHLML(stringHTMLResponce);
    lightbox.refresh();
    refs.showMoreBlock.classList.remove('not-visible');
  }

  refs.showMoreButton.removeAttribute('disabled');

  function insertHLML(htmlMarkup) {
    refs.gallery.insertAdjacentHTML('beforeend', htmlMarkup);
  }
}
