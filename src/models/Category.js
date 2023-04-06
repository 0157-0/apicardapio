const mongoose = require("../database");
// tabela
const CategoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String || null,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", CategoryScheme);

module.exports = Category;
