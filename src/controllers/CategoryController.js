const categoryService = require("../service/Category");
 
exports.getAllCategory = async (req, res) => {
  try {
    const category = await categoryService.getAllCategoryService();
    res.json({ data: category, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 