// const url ='https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';
const url = 'https://course-api.com/javascript-store-single-product';
const Product = document.querySelector('.product');

const fetchProducts = async () => {
  Product.innerHTML = `<div class="loading"></div>
`;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  try {
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    Product.innerHTML = `<p class="error">There was an problem loading the product. Please try again later</p>
`;
  }
};

const displayproducts = (item) => {
  console.log(item);
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = item.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();
// colors 
const colorlist = colors.map((color)=>{
    return `<span class="product-color" style="background-color: ${color};"></span>`;
}).join(' ')


  Product.innerHTML = `<div class="product-wrapper">
       <img src="${img}"  class="img  ">
        <div class="product info">
            <h3>${title}</h3>
            <h5>${company}</h5>
            <span>$${price / 100}</span>
            <div class="colors">
                ${colorlist}
            </div>
            <p>${description}</p>
            <button class="btn">add to cart</button>
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayproducts(data);
};

start();
