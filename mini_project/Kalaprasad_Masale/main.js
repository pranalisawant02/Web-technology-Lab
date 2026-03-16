document.addEventListener("DOMContentLoaded", function () {

const langToggle = document.getElementById("lang-toggle");
const heroTitle  = document.getElementById("hero-title");
const heroDesc   = document.getElementById("hero-desc");
const container  = document.getElementById("product-container");
const cartCount  = document.getElementById("cart-count");
const modal      = document.getElementById("image-modal");
const modalImg   = document.getElementById("modal-img");
const orderBtn   = document.getElementById("order-btn");
const popup      = document.getElementById("checkout-popup");
const closePopup = document.getElementById("close-popup");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentLanguage = "en";

/* ================= PRODUCTS ================= */

const products = [
  {
    name_en: "Ghati Masala",
    name_mr: "घाटी मसाला",
    price: 767,
    weight: "500g",
    image: "images/ghati_masala.png"
  },
  {
    name_en: "Malvani Masala",
    name_mr: "मालवणी मसाला",
    price: 150,
    weight: "500g",
    image: "images/malvani_masala.png"
  },
  {
    name_en: "Garam Masala",
    name_mr: "गरम मसाला",
    price: 180,
    weight: "500g",
    image: "images/garam_masala.png"
  }
];

updateCartCount();

/* ================= RENDER PRODUCTS ================= */

function renderProducts() {

  container.innerHTML = "";

  products.forEach(function (product) {

    const card = document.createElement("div");
    card.classList.add("product-card");

    const name = currentLanguage === "en" ? product.name_en : product.name_mr;

    const btnLabel = currentLanguage === "en" ? "Add to Cart" : "कार्टमध्ये टाका";

    card.innerHTML = `
      <img src="${product.image}" alt="${name}">
      <h3>${name}</h3>
      <p class="weight">${product.weight}</p>
      <p class="price">₹${product.price}</p>
      <button class="buy-btn">${btnLabel}</button>
    `;

    const button = card.querySelector(".buy-btn");
    const img    = card.querySelector("img");

    /* ADD TO CART */
    button.addEventListener("click", function () {

      let existing = cart.find(item => item.name_en === product.name_en);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      const msg = currentLanguage === "en"
        ? name + " added to cart!"
        : name + " कार्टमध्ये टाकला!";
      alert(msg);

    });

    /* IMAGE ZOOM */
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = product.image;
    });

    container.appendChild(card);

  });

}

/* ================= MODAL CLOSE ================= */

modal.addEventListener("click", function () {
  modal.style.display = "none";
});

/* ================= CART COUNT ================= */

function updateCartCount() {
  let count = 0;
  cart.forEach(function (item) {
    count += item.quantity;
  });
  cartCount.textContent = count;
}

renderProducts();

/* ================= POPUP (close on OK) ================= */

if (closePopup) {
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

/* Close popup when clicking outside the box */
if (popup) {
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}

/* ================= LANGUAGE TOGGLE ================= */

langToggle.addEventListener("click", function () {

  /* ABOUT ELEMENTS */
  const aboutTitle = document.getElementById("about-title");
  const aboutP1    = document.getElementById("about-p1");
  const aboutP2    = document.getElementById("about-p2");
  const aboutP3    = document.getElementById("about-p3");

  /* WHY CHOOSE ELEMENTS */
  const whyTitle = document.getElementById("why-title");
  const w1t = document.getElementById("why1-title");
  const w1d = document.getElementById("why1-desc");
  const w2t = document.getElementById("why2-title");
  const w2d = document.getElementById("why2-desc");
  const w3t = document.getElementById("why3-title");
  const w3d = document.getElementById("why3-desc");
  const w4t = document.getElementById("why4-title");
  const w4d = document.getElementById("why4-desc");

  /* ===== EN → MR ===== */
  if (currentLanguage === "en") {

    heroTitle.textContent = "पारंपरिक हाताने बनवलेला मसाला – अस्सल चव";
    heroDesc.textContent  = "चार गृहिणींनी सुरू केलेला घरगुती मसाला.";

    if (aboutTitle) {
      aboutTitle.textContent = "🌸 आमची कथा";
      aboutP1.textContent = "कलाप्रसाद घाटी मसाला सांगली जिल्ह्यातील कलाप्रसाद महिला बचत गटातील महिलांकडून प्रेमाने तयार केला जातो. प्रत्येक पॅकमध्ये घरची उब, पारंपरिक ज्ञान आणि कुटुंबाला आधार देण्याची ग्रामीण महिलांची जिद्द आहे.";
      aboutP2.textContent = "उत्तम दर्जाचे मसाले निवडण्यापासून ते दळणे आणि पॅकिंगपर्यंत प्रत्येक प्रक्रिया स्वच्छता, काळजी आणि अभिमानाने हाताने केली जाते. हा कारखान्यात तयार केलेला मसाला नाही — तर पिढ्यानपिढ्या चालत आलेली घरगुती चव आहे.";
      aboutP3.textContent = "हा मसाला निवडताना तुम्ही फक्त उत्पादन खरेदी करत नाही, तर महिलांच्या उपजीविकेला पाठिंबा देता, महाराष्ट्राच्या खाद्यपरंपरेचे जतन करता आणि आपल्या स्वयंपाकघरात अस्सल चव आणता.";
    }

    if (whyTitle) {
      whyTitle.textContent = "🌶️ कलाप्रसाद मसाले का निवडावे?";
      w1t.textContent = "महिलांकडून हाताने तयार";
      w1d.textContent = "ग्रामीण महिलांच्या बचत गटाद्वारे प्रेमाने तयार केलेले.";
      w2t.textContent = "प्रिझर्वेटिव्ह नाही";
      w2d.textContent = "100% नैसर्गिक आणि रसायनमुक्त.";
      w3t.textContent = "पारंपरिक चव";
      w3d.textContent = "पिढ्यानपिढ्या चालत आलेली रेसिपी.";
      w4t.textContent = "घरगुती गुणवत्ता";
      w4d.textContent = "स्वच्छ व सुरक्षित पद्धतीने तयार.";
    }

    langToggle.textContent = "EN";
    currentLanguage = "mr";

  /* ===== MR → EN ===== */
  } else {

    heroTitle.textContent = "Traditional Handmade Recipe – Rich Authentic Taste";
    heroDesc.textContent  = "Started by four housewives, our spices are homemade using traditional methods with no preservatives.";

    if (aboutTitle) {
      aboutTitle.textContent = "🌸 Our Story";
      aboutP1.textContent = "Kalaprasad Ghati Masala is lovingly prepared by the women of Kalaprasad Mahila Self-Help Group in Sangli district. Each pack carries the warmth of home, traditional knowledge, and the determination of rural women working together to support their families.";
      aboutP2.textContent = "From selecting quality ingredients to careful grinding and packing, every step is done by hand with attention, cleanliness and pride. This is not factory-made spice — it is homemade taste passed down through generations.";
      aboutP3.textContent = "When you choose our masala, you are not just buying a product. You are supporting women's livelihoods, preserving Maharashtrian food traditions, and bringing authentic regional flavour into your kitchen.";
    }

    if (whyTitle) {
      whyTitle.textContent = "🌶️ Why Choose Kalaprasad Masale?";
      w1t.textContent = "Handmade by Women";
      w1d.textContent = "Prepared by rural women self-help group with care and dedication.";
      w2t.textContent = "No Preservatives";
      w2d.textContent = "100% natural spices with no chemicals or artificial colors.";
      w3t.textContent = "Traditional Taste";
      w3d.textContent = "Authentic Maharashtrian recipes passed down generations.";
      w4t.textContent = "Homemade Quality";
      w4d.textContent = "Clean, hygienic preparation just like your own kitchen.";
    }

    langToggle.textContent = "मराठी";
    currentLanguage = "en";

  }

  renderProducts();

});

/* ================= WHATSAPP ORDER (from order-btn) ================= */

if (orderBtn) {
  orderBtn.addEventListener("click", function (e) {

    e.preventDefault();

    if (cart.length === 0) {
      alert(currentLanguage === "en"
        ? "Cart is empty! Please add products first."
        : "कार्ट रिकामी आहे! आधी उत्पादने टाका.");
      return;
    }

    let total = 0;

    /* Always send Marathi message since most users are Marathi */
    let message = "🛒 *कलाप्रसाद मसाला ऑर्डर*\n\nनमस्कार! मला खालील मसाले हवे आहेत:\n\n";

    cart.forEach(function (item) {
      let price = item.price * item.quantity;
      message += "🌶️ " + item.name_mr +
        " (" + item.weight + ")\n" +
        "   प्रमाण: " + item.quantity +
        " | ₹" + price + "\n\n";
      total += price;
    });

    message += "*एकूण रक्कम: ₹" + total + "*\n\nकृपया ऑर्डर कन्फर्म करा. धन्यवाद! 🙏";

    const phone = "917066395554";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    if (popup) popup.style.display = "flex";
    window.open(url, "_blank");

  });
}

});