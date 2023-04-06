const CategoryModel = require("../models/Category");
 
exports.getAllCategoryService = async () => {
  return await CategoryModel.find();
};
 