const db = require("../db/queries");

async function getAllCategories(req, res) {
  const allCategories = await db.getAllFrom("type_clothes");
  res.render("categories", { allCategories: allCategories });
}

async function getAllProductsByType(req, res) {
  const id = parseInt(req.params.id);
  const allProducts = await db.getAllProductsBy("type", id);
  if (allProducts.length < 1) return res.send("There are no products");
  res.render("products", {
    title: `All the ${allProducts[0].type_name}`,
    products: allProducts,
  });
}

async function createCategoryGet(req, res) {
  res.render("form", { action: "categories", name: "category" });
}

async function createCategoryPost(req, res) {
  const categoryName = req.body.category;
  await db.insertIn("type_clothes", categoryName);
  res.redirect("/categories");
}

module.exports = {
  getAllCategories,
  getAllProductsByType,
  createCategoryGet,
  createCategoryPost,
};
