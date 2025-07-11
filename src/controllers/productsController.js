const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllProducts();
  res.render("products", { products: products });
}

async function getProduct(req, res) {
  const id = req.params.id;
  const product = await db.getProduct(id);
  console.log(product);
  res.render("productDetail", { product: product });
}

module.exports = { getAllProducts, getProduct };
