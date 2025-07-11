const { Router } = require("express");
const {
  getAllProducts,
  getProduct,
} = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/product/:id", getProduct);

module.exports = productsRouter;
