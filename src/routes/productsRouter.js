const { Router } = require("express");
const {
  getAllProducts,
  getProduct,
  createProductGet,
  createProductPost,
  getProductsFromSearch,
  getFilteredProducts,
} = require("../controllers/productsController");

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/product/:id", getProduct);
productsRouter.get("/new", createProductGet);
productsRouter.post("/new", createProductPost);
productsRouter.get("/search", getProductsFromSearch);
productsRouter.get("/filter", getFilteredProducts);

module.exports = productsRouter;
