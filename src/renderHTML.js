import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';

let lightbox = null;

export function renderHTML(stringHTMLResponce, eventTarget) {
  if (eventTarget.id === 'search-form') {
    refs.gallery.innerHTML = '';
    refs.showMoreBlock.classList.remove('not-visible');
    refs.gallery.insertAdjacentHTML('beforeend', stringHTMLResponce);
    lightbox = new SimpleLightbox('.gallery a');
    return;
  }

  refs.gallery.insertAdjacentHTML('beforeend', stringHTMLResponce);
  lightbox.refresh();
  refs.showMoreBlock.classList.remove('not-visible');
}
