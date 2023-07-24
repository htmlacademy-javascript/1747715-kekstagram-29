import { createPhotography } from './card.js';
import { DATA } from './data.js';
import { renderPictures } from './thumbnail-rendering.js';

const cardsData = Array.from({length: DATA.PHOTOS_COUNT}, createPhotography)

renderPictures(cardsData);
