const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slide.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});
function carousel() {
  //   if (counter === slide.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slide.length - 1;
  //   }

  // working with buttons
  if (counter < slide.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
  slide.forEach(function (slides) {
    slides.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = 'none';
