import './css/styles.css';
import { refs } from './refs';
import { setSeachIterfaceOption } from './setSearchInterfaceOption';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchSeachRequest, options } from './makeAPIRequestInstance';

refs.form.addEventListener('submit', onSearch);
refs.showMoreButton.addEventListener('click', onSearch);

let eventTarget = null;

function onSearch(event) {
  event.preventDefault();
  eventTarget = event.target;
  setSeachIterfaceOption(event);
  fetchSeachRequest(eventTarget);
}
