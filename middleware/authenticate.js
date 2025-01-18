const jwt = require('jsonwebtoken');
const USER = require('../models/UserSchema');
require("dotenv").config();
const secretKey = process.env.KEY;


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.Amazonweb;
        if (!token) {
            console.error("No token found in cookies");
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        console.log("Token from Cookies:", token);

        const verifyToken = jwt.verify(token, secretKey);
        console.log("Decoded Token Payload:", verifyToken);

        const rootUser = await USER.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            console.error("No user found with the given token");
            throw new Error("User not found");
        }

        req.token = token;
        req.userID = rootUser._id;
        req.rootUser = rootUser;

        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};


module.exports = authenticate;
