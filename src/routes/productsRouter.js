const { Router } = require("express");
const {
  getAllProducts,
  getProduct,
  createProductGet,
  createProductPost,
  getProductsFromSearch,
} = require("../controllers/productsController");

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/product/:id", getProduct);
productsRouter.get("/new", createProductGet);
productsRouter.post("/new", createProductPost);
productsRouter.get("/search", getProductsFromSearch);

module.exports = productsRouter;
