const { Router } = require("express");
const {
  getAllProductsByBrand,
  getAllBrands,
} = require("../controllers/brandsController");
const brandsRouter = Router();

brandsRouter.get("/", getAllBrands);
brandsRouter.get("/:id", getAllProductsByBrand);

module.exports = brandsRouter;
