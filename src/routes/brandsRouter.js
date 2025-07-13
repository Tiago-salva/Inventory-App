const { Router } = require("express");
const {
  getAllProductsByBrand,
  getAllBrands,
  createBrandGet,
  createBrandPost,
} = require("../controllers/brandsController");
const brandsRouter = Router();

brandsRouter.get("/", getAllBrands);
brandsRouter.get("/new", createBrandGet);
brandsRouter.post("/new", createBrandPost);
brandsRouter.get("/:id", getAllProductsByBrand);

module.exports = brandsRouter;
