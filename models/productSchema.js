const mongoose = require('mongoose');

// Define the Subcategory schema
const subcategorySchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  reviews: { type: Number, required: true }
});

// Define the Products schema
const productsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  title: {
    shortTitle: { type: String, required: true },
    longTitle: { type: String, required: true }
  },
  description: { type: String, required: true },
  tagline: { type: String, required: true },
  subcategories: [subcategorySchema] // Embed subcategories
});

// Create a model for the 'Product' collection
const Products = mongoose.model('product', productsSchema);

module.exports = Products;
