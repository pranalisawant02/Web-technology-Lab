KALAPRASAD Ghati Masala Website
Project Overview

This project is a simple e-commerce style website built for the home-made spice brand KALAPRASAD Ghati Masala.
The website allows users to view available masalas, add them to a cart, and place orders directly through WhatsApp.

The goal of this project is to build a lightweight product ordering system using pure HTML, CSS, and JavaScript without any frameworks.

Features Implemented
1. Product Display

Products are dynamically generated using JavaScript.

Each product card shows:

Product Name

Weight

Price

Add to Cart button

2. Language Toggle

Users can switch between:

English

Marathi

The hero section and product names update dynamically based on the selected language.

3. Add to Cart System

When the Add to Cart button is clicked:

The product is stored in a cart array.

The cart is saved using localStorage.

This ensures that cart items remain even after refreshing the page.

Example cart structure:

[
  {
    name_en: "Ghati Masala",
    name_mr: "घाटी मसाला",
    price: 120,
    weight: "500g"
  }
]
4. Cart Page

The cart.html page displays:

Selected products

Individual product prices

Total cart price

The cart page reads product data from localStorage.

5. WhatsApp Order Integration

Users can place orders directly via WhatsApp.

When the Order on WhatsApp button is clicked:

The cart items are converted into a message.

A WhatsApp link is generated.

WhatsApp opens with the pre-filled order message.

Example message:

Hello, I want to order:

Ghati Masala - ₹120
Kala Masala - ₹150

Total: ₹270
Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

LocalStorage API

WhatsApp API (wa.me)

Project Structure
project-folder
│
├── index.html
├── cart.html
│
├── style.css
│
├── main.js
├── cart.js
│
└── README.md
How to Run the Project

Download or clone the project.

Open the project folder.

Run index.html in your browser.

No server or installation is required.

Future Improvements

Planned improvements include:

Remove item from cart

Product quantity control

Cart item counter in navbar

Product images

Marathi order message support

Improved UI styling

Mobile responsive design

Author

Developed as part of a learning project to build a functional product ordering website using JavaScript fundamentals.
