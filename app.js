const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.render("home", { title: "Homepage" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port: ${PORT}`);
});
