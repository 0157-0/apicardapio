const ProductModel = require("../models/Product");
 
exports.getAllProductService = async () => {
  return await ProductModel.find();
};
 
exports.createProductService = async (product) => {
  return await ProductModel.create(product);
};
exports.getProductByIdService = async (id) => {
  return await ProductModel.findById(id);
};
 
exports.updateProductService = async (id, product) => {
  return await ProductModel.findByIdAndUpdate(id, product);
};
 
exports.deleteProductService = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};