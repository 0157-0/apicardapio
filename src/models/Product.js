const mongoose = require("../database");
// tabela
const ProductScheme = new mongoose.Schema({
  categories: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductScheme);

module.exports = Product;
