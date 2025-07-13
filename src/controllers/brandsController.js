const db = require("../db/queries");

async function getAllBrands(req, res) {
  const allBrands = await db.getAllFrom("brands");
  res.render("brands", { allBrands: allBrands });
}

async function getAllProductsByBrand(req, res) {
  const id = parseInt(req.params.id);
  const allProducts = await db.getAllProductsBy("brand", id);
  if (allProducts.length < 1) return res.send("There are no products");
  res.render("products", {
    title: `All of ${allProducts[0].brand_name}`,
    products: allProducts,
  });
}

async function createBrandGet(req, res) {
  res.render("form", { action: "brands", name: "brand" });
}

async function createBrandPost(req, res) {
  const brandName = req.body.brand;
  await db.insertIn("brands", brandName);
  res.redirect("/brands");
}

module.exports = {
  getAllBrands,
  getAllProductsByBrand,
  createBrandGet,
  createBrandPost,
};
