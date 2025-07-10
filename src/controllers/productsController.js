const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllProducts();
  res.render("products", { products: products });
}

module.exports = getAllProducts;
