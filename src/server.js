 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
