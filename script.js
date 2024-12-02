// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render product list
function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.onclick = () => addToCart(product);
    li.appendChild(button);
    productList.appendChild(li);
  });
}

// Function to render shopping cart
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear the current list
  const cart = getCartFromSession();

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to add an item to the cart
function addToCart(product) {
  const cart = getCartFromSession();
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to clear the cart
function clearCart() {
  sessionStorage.removeItem("cart");
  renderCart();
}

// Function to get cart data from session storage
function getCartFromSession() {
  const cart = sessionStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Event listener for the clear cart button
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

// Initial setup: Render products and cart
renderProducts();
renderCart();
