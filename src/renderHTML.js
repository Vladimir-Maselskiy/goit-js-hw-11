import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';

let lightbox = null;

export function renderHTML(stringHTMLResponce, eventTarget) {
  if (eventTarget.id === 'search-form') {
    refs.gallery.innerHTML = '';
    insertHLML(stringHTMLResponce);
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    if (!refs.scrollInput.checked) refs.showMoreBlock.classList.remove('not-visible');
  }

  if (eventTarget.id === 'show-more') {
    insertHLML(stringHTMLResponce);
    lightbox.refresh();
    refs.showMoreBlock.classList.remove('not-visible');
  }

  if (eventTarget.type === 'scroll') {
    insertHLML(stringHTMLResponce);
    lightbox.refresh();
  }

  refs.showMoreButton.removeAttribute('disabled');

  function insertHLML(htmlMarkup) {
    refs.gallery.insertAdjacentHTML('beforeend', htmlMarkup);
  }
}
