const express = require("express");
const app = express();
const path = require("path");
const productsRouter = require("./src/routes/productsRouter");

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { title: "Homepage" });
});

app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port: ${PORT}`);
});
