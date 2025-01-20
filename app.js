require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("./DB/Connection");
require("./DefaultData");

const router = require("./router/router");
const app = express();
const PORT = process.env.PORT || 8005;

// Middleware
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: process.env.NODE_ENV === "production"
        ? "https://your-app.herokuapp.com" // Update with your Heroku app URL
        : "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use(router);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 

}

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
