document.addEventListener("DOMContentLoaded", function () {

    const langToggle = document.getElementById("lang-toggle");
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");
    const container = document.getElementById("product-container");

    let cart = [];
    let currentLanguage = "en";

    const products = [
        { name_en: "Ghati Masala", name_mr: "घाटी मसाला", price: 120, weight: "500g" },
        { name_en: "Malvani Masala", name_mr: "मालवणी मसाला", price: 150, weight: "500g" },
        { name_en: "Garam Masala", name_mr: "गरम मसाला", price: 180, weight: "500g" }
    ];

    function renderProducts() {

        container.innerHTML = "";

        products.forEach(function(product) {

            const card = document.createElement("div");
            card.classList.add("product-card");

            const name = currentLanguage === "en" ? product.name_en : product.name_mr;

            card.innerHTML =
                "<h3>" + name + "</h3>" +
                "<p>Weight: " + product.weight + "</p>" +
                "<p>Price: ₹" + product.price + "</p>" +
                "<button class='buy-btn'>Add to Cart</button>";

            const button = card.querySelector(".buy-btn");

            button.addEventListener("click", function() {

                cart.push(product);

                localStorage.setItem("cart", JSON.stringify(cart));

                console.log("Cart:", cart);

                alert(name + " added to cart!");

            });

            container.appendChild(card);

        });

    }

    // First render
    renderProducts();

    langToggle.addEventListener("click", function () {

        if (currentLanguage === "en") {

            heroTitle.textContent = "पारंपरिक हाताने बनवलेला मसाला – अस्सल चव";
            heroDesc.textContent = "चार गृहिणींनी सुरू केलेला घरगुती मसाला. कोणतेही प्रिझर्व्हेटिव्ह नाही.";

            langToggle.textContent = "मराठी";

            currentLanguage = "mr";

        } else {

            heroTitle.textContent = "Traditional Handmade Recipe – Rich Authentic Taste";
            heroDesc.textContent = "Started by four housewives. No preservatives. Pure Maharashtrian flavor.";

            langToggle.textContent = "EN";

            currentLanguage = "en";

        }

        renderProducts();

    });

});