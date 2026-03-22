document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("lang-toggle");
  const container = document.getElementById("product-container");
  const cartCount = document.getElementById("cart-count");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const liveMessage = document.getElementById("cart-feedback");

  let currentLanguage = window.CartUtils.getLanguage();

  function showFeedback(message) {
    if (!liveMessage) return;
    liveMessage.textContent = message;
    liveMessage.hidden = false;
    window.clearTimeout(showFeedback.timeoutId);
    showFeedback.timeoutId = window.setTimeout(function () {
      liveMessage.hidden = true;
      liveMessage.textContent = "";
    }, 2200);
  }

  function updateCartCount() {
    const cart = window.CartUtils.getStoredCart();
    if (cartCount) {
      cartCount.textContent = window.CartUtils.getCartCount(cart);
    }
    const copy = window.CartUtils.getCopy(currentLanguage);
    const navCart = document.getElementById("nav-cart");
    if (navCart) {
      navCart.innerHTML = copy.navCart + ' (<span id="cart-count">' + cartCount.textContent + '</span>)';
    }
  }

  function updateStaticCopy() {
    const copy = window.CartUtils.getCopy(currentLanguage);
    
    // Navbar
    const navHome = document.getElementById("nav-home");
    const navCart = document.getElementById("nav-cart");
    if (navHome) navHome.textContent = copy.navHome;
    if (navCart) navCart.innerHTML = copy.navCart + ' (<span id="cart-count">' + cartCount.textContent + '</span>)';
    
    // Hero
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");
    const shopNowBtn = document.getElementById("shop-now-btn");
    const orderWpBtn = document.getElementById("order-wp-btn");
    if (heroTitle) heroTitle.textContent = copy.heroTitle;
    if (heroDesc) heroDesc.textContent = copy.heroDesc;
    if (shopNowBtn) shopNowBtn.textContent = copy.shopNow;
    if (orderWpBtn) orderWpBtn.textContent = copy.orderWhatsApp;
    
    // Trust Strip
    const trust1 = document.getElementById("trust-1");
    const trust2 = document.getElementById("trust-2");
    const trust3 = document.getElementById("trust-3");
    const trust4 = document.getElementById("trust-4");
    if (trust1) trust1.textContent = copy.trust1;
    if (trust2) trust2.textContent = copy.trust2;
    if (trust3) trust3.textContent = copy.trust3;
    if (trust4) trust4.textContent = copy.trust4;
    
    // Bestseller
    const bestsellerTitle = document.getElementById("bestseller-title");
    const bestsellerName = document.getElementById("bestseller-name");
    const bestsellerDesc = document.getElementById("bestseller-desc");
    const bestsellerBtn = document.getElementById("bestseller-btn");
    if (bestsellerTitle) bestsellerTitle.textContent = copy.bestsellerTitle;
    if (bestsellerName) bestsellerName.textContent = copy.bestsellerName;
    if (bestsellerDesc) bestsellerDesc.textContent = copy.bestsellerDesc;
    if (bestsellerBtn) bestsellerBtn.textContent = copy.buyNow;
    
    // Products Title
    const productsTitle = document.getElementById("products-title");
    if (productsTitle) productsTitle.textContent = copy.productsTitle;
    
    // Why Choose
    const whyTitle = document.getElementById("why-title");
    const why1Title = document.getElementById("why1-title");
    const why1Desc = document.getElementById("why1-desc");
    const why2Title = document.getElementById("why2-title");
    const why2Desc = document.getElementById("why2-desc");
    const why3Title = document.getElementById("why3-title");
    const why3Desc = document.getElementById("why3-desc");
    const why4Title = document.getElementById("why4-title");
    const why4Desc = document.getElementById("why4-desc");
    
    if (whyTitle) whyTitle.textContent = copy.whyTitle;
    if (why1Title) why1Title.textContent = copy.why1Title;
    if (why1Desc) why1Desc.textContent = copy.why1Desc;
    if (why2Title) why2Title.textContent = copy.why2Title;
    if (why2Desc) why2Desc.textContent = copy.why2Desc;
    if (why3Title) why3Title.textContent = copy.why3Title;
    if (why3Desc) why3Desc.textContent = copy.why3Desc;
    if (why4Title) why4Title.textContent = copy.why4Title;
    if (why4Desc) why4Desc.textContent = copy.why4Desc;
    
    // About
    const aboutTitle = document.getElementById("about-title");
    const aboutP1 = document.getElementById("about-p1");
    const aboutP2 = document.getElementById("about-p2");
    const aboutP3 = document.getElementById("about-p3");
    if (aboutTitle) aboutTitle.textContent = copy.aboutTitle;
    if (aboutP1) aboutP1.textContent = copy.aboutP1;
    if (aboutP2) aboutP2.textContent = copy.aboutP2;
    if (aboutP3) aboutP3.textContent = copy.aboutP3;
    
    // Footer
    const footerBrand = document.getElementById("footer-brand");
    const footerHandmade = document.getElementById("footer-handmade");
    const footerLocation = document.getElementById("footer-location");
    const footerTagline = document.getElementById("footer-tagline");
    const footerCopyright = document.getElementById("footer-copyright");
    const cartCtaLabel = document.getElementById("cart-cta-label");
    
    if (footerBrand) footerBrand.textContent = copy.footerBrand;
    if (footerHandmade) footerHandmade.textContent = copy.footerHandmade;
    if (footerLocation) footerLocation.textContent = copy.footerLocation;
    if (footerTagline) footerTagline.textContent = copy.footerTagline;
    if (footerCopyright) footerCopyright.textContent = copy.footerCopyright;
    if (cartCtaLabel) cartCtaLabel.textContent = copy.orderWhatsApp;
    
    document.documentElement.lang = currentLanguage === "mr" ? "mr" : "en";
    if (langToggle) {
      langToggle.textContent = copy.languageButton;
    }
  }

  function renderProducts() {
    if (!container) return;

    const copy = window.CartUtils.getCopy(currentLanguage);

    container.innerHTML = window.PRODUCTS.map(function (product) {
      const productName = window.CartUtils.escapeHtml(product.name[currentLanguage]);
      const productDescription = window.CartUtils.escapeHtml(product.description[currentLanguage]);
      const ratingData = window.CartUtils.getProductRating(product.id);
      
      // Generate star HTML - WHOLE STARS ONLY (rounded)
      const roundedStars = ratingData.rounded !== undefined ? ratingData.rounded : Math.round(ratingData.average);
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= roundedStars) {
          starsHtml += '<span class="star filled">★</span>';
        } else {
          starsHtml += '<span class="star">☆</span>';
        }
      }
      
      const ratingText = ratingData.count > 0 
        ? roundedStars + ' (' + ratingData.count + ')'
        : 'No ratings yet';
      
      return [
        '<article class="product-card" data-product-id="' + product.id + '">',
        '  <button class="product-image-button" type="button" data-image="' + product.image + '" data-name="' + productName + '">',
        '    <img src="' + product.image + '" alt="' + productName + '">',
        '  </button>',
        '  <div class="product-copy">',
        '    <h3>' + productName + '</h3>',
        '    <p class="product-description">' + productDescription + '</p>',
        '    <p class="weight">' + window.CartUtils.escapeHtml(product.weight) + '</p>',
        '    <p class="price">' + window.CartUtils.formatCurrency(product.price) + '</p>',
        '    <div class="rating-section">',
        '      <div class="stars" data-product-id="' + product.id + '">' + starsHtml + '</div>',
        '      <span class="rating-count">' + ratingText + '</span>',
        '    </div>',
        '    <button class="buy-btn" type="button" data-product-id="' + product.id + '">' + copy.addToCart + '</button>',
        '  </div>',
        '</article>'
      ].join("\n");
    }).join("");
    
    // Attach rating click handlers
    document.querySelectorAll('.stars').forEach(function(starsContainer) {
      const productId = starsContainer.dataset.productId;
      const stars = starsContainer.querySelectorAll('.star');
      
      stars.forEach(function(star, index) {
        star.style.cursor = 'pointer';
        star.addEventListener('click', function(e) {
          e.stopPropagation();
          const ratingValue = index + 1;
          window.CartUtils.addRating(productId, ratingValue);
          const copy = window.CartUtils.getCopy(currentLanguage);
          showFeedback('Thank you! Rated ' + ratingValue + ' stars');
          renderProducts();
        });
      });
    });
  }

  if (container) {
    container.addEventListener("click", function (event) {
      const addButton = event.target.closest(".buy-btn");
      if (addButton) {
        const product = window.CartUtils.findProduct(addButton.dataset.productId);
        if (!product) return;

        window.CartUtils.addToCart(product.id);
        updateCartCount();

        const copy = window.CartUtils.getCopy(currentLanguage);
        showFeedback(
          window.CartUtils.interpolate(copy.addedToCart, {
            name: product.name[currentLanguage]
          })
        );
        return;
      }

      const imageButton = event.target.closest(".product-image-button");
      if (imageButton && modal && modalImg) {
        modalImg.src = imageButton.dataset.image;
        modalImg.alt = imageButton.dataset.name;
        modal.hidden = false;
      }
    });
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.hidden = true;
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLanguage = currentLanguage === "en" ? "mr" : "en";
      window.CartUtils.setLanguage(currentLanguage);
      updateStaticCopy();
      renderProducts();
    });
  }

  updateStaticCopy();
  updateCartCount();
  renderProducts();
});