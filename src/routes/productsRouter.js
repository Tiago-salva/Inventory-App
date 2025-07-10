const { Router } = require("express");
const getAllProducts = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/", getAllProducts);

module.exports = productsRouter;
