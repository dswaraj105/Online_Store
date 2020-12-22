const buyNowBtns = document.querySelectorAll('.buy-now');
const addToCartBtns = document.querySelectorAll('.add-to-cart');


// helper functions
function buyProductHandler(event) {
  event.preventDefault();
  const prodId = event.target.getAttribute('data-id');
  console.log('buy now', prodId);
}

function addToCartHandler(event) {
  event.preventDefault();
  const prodId = event.target.getAttribute('data-id');
  console.log('add to cart  ', prodId);
}

//Event listeners
buyNowBtns.forEach(buyBtn => {
  buyBtn.addEventListener('click', buyProductHandler);
});

addToCartBtns.forEach(cartBtn => {
  cartBtn.addEventListener('click', addToCartHandler);
});