require("dotenv").config();
console.log("SECRET_KEY loaded:", process.env.KEY); // Debugging
require("./DB/Connection"); // Connect to the database
require('./DefaultData');
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router"); // Import your routes
const DefaultData = require("./DefaultData");
const app = express();
const port = process.env.PORT || 8005;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
// Routes
app.use(router);
if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
