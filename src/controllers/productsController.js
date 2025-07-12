const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllFrom("products");
  res.render("products", { title: "All the products", products: products });
}

async function getProduct(req, res) {
  const id = req.params.id;
  const product = await db.getProduct(id);
  res.render("productDetail", { product: product });
}

async function createProductGet(req, res) {
  const allTypeClothes = await db.getAllFrom("type_clothes");
  const allBrands = await db.getAllFrom("brands");
  res.render("newProduct", {
    allTypeClothes: allTypeClothes,
    allBrands: allBrands,
  });
}

async function createProductPost(req, res) {
  await db.insertProduct(req.body);
  res.redirect("/products");
}

module.exports = {
  getAllProducts,
  getProduct,
  createProductGet,
  createProductPost,
};
