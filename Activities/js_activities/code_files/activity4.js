// Activity 4: DOM using jQuery

// Wait until page loads
$(document).ready(function () {

    // When any image is clicked
    $("img").click(function () {

        // Hide the clicked image
        $(this).hide();

    });

});