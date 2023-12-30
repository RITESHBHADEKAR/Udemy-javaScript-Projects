function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  // console.log(element);
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  // target
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.imgName = getElement('.image-name');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  // let self = this;
  // bind function
  // this.openModal = this.openModal.bind(this)
  // container event
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.container.addEventListener(
    'click',
    function (e) {
      // self.openModal();
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
        console.log(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imgName.textContent = selectedImage.title;
};

Gallery.prototype.openModal = function (selectedImage, list) {
  // console.log(this);
  this.setMainImage(selectedImage);

  this.modalImages.innerHTML = this.list
    .map((i) => {
      return `<img src="${i.src}" title="${i.title}" data-id="${
        i.dataset.id
      }" class=" ${
        selectedImage.dataset.id === i.dataset.id
          ? 'modal-img selected'
          : 'modal-img'
      } "/>`;
    })
    .join(' ');

  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
};
Gallery.prototype.nextImage = () => {
  const selected = this.modalImages.querySelector('.selected');
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
};
Gallery.prototype.prevImage = () => {};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
