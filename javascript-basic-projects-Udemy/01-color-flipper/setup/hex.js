const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexno = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexColor = '#';
  for (i = 0; i < 6; i++) {
    hexColor += hex[random()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function random() {
  return Math.floor(Math.random() * hex.length);
}

// function random1() {
//   return Math.floor(Math.random() * hex.length);
// }





// my own challenge

const btn1 = document.getElementById('btn1');
const no1 = document.querySelector('.no');

btn1.addEventListener('click', function(){
let nos = '#'
for(let i = 0 ; i<10; i++){
  nos +=  hexno[random2()];
}
no1.textContent = nos;
})
function random2(){
    return Math.floor(Math.random() * hexno.length)
}