const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function () {
    const randoms = GetRandomNo();
    // const randoms = Math.floor(Math.random() * colors.length); 
    document.body.style.backgroundColor = colors[randoms]
    color.textContent = colors[randoms]
});

function GetRandomNo(){
    return Math.floor(Math.random() * colors.length); 
}