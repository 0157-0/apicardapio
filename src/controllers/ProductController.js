const productService = require("../service/Product");
 
exports.getAllProduct = async (req, res) => {
  try {
    const product = await productService.getAllProductService();
    res.json({ data: product, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProductService(req.body);
    res.json({ data: product, status: "Produto criada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductByIdService(req.params.id);
    res.send(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProductService(req.params.id, req.body);
    res.json({ data: product, status: "Produto atualizada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProductService(req.params.id);
    res.json({ data: product, status: "Produto deletada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};