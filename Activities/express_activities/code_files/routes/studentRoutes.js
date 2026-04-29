// Student Routes File

const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
    const student = {
        name: "Pranali",
        course: "AIML",
        subject: "Express.js"
    };

    res.render("index", { student });
});

module.exports = router;