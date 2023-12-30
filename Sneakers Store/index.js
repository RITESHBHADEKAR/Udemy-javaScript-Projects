const toggle = document.querySelector('.toggle-nav');
const sidebarOverlay = document.querySelector('.sidebar-overlay ');
const closebtn = document.querySelector('.sidebar-close');
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const CartItems = document.querySelector('.cart-items');

// nav toggle
toggle.addEventListener('click', (e) => {
  sidebarOverlay.classList.add('show');
});
closebtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});

// add values in quantity
const QuantityBtns = [...document.querySelectorAll('.quantity-btn button')];
const QuantityValue = document.querySelector('.quantity-value');
let value = 0;

QuantityBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('minus-btn')) {
      value--;
    } else if (e.currentTarget.classList.contains('plus-btn')) {
      value++;
    } else {
      value = 0;
    }
    QuantityValue.textContent = value;
  });
});

// cart toggle
const cartbtn = document.querySelector('.toggle-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartClose = document.querySelector('.cart-close');

cartbtn.addEventListener('mouseover', () => {
  cartOverlay.classList.add('show-cart');
  if (value <= 0) {
    CartItems.innerHTML = `<h6 class="cart-title " style="text-align: center;font-weight: 100;">Your cart is empty. </h6>`;
  }
});

hero.addEventListener('mouseover', (e) => {
  cartOverlay.classList.remove('show-cart');
  if (e.target.classList.contains('cart')) {
    cartOverlay.classList.add('show-cart');
  }
});
navbar.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('navbar')) {
    cartOverlay.classList.remove('show-cart');
  }
});

// add items to cart toggle
const CartItemsCount = document.querySelector('.cart-item-count');
const AddToCart = document.querySelector('.AddToCart');
const addCart = () => {
  AddToCart.addEventListener('click', () => {
    // let num = QuantityValue.textContent
    CartItems.innerHTML = `
    <div class = "all">
  <div class="cart-img">
  <img
  src="./images/image-product-1-thumbnail.jpg"
  alt=""
  class="img"
  />
  </div>
  <div class="cart-info">
  <p class="company">Fall limited Edition Sneakers</p>
  <p class="item-price"<span>$125.00 x ${value} </span> <h4>$${
      value * 125.0
    }</h4> </p>
  </div>
  <button class="delete-btn">
          <img src="./images/icon-delete.svg" class="img" />
  </button></div>
  `;
    if (value <= 0) {
      CartItems.innerHTML = `<h6 class="cart-title " style="text-align: center;font-weight: 100;">Your cart is empty. </h6>`;
    }
    CartItemsCount.textContent = value;
    cartOverlay.classList.add('show-cart');

    // delete items in the cart
    const deleteBtn = document.querySelector('.delete-btn ');
    deleteBtn.addEventListener('click', (e) => {
      const element = (e.currentTarget.parentElement.style.display = 'none');

      if (element) {
        CartItems.innerHTML = `<h4 class="cart-title " style="text-align: center;font-weight: 200;">Your cart is empty. </h4>`;
      }

      CartItemsCount.textContent = 0;
      QuantityValue.textContent = 0;
      value = 0;
      cartOverlay.classList.remove('show-cart');
    });
  });
};
addCart();

// check out button
const CheckOut = document.querySelector('.check-out');
CheckOut.addEventListener('click', () => {
  cartOverlay.classList.remove('show-cart');
});

// img-container
const imgs = [...document.querySelectorAll('.img-container img')];
const productoverflow = document.querySelector('.product-overflow');
const singleproductClose = document.querySelector('.single-product-close');
const singleImg = document.querySelector('.product-img');

// single img click event
singleImg.addEventListener('click', () => {
  productoverflow.classList.add('show-single-products');
});

// img-container click
imgs.forEach((image) => {
  image.addEventListener('click', () => {
    productoverflow.classList.add('show-single-products');
  });
});

//  close item with single product close
singleproductClose.addEventListener('click', () => {
  productoverflow.classList.remove('show-single-products');
});

// single img events
const imgContainer = [
  ...document.querySelectorAll('.single-img-container img'),
];
const ProductImg = document.querySelector('.single-product-img');

imgContainer.map((img) => {
  img.addEventListener('click', (i) => {
    let id = i.currentTarget.dataset.id;
    if (id) {
      let url = `./images/image-product-${id}.jpg`;
      i.currentTarget.classList.add('active');
      ProductImg.src = url;
    }
  });
});
