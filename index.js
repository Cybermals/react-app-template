/*
 * Express.js Development Server
 */

// Create express app
const express = require("express");
const app = express();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = parseInt(process.env.PORT || "8000");

// Configure middleware
app.use(express.static("./public"));

// Import path module
const path = require("path");

// Serve React app for all unknown routes
app.all("*", (req, res) => {
    // Send index page
    const options = {
        root: path.join(__dirname, "public"),
        dotfiles: "deny"
    };
    res.sendFile("index.html", options);
});

// Listen for incoming requests
app.listen(PORT, HOST, () => {
    console.log(`Listening at 'http://${HOST}:${PORT}/'...`);
});
