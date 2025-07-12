const { Router } = require("express");
const {
  getAllCategories,
  getAllProductsByType,
} = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", getAllProductsByType);

module.exports = categoriesRouter;
