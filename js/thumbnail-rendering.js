const picturesContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = ({ url, description, likes, comments }) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__info').querySelector('.picture__comments').textContent = likes;
  pictureElement.querySelector('.picture__info').querySelector('.picture__likes').textContent = comments.length;

  return pictureElement;
};

const renderPictures = (pictures) => {
  const picturesListFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    picturesListFragment.append(createPicture(picture));
  });
  picturesContainer.append(picturesListFragment);
};

export { renderPictures };
