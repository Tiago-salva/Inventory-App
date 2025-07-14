const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllFrom("products");
  const allCategories = await db.getAllFrom("type_clothes");
  res.render("products", {
    title: "All the products",
    categories: allCategories,
    products: products,
  });
}

async function getProduct(req, res) {
  const id = req.params.id;
  const product = await db.getProduct(id);
  res.render("productDetail", { product: product });
}

async function getProductsFromSearch(req, res) {
  const { query } = req.query;
  const allProducts = await db.getProductsFromSearch(query);
  const allCategories = await db.getAllFrom("type_clothes");
  res.render("products", {
    title: "All the products",
    categories: allCategories,
    products: allProducts,
  });
}

async function getFilterProducts(req, res) {
  const selectedTypes = req.query.types;
  const types = Array.isArray(selectedTypes)
    ? selectedTypes.map(Number)
    : [Number(selectedTypes)];
  const allProducts = await db.getFilterProducts(types);
  const allCategories = await db.getAllFrom("type_clothes");
  res.render("products", {
    title: "All products",
    categories: allCategories,
    products: allProducts,
  });
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
  getProductsFromSearch,
  getFilterProducts,
  createProductGet,
  createProductPost,
};
