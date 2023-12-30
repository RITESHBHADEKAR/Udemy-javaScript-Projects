const url = 'https://course-api.com/javascript-store-products';
const ProductCenter = document.querySelector('.products-center');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');

const fetchProducts = async () => {
  ProductCenter.innerHTML = `<div class="loading"></div>
`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    // return data;
    displayproducts(data);
  } catch (error) {
    ProductCenter.innerHTML = `<p class="error">There was an error</p>
`;
  }
};

const displayproducts = (list) => {
//   console.log(list);

  const result = list
    .map((item) => {
      const { id } = item;
      const { price } = item.fields;
      // const { url: img } = item.fields.image[0];
      const formatprice = price / 100;
      return `
          <a href="product.html?id=${id}&name=${item.fields.name}&price=${formatprice}" class="single-product">
            <img src="${item.fields.image[0].url}" alt="" class="single-product-img img">
          </a>
          <footer>
            <h5 class="name">${item.fields.name}</h5>
            <span class="price">$${formatprice}</span>
          </footer>
        `;
    })
    .join('');
  ProductCenter.innerHTML = `<div class="products-container">
${result}
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayproducts(data);
};

// fetchProducts();
// displayproducts();
start();
