// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const forms = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitbtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearbtn = document.querySelector('.clear-btn');
// const title = document.querySelector('.title');

// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
window.addEventListener('DOMContentLoaded', setupitems);
forms.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItems(id, value);

    // show container
    container.classList.add('show-container');

    // alert
    displayAlert('item added successfully', 'success');

    // add to local storage
    addToLocalStorage(id, value);

    // set back to defalut
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('item edit successfully', 'success');

    // edit local storage
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    // alert.textContent = 'empty value'
    // alert.classList.add('alert-danger')
    displayAlert('please enter value', 'danger');
  }

  // clear items
  clearbtn.addEventListener('click', function () {
    const item = document.querySelectorAll('.grocery-item');
    if (item.length > 0) {
      item.forEach(function (item) {
        list.removeChild(item);
      });
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    // addToLocalStorage.removeItem('list')
  });
});

// function for display alert

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = ' ';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editId = '';
  submitbtn.textContent = 'submit';
}

// local storage

function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
  // let items =localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')):[];
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
  console.log(items);
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  // let items = localStorage.getItem('list')
  //   ? JSON.parse(localStorage.getItem('list'))
  //   : [];

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  // let items = localStorage.getItem('list')
  //   ? JSON.parse(localStorage.getItem('list'))
  //   : [];

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function setupitems() {
  let items = getLocalStorage();
  items.forEach(function (item) {
    createListItems(item.id, item.value);
  });
  container.classList.add('show-container');
}
function createListItems(id, value) {
  const element = document.createElement('article');

  // add class in element
  element.classList.add('grocery-item');

  // create new attr and add id in value
  let attr = document.createAttribute('data-id');
  attr.value = id;

  // set id in element
  element.setAttributeNode(attr);

  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn" type="button">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  // edit function
  const editbtn = element.querySelector('.edit-btn');
  editbtn.addEventListener('click', function (e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitbtn.textContent = 'edit';
  });

  // delete function
  const deletebtn = element.querySelector('.delete-btn');
  deletebtn.addEventListener('click', function (e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    displayAlert('item deleted successfully', 'danger');
    if (list.children.length === 0) {
      container.classList.remove('show-container');
    }
    setBackToDefault();

    // remove from local storage
    removeFromLocalStorage(id);
  });

  // element added in list
  list.appendChild(element);
}








