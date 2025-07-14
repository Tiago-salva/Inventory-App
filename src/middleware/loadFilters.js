const db = require("../db/queries");

async function loadFilters(req, res, next) {
  const [types, brands] = await Promise.all([
    db.getAllFrom("type_clothes"),
    db.getAllFrom("brands"),
  ]);
  res.locals.categories = types;
  res.locals.brands = brands;
  next();
}

module.exports = loadFilters;
