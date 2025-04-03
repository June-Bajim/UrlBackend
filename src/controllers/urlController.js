 
const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "Long URL is required" });
  }

  try {
    const shortUrl = nanoid(6); // Generate a unique 6-character short URL
    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save();
    
    
    res.json({ shortUrl });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    url.clicks += 1; // Track clicks
    await url.save();

    res.redirect(url.longUrl);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { shortenUrl, redirectUrl };
