import { refs } from './refs';
import { onScroll } from './onScroll';
import { options } from './makeAPIRequestInstance';
var throttle = require('lodash.throttle');

export var onScrollTrotlled = throttle(onScroll, 300);

export function setSeachIterfaceOption(event) {
  removeEventListener('scroll', onScrollTrotlled);
  if (refs.scrollInput.checked) {
    addEventListener('scroll', onScrollTrotlled);
    refs.showMoreBlock.classList.add('not-visible');
  }
  if (event.target.id === 'search-form') {
    refs.showMoreBlock.classList.add('not-visible');
  }
  if (event.target.id === 'show-more') {
    refs.showMoreButton.setAttribute('disabled', 'disabled');
  }
  options.params.q = refs.input.value;
  options.params.page = event.target.id === 'search-form' ? 1 : options.params.page + 1;
}
