 
const express = require("express");
const { shortenUrl, redirectUrl } = require("../controllers/urlController");

const router = express.Router();

router.post("/shorten", shortenUrl); // Shorten URL
router.get("/:shortUrl", redirectUrl); // Redirect to original URL

module.exports = router;
