require("dotenv").config();
console.log("SECRET_KEY loaded:", process.env.KEY); 
require("./DB/Connection"); 
require('./DefaultData');
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router"); 
const DefaultData = require("./DefaultData");
const app = express();
const PORT = process.env.PORT || 8005; 

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);
// Routes
app.use(router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist")); // Serve static files from the dist folder
}


// Start server
app.listen(PORT, () => { 
  console.log(`Server is listening on port ${PORT}`);
});
