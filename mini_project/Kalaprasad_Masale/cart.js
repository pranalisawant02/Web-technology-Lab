document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("cart-container");
    const totalPrice = document.getElementById("total-price");
    const orderBtn = document.getElementById("order-whatsapp");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(function(product){

        const item = document.createElement("div");

        item.innerHTML =
            "<h3>" + product.name_en + "</h3>" +
            "<p>Price: ₹" + product.price + "</p>";

        container.appendChild(item);

        total += product.price;

    });

    totalPrice.textContent = "Total: ₹" + total;


    // WhatsApp Order Logic
    orderBtn.addEventListener("click", function () {

        let message = "Hello, I want to order:\n\n";

        cart.forEach(function(product) {
            message += product.name_en + " - ₹" + product.price + "\n";
        });

        message += "\nTotal: ₹" + total;

        const phone = "917066395554";   // replace with your WhatsApp number

        const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

        window.open(url, "_blank");

    });

});