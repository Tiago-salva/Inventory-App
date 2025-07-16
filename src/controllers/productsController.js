const db = require("../db/queries");

async function getAllProducts(req, res) {
  const products = await db.getAllFrom("products");
  res.render("products", {
    title: "All the products",
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
  res.render("products", {
    title: "All the products",
    products: allProducts,
  });
}

async function getFilteredProducts(req, res) {
  const selectedTypes = req.query.types;
  const selectedBrands = req.query.brands;

  const types = Array.isArray(selectedTypes)
    ? selectedTypes.map(Number)
    : [Number(selectedTypes)];

  const brands = Array.isArray(selectedBrands)
    ? selectedBrands.map(Number)
    : [Number(selectedBrands)];

  const filters = [
    { id: types, columnName: "type_clothes" },
    { id: brands, columnName: "brand" },
  ];
  console.log(filters[0].id.values());

  const columns = filters.filter(
    (f) => Number.isInteger(f.id[0]) && f.id.length > 0
  );
  console.log(columns);

  try {
    const allProducts = await db.getFilteredProducts(columns);

    if (allProducts.length === 0) {
      return res.send("No products match your filters.");
    }

    res.render("products", {
      title: "All Products",
      products: allProducts,
    });
  } catch (err) {
    console.error("Error fetching filtered products:", err);
    res.status(500).send("Internal Server Error");
  }
}

async function createProductGet(req, res) {
  res.render("newProduct", {
    title: "New product",
  });
}

async function createProductPost(req, res) {
  await db.insertProduct(req.body);
  res.redirect("/products");
}

async function editProductGet(req, res) {
  const id = parseInt(req.params.id);
  const product = await db.getProduct(id);
  res.render("editProduct", { title: "Edit product", product: product });
}

async function editProductPost(req, res) {
  const id = parseInt(req.params.id);
  await db.updateProduct(req.body, id);
  res.redirect("/products");
}

module.exports = {
  getAllProducts,
  getProduct,
  getProductsFromSearch,
  getFilteredProducts,
  createProductGet,
  createProductPost,
  editProductGet,
  editProductPost,
};
