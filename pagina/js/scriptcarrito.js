document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let total = 0;

  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const price = parseFloat(button.getAttribute("data-price"));
      total += price;
      cartTotal.textContent = total.toFixed(2);

      const itemName = button.previousElementSibling.textContent;
      const listItem = document.createElement("li");
      listItem.textContent = `${itemName} - $${price.toFixed(2)}`;
      cartItemsList.appendChild(listItem);
    });
  });

  const checkoutButton = document.getElementById("checkout-btn");
  checkoutButton.addEventListener("click", function() {
    alert(`Compra realizada por un total de $${total.toFixed(2)}`);
    total = 0;
    cartTotal.textContent = total.toFixed(2);
    cartItemsList.innerHTML = "";
  });
});