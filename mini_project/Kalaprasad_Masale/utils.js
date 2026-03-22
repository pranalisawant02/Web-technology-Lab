window.CartUtils = (function () {
  function getStoredCart() {
    try {
      const rawCart = localStorage.getItem(window.APP_CONFIG.cartStorageKey);
      const parsedCart = rawCart ? JSON.parse(rawCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.warn("Unable to read cart from localStorage.", error);
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(window.APP_CONFIG.cartStorageKey, JSON.stringify(cart));
  }

  function getLanguage() {
    const savedLanguage = localStorage.getItem(window.APP_CONFIG.languageStorageKey);
    return savedLanguage === "mr" ? "mr" : "en";
  }

  function setLanguage(language) {
    localStorage.setItem(window.APP_CONFIG.languageStorageKey, language);
  }

  function getCopy(language) {
    return window.COPY[language] || window.COPY.en;
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  }

  function getCartCount(cart) {
    return cart.reduce(function (count, item) {
      return count + item.quantity;
    }, 0);
  }

  function findProduct(productId) {
    return window.PRODUCTS.find(function (product) {
      return product.id === productId;
    });
  }

  function addToCart(productId) {
    const cart = getStoredCart();
    const existingItem = cart.find(function (item) {
      return item.id === productId;
    });

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const product = findProduct(productId);
      if (!product) {
        return cart;
      }

      cart.push({
        id: product.id,
        quantity: 1
      });
    }

    saveCart(cart);
    return cart;
  }

  function updateCartItem(productId, nextQuantity) {
    const cart = getStoredCart()
      .map(function (item) {
        if (item.id !== productId) {
          return item;
        }

        return {
          id: item.id,
          quantity: nextQuantity
        };
      })
      .filter(function (item) {
        return item.quantity > 0;
      });

    saveCart(cart);
    return cart;
  }

  function removeCartItem(productId) {
    const cart = getStoredCart().filter(function (item) {
      return item.id !== productId;
    });

    saveCart(cart);
    return cart;
  }

  function getCartDetails() {
    return getStoredCart()
      .map(function (item) {
        const product = findProduct(item.id);
        if (!product) {
          return null;
        }

        const subtotal = product.price * item.quantity;
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          quantity: item.quantity,
          weight: product.weight,
          subtotal: subtotal
        };
      })
      .filter(Boolean);
  }

  function getCartTotal(cartDetails) {
    return cartDetails.reduce(function (total, item) {
      return total + item.subtotal;
    }, 0);
  }

  function interpolate(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return values[key] ?? "";
    });
  }

  function buildWhatsAppMessage(cartDetails, language) {
    const copy = getCopy(language);
    const total = getCartTotal(cartDetails);
    const lines = [
      "Kalaprasad Masala Order",
      "",
      copy.orderMessageIntro,
      ""
    ];

    cartDetails.forEach(function (item) {
      lines.push(
        item.name[language] + " (" + item.weight + ")",
        copy.orderMessageQuantity + ": " + item.quantity + " | " + formatCurrency(item.subtotal),
        ""
      );
    });

    lines.push(
      copy.orderMessageTotal + ": " + formatCurrency(total),
      "",
      copy.orderMessageClosing
    );

    return lines.join("\n");
  }

  function buildWhatsAppUrl(message) {
    return "https://wa.me/" + window.APP_CONFIG.whatsappPhone + "?text=" + encodeURIComponent(message);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // ===== RATING FUNCTIONS =====
  function getStoredRatings() {
    try {
      const rawRatings = localStorage.getItem(window.APP_CONFIG.ratingsStorageKey);
      const parsedRatings = rawRatings ? JSON.parse(rawRatings) : {};
      return parsedRatings;
    } catch (error) {
      console.warn("Unable to read ratings from localStorage.", error);
      return {};
    }
  }

  function saveRatings(ratings) {
    localStorage.setItem(window.APP_CONFIG.ratingsStorageKey, JSON.stringify(ratings));
  }

  function getProductRating(productId) {
    const ratings = getStoredRatings();
    const productRatings = ratings[productId] || [];
    
    if (productRatings.length === 0) {
      return { average: 0, count: 0 };
    }
    
    const sum = productRatings.reduce((total, rating) => total + rating, 0);
    const average = sum / productRatings.length;
    
    return {
      average: Math.round(average * 10) / 10,
      count: productRatings.length
    };
  }

  function addRating(productId, rating) {
    const ratings = getStoredRatings();
    if (!ratings[productId]) {
      ratings[productId] = [];
    }
    ratings[productId].push(rating);
    saveRatings(ratings);
    return getProductRating(productId);
  }

  return {
    addToCart: addToCart,
    buildWhatsAppMessage: buildWhatsAppMessage,
    buildWhatsAppUrl: buildWhatsAppUrl,
    escapeHtml: escapeHtml,
    findProduct: findProduct,
    formatCurrency: formatCurrency,
    getCartCount: getCartCount,
    getCartDetails: getCartDetails,
    getCartTotal: getCartTotal,
    getCopy: getCopy,
    getLanguage: getLanguage,
    getStoredCart: getStoredCart,
    interpolate: interpolate,
    removeCartItem: removeCartItem,
    saveCart: saveCart,
    setLanguage: setLanguage,
    updateCartItem: updateCartItem,
    // Rating functions
    getStoredRatings: getStoredRatings,
    getProductRating: getProductRating,
    addRating: addRating
  };
})();