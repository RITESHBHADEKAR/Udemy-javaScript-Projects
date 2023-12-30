import people from './data.js';

// console.log(people);

const container = document.querySelector('.slide-container');
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
container.innerHTML = people
  .map((i, index) => {
    let position = 'next';
    if (index === 0) {
      position = 'active';
    }
    if (index === people.length - 1) {
      position = 'last';
    }
    return `<article class="slide ${position}">
    <img src="${i.img}" alt="" class="img">
    <h4>${i.name}</h4>
    <p class="title">${i.job}</p>
    <p class="text">${i.text}</p>
    <div class="quote-icon">
      <div class="fas fa-quote-right"></div>
    </div>
  </article>`;
  })
  .join(' ');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');
  
  if (type === 'prev') {
      active.classList.add('next');
      last.classList.add('active');
      next = last.previousElementSibling
      if(!next){
          next = container.lastElementChild
        }
        next.classList.add('last');
        next.classList.remove('next');
    return;
  }
  // if(type === 'next'){
  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
  // }
};

nextbtn.addEventListener('click', () => {
//   startSlider('next');
  startSlider();
});
prevbtn.addEventListener('click', () => {
  startSlider('prev');
});
