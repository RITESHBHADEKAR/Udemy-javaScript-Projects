const closebtn = document.querySelector('.close-btn');
const togglebtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');



togglebtn.addEventListener('click', function () {
if(sidebar.classList.contains('show-sidebar')){
    sidebar.classList.remove('show-sidebar')
}
else{
  sidebar.classList.add('show-sidebar');
}
});

closebtn.addEventListener('click', function () {
    // sidebar.classList.toggle('show-sidebar')
    sidebar.classList.remove('show-sidebar')
//   sidebar.style.transform = 'translate(-100%)';
});

