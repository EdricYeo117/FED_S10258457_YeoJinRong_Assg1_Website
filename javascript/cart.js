window.onload = function () {
  /* Cart Javascript */
  let cartIcon = document.querySelector("#cart-icon");
  let cart = document.querySelector(".cart");
  let closeCart = document.querySelector("#close-cart");

  // Open Cart
  cartIcon.onclick = () => {
    cart.classList.add("active");
  };

  // Close Cart
  closeCart.onclick = () => {
    cart.classList.remove("active");
  };

  // Cart Working JS
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready();
  }

  function ready() {
    // Adding to Cart - Loading Methods
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i]
      button.addEventListener('click', addCartClicked);
    }
    //Remove Items from Cart - Loading Methods
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i]
      button.addEventListener("click", removeCartItem)
    }
    // Quantity Changes in Cart - Loading Methods
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged);
    }
  }

  // Add to Cart Method
  function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
  }

  // Add Product to Cart Method
  function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already added to the cart");
        return;
      }
    }

    // Cart Box Content, Making the indivdual product card in the cart
    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- Remove Cart -->
    <i class='bx bxs-trash-alt cart-remove'></i>`;
    // Add Items to Cart
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    // Remove Items from Cart
    cartShopBox.getElementsByClassName('cart-remove')[0]
      .addEventListener('click', removeCartItem);
    // Quantity Change In Cart
    cartShopBox.getElementsByClassName('cart-quantity')[0]
      .addEventListener('change', quantityChanged);
  }

  // Remove Items From Cart Method
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
  }

  // Quantity Change Method
  function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatetotal();
  }

  // Update Total Function
  function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i]
      var priceElement = cartBox.getElementsByClassName('cart-price')[0]
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value;
      total = total + (price * quantity);
    }
    // If price contains decimal
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
  }
}