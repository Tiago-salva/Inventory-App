const db = require("../db/queries");

async function getAllCategories(req, res) {
  const allCategories = await db.getAllFrom("type_clothes");
  res.render("categories", { allCategories: allCategories });
}

async function getAllProductsByType(req, res) {
  const id = parseInt(req.params.id);
  const allProducts = await db.getAllProductsBy("type", id);
  console.log(allProducts);
  res.render("products", {
    title: `All the ${allProducts[0].type_name}`,
    products: allProducts,
  });
}

module.exports = {
  getAllCategories,
  getAllProductsByType,
};
