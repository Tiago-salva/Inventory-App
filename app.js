const express = require("express");
const app = express();
const path = require("path");
const productsRouter = require("./src/routes/productsRouter");
const categoriesRouter = require("./src/routes/categoriesRouter");
const brandsRouter = require("./src/routes/brandsRouter");
const loadFilters = require("./src/middleware/loadFilters");

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { title: "Homepage" });
});

app.use(loadFilters);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/brands", brandsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port: ${PORT}`);
});
