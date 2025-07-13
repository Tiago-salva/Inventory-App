const { Router } = require("express");
const {
  getAllCategories,
  getAllProductsByType,
  createCategoryGet,
  createCategoryPost,
} = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/new", createCategoryGet);
categoriesRouter.post("/new", createCategoryPost);
categoriesRouter.get("/:id", getAllProductsByType);

module.exports = categoriesRouter;
