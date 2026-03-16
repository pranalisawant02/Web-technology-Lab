document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("cart-container");
  const totalPrice = document.getElementById("total-price");
  const orderBtn  = document.getElementById("order-whatsapp");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding:40px; color:#888;'>Your cart is empty. <a href='index.html'>Shop Now</a></p>";
    totalPrice.textContent = "";
    return;
  }

  cart.forEach(function (product, index) {

    const item = document.createElement("div");

    item.innerHTML = `
      <h3>${product.name_en}</h3>
      <p style="color:#555; font-size:14px;">${product.weight}</p>
      <p>Price: ₹${product.price}</p>

      <div style="margin:10px 0;">
        <button class="minus">−</button>
        <span style="margin:0 12px; font-weight:bold; font-size:16px;">${product.quantity}</span>
        <button class="plus">+</button>
      </div>

      <p style="font-weight:bold; color:#8B0000;">Subtotal: ₹${product.price * product.quantity}</p>

      <button class="remove-btn">Remove</button>
    `;

    container.appendChild(item);

    const plusBtn   = item.querySelector(".plus");
    const minusBtn  = item.querySelector(".minus");
    const removeBtn = item.querySelector(".remove-btn");

    plusBtn.addEventListener("click", function () {
      product.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });

    minusBtn.addEventListener("click", function () {
      if (product.quantity > 1) {
        product.quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      }
    });

    removeBtn.addEventListener("click", function () {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });

    total += product.price * product.quantity;

  });

  totalPrice.textContent = "Total: ₹" + total;

  /* ===== WHATSAPP ORDER ===== */
  orderBtn.addEventListener("click", function () {

    let message = "🛒 *कलाप्रसाद मसाला ऑर्डर*\n\nनमस्कार! मला खालील मसाले हवे आहेत:\n\n";

    cart.forEach(function (product) {
      const marName = product.name_mr || product.name_en;
      message += `🌶️ ${marName} (${product.weight})\n`;
      message += `   प्रमाण: ${product.quantity} | ₹${product.price * product.quantity}\n\n`;
    });

    message += `*एकूण रक्कम: ₹${total}*\n\nकृपया ऑर्डर कन्फर्म करा. धन्यवाद! 🙏`;

    const phone = "917066395554";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

  });

});