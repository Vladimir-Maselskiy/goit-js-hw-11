import { fetchSeachRequest, options } from './makeAPIRequestInstance';
import { refs } from './refs';

export function onScroll(event) {
  const galleryRectangle = refs.gallery.getBoundingClientRect();
  if (galleryRectangle.bottom < 800) {
    options.params.page += 1;
    fetchSeachRequest(event);
  }
}
