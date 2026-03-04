// Make sure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const orderButton = document.querySelector(".shop-btn");

    if (!orderButton) {
        console.log("Button not found");
        return;
    }

    const phoneNumber = "917066395554";
    const message = "Hello, I want to order 1 packet of Ghati Masala.";
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        "https://api.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodedMessage;

    console.log("Final URL:", whatsappURL);

    orderButton.addEventListener("click", function () {
        window.location.href = whatsappURL;
    });

});