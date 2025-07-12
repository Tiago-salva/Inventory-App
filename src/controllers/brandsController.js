const db = require("../db/queries");

async function getAllBrands(req, res) {
  const allBrands = await db.getAllFrom("brands");
  res.render("brands", { allBrands: allBrands });
}

async function getAllProductsByBrand(req, res) {
  const id = parseInt(req.params.id);
  const allProducts = await db.getAllProductsBy("brand", id);
  res.render("products", {
    title: `All of ${allProducts[0].brand_name}`,
    products: allProducts,
  });
}

module.exports = {
  getAllBrands,
  getAllProductsByBrand,
};
