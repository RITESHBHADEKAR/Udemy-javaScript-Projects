import getElements from './utils/getelement.js';
import getuser from './utils/getuser.js';


const btn = getElements('.btn');
const btns = [...document.querySelectorAll('.icon')];
const img = getElements('.user-img');
const title = getElements('.user-title');
const value = getElements('.user-value');

const displayuser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');


  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
    });
  });
};

const showuser = async () => {
  // get user from api
  //   async function returns promises so
  const person = await getuser();
  displayuser(person);
};

window.addEventListener('DOMContentLoaded', showuser);
btn.addEventListener('click', showuser);
