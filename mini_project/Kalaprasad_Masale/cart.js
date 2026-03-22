document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cart-container");
  const totalPrice = document.getElementById("total-price");
  const orderButton = document.getElementById("order-whatsapp");
  const cartTitle = document.getElementById("cart-title");

  const currentLanguage = window.CartUtils.getLanguage();
  const copy = window.CartUtils.getCopy(currentLanguage);

  document.documentElement.lang = currentLanguage === "mr" ? "mr" : "en";
  if (cartTitle) {
    cartTitle.textContent = copy.cartTitle;
  }
  if (orderButton) {
    orderButton.textContent = copy.orderWhatsApp;
  }

  function renderCart() {
    const cartDetails = window.CartUtils.getCartDetails();

    if (cartDetails.length === 0) {
      container.innerHTML = [
        '<div class="empty-cart">',
        '  <p>' + copy.emptyCart + '</p>',
        '  <a href="index.html">' + copy.shopNow + '</a>',
        '</div>'
      ].join("\n");
      totalPrice.textContent = "";
      orderButton.disabled = true;
      return;
    }

    container.innerHTML = cartDetails.map(function (item) {
      const productName = window.CartUtils.escapeHtml(item.name[currentLanguage]);
      return [
        '<article class="cart-item" data-product-id="' + item.id + '">',
        '  <img class="cart-item-image" src="' + item.image + '" alt="' + productName + '">',
        '  <div class="cart-item-content">',
        '    <h3>' + productName + '</h3>',
        '    <p class="weight">' + window.CartUtils.escapeHtml(item.weight) + '</p>',
        '    <p class="cart-price">' + copy.priceLabel + ': ' + window.CartUtils.formatCurrency(item.price) + '</p>',
        '    <div class="cart-quantity-controls" aria-label="' + copy.quantity + '">',
        '      <button class="quantity-btn" type="button" data-action="decrease">-</button>',
        '      <span class="quantity-value">' + item.quantity + '</span>',
        '      <button class="quantity-btn" type="button" data-action="increase">+</button>',
        '    </div>',
        '    <p class="cart-subtotal">' + copy.subtotalLabel + ': ' + window.CartUtils.formatCurrency(item.subtotal) + '</p>',
        '    <button class="remove-btn" type="button" data-action="remove">' + copy.remove + '</button>',
        '  </div>',
        '</article>'
      ].join("\n");
    }).join("");

    totalPrice.textContent = copy.totalLabel + ': ' + window.CartUtils.formatCurrency(window.CartUtils.getCartTotal(cartDetails));
    orderButton.disabled = false;
  }

  container.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }

    const cartItem = button.closest(".cart-item");
    if (!cartItem) {
      return;
    }

    const productId = cartItem.dataset.productId;
    const cartEntry = window.CartUtils.getStoredCart().find(function (item) {
      return item.id === productId;
    });

    if (!cartEntry) {
      renderCart();
      return;
    }

    if (button.dataset.action === "increase") {
      window.CartUtils.updateCartItem(productId, cartEntry.quantity + 1);
    }

    if (button.dataset.action === "decrease") {
      window.CartUtils.updateCartItem(productId, cartEntry.quantity - 1);
    }

    if (button.dataset.action === "remove") {
      window.CartUtils.removeCartItem(productId);
    }

    renderCart();
  });

  if (orderButton) {
    orderButton.addEventListener("click", function () {
      const cartDetails = window.CartUtils.getCartDetails();
      if (cartDetails.length === 0) {
        alert(copy.cartEmpty);
        return;
      }

      const message = window.CartUtils.buildWhatsAppMessage(cartDetails, currentLanguage);
      const url = window.CartUtils.buildWhatsAppUrl(message);
      window.open(url, "_blank", "noopener");
    });
  }

  renderCart();
});
