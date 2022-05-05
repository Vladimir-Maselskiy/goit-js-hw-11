import { options } from './makeAPIRequestInstance';
import { refs } from './refs';

export function mafeScrollAction() {
  try {
    let { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();
    cardHeight = options.params.page === 1 ? cardHeight / 1.3 : cardHeight;
    window.scrollBy({
      top: cardHeight * 1.2,
      behavior: 'smooth',
    });
  } catch {
    console.log('Sorry, there are no images matching your search query. Please try again.');
  }
}
