let filteredproducts = [...products];
const productContainer = document.querySelector('.products-container');

const displayProducts = () => {
  // if statement
  if (filteredproducts.length < 1) {
    productContainer.innerHTML = `<h6 >sorry, no products matched your search <h6>`;
    return;
  }

  productContainer.innerHTML = filteredproducts
    .map((item) => {
      return `<article class="products" data-id= "${item.id}">
         <img src=${item.image}  class="product-img img">
          <footer>
            <h5 class="product-name">${item.title}</h5>
            <span class="product-price">${item.price}</span>
          </footer>
        </article>`;
    })
    .join(' ');
};

displayProducts();

// filter based on text search

const form = document.querySelector('.input-form ');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  // keyup = fired when key released
  const inputvalue = searchInput.value;
  // console.log(inputvalue);
  filteredproducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputvalue);
  });
  displayProducts();
});

// filter buttons
const btns = document.querySelector('.companies');

const displaybtns = () => {
  const productbtns = ['all', ...new Set(products.map((item) => item.company))];
  btns.innerHTML = productbtns.map((company)=>{
    return `<button class="company-btn" data-id = "${company}">${company}</button>`;
  }).join(' ');
};
displaybtns();


// filter butttons based on company 

btns.addEventListener('click', (e)=>{
const el = e.target;
if(el.classList.contains('company-btn')){
    if(el.dataset.id === 'all'){
        filteredproducts = [...products]
    }
    else{
        filteredproducts = products.filter((product)=>{
            return product.company === el.dataset.id
        })
    }
    searchInput.value = ''
    displayProducts()
}
})
