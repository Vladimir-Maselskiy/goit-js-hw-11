import imageCardTmpl from './templates/imageCard.hbs';

export function makeHTML(imagesData) {
  return imagesData.map(imageCardTmpl).join('');
}


