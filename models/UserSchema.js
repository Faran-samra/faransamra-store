const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY; // Ensure your secret key is set correctly in the environment

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },repassword: {
        type: String,
        required: true,
        minLength: 6,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    carts: Array,
});

// Hash password before saving
// UserSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.repassword = await bcrypt.hash(this.password, 12);
//     }
//     next();
// });

// Method to generate a token
UserSchema.methods.generateAuthToken = async function () {
    try {
        if (!secretKey) throw new Error("JWT secret key not found");

        let token = jwt.sign({ _id: this._id.toString() }, secretKey, { expiresIn: "7d" });
        this.tokens = this.tokens.concat({ token }); // Save token in DB
        await this.save();
        return token;
    } catch (error) {
        console.error("Error generating auth token:", error.message);
        throw error;
    }
};

// Method to add items to the cart
UserSchema.methods.addcartdata = async function (cart) {
    try {
        const existingItem = this.carts.find(item => item.id === cart.id);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if it exists
        } else {
            this.carts.push({ ...cart, quantity: 1 }); // Add new item
        }

        await this.save();
        return this.carts;
    } catch (error) {
        console.error("Error adding to cart:", error.message);
        throw error;
    }
};


const USER = mongoose.model("USER", UserSchema);
module.exports = USER;
