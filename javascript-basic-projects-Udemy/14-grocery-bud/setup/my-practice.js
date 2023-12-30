const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const clearBtn = document.querySelector('.clear-btn');
const grocery = document.getElementById('grocery');
const submitbtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');

let editElement;
let editFlag = false;
let editId = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createlistItem(id, value);
    container.classList.add('show-container');
    displayalert('item added in list successfully', 'success');
    setBackToDefault()
  }
  else if(value && editFlag){
    edititem.innerHTML = grocery.value
    displayalert('item edit successfully', 'success');
    // setBackToDefault()
  }
  else{
    displayalert('please enter grocery name ', 'danger')
  }
  clearBtn.addEventListener('click', function(e){
    const item = document.querySelectorAll('.grocery-item')
    if(item.length > 0 ){
      item.forEach(function(i){
      list.removeChild(i)
      })
      container.classList.remove('show-container')
      setBackToDefault()
      displayalert('clear items successfully', 'danger')
    }
  })

  // console.log(id);
});

function displayalert(name, signal) {
  alert.textContent = name;
  alert.classList.add(`alert-${signal}`);

  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${signal}`);
  }, 1000);
}
function createlistItem(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');

  const attr = document.createAttribute('dataset-id');
  attr.value = id;
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn" type="button">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  list.appendChild(element);
  const editbtn = element.querySelector('.edit-btn')
  editbtn.addEventListener('click', function(e){
    // const element = e.currentTarget.parentElement.parentElement
    const edititem = e.currentTarget.parentElement.previousElementSibling
    grocery.value = edititem.innerHTML
    // editFlag = true;
    editId = element.dataset.id;
    submitbtn.innerHTML = 'edit'
  })
  const deletebtn = element.querySelector('.delete-btn')
  deletebtn.addEventListener('click', function(e){
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element)
    if(list.children.length === 0 ){
      container.classList.remove('show-container')
    }
    setBackToDefault()
    displayalert('item deleted successfully', 'danger')
  })
}

function setBackToDefault(){
  grocery.value = ''
  submitbtn.innerHTML = 'submit'
  editFlag = false
}
