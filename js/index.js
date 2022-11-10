// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const priceValue = price.innerHTML;
  const subt = priceValue * quantity
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML=subt;
  console.log(subt);
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}



function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  for (let i=0; i < allProducts.length; i ++) {
    updateSubtotal(allProducts[i]);
  }
  
  const total = document.querySelectorAll('.subtotal span');
  console.log(total);
  // ITERATION 3
  //subtotal=subt.innerHTML
  /*for (let i=0; i < allProducts.length; i ++) {
  total += subtotal;
  console.log(subt);
}*/
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
