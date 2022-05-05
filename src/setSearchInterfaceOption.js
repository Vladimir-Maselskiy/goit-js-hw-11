import { refs } from './refs';
import { onScroll } from './onScroll';
var throttle = require('lodash.throttle');

var tr1 = throttle(onScroll, 300);

export function setSeachIterfaceOption() {
  removeEventListener('scroll', tr1);
  if (refs.scrollInput.checked) {
    addEventListener('scroll', tr1);
    refs.showMoreBlock.classList.add('not-visible');
  }
}
