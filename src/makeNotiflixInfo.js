import Notiflix from 'notiflix';
import { refs } from './refs';
import { onScrollTrotlled } from './setSearchInterfaceOption';

export function makeNotiflixInfo(responce, options, eventTarget) {
  if (responce.data.totalHits === 0) {
    Notiflix.Notify.info(
      'Sorry, there are no images matching your search query. Please try again.',
    );
    refs.showMoreBlock.classList.add('not-visible');
    return;
  }

  if (eventTarget.id === 'search-form') {
    Notiflix.Notify.info(`Hooray! We found ${responce.data.totalHits} images.`);
  }

  if (options.params.page * options.params.per_page >= responce.data.totalHits) {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    refs.showMoreBlock.classList.add('not-visible');
    removeEventListener('scroll', onScrollTrotlled);
    return;
  }
}
