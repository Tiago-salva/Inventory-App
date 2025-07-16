const pool = require("../db/pool");

async function getAllFrom(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table}`);
  return rows;
}

async function getAllProductsBy(filterType, id) {
  let column, table;

  if (filterType === "type") {
    column = "type_clothes_id";
    table = "type_clothes";
  } else if (filterType === "brand") {
    column = "brand_id";
    table = "brands";
  } else {
    throw new Error("Invalid filter type");
  }

  const { rows } = await pool.query(
    `SELECT products.*, ${filterType}_name
     FROM products
     JOIN ${table}
     ON products.${column} = ${table}.id
     WHERE ${table}.id = $1`,
    [id]
  );
  return rows;
}

async function getProduct(id) {
  const { rows } = await pool.query(
    `SELECT products.*, type_clothes.type_name, brands.brand_name FROM products
    JOIN brands ON products.brand_id = brands.id
    JOIN type_clothes ON products.type_clothes_id = type_clothes.id
    WHERE products.id = $1`,
    [id]
  );
  return rows[0];
}

async function getProductsFromSearch(query) {
  const { rows } = await pool.query(
    `SELECT * FROM products WHERE product_name ILIKE $1`,
    [`%${query}%`]
  );
  return rows;
}

async function insertProduct(product) {
  await pool.query(
    `INSERT INTO products (type_clothes_id, brand_id, product_name, product_description, price, image_url, quantity)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      parseInt(product.typeClothes),
      parseInt(product.brand),
      product.productName,
      product.description,
      product.price,
      product.imgUrl,
      product.quantity,
    ]
  );
}

async function insertIn(table, brand) {
  const column = table === "brands" ? "brand" : "type";
  await pool.query(`INSERT INTO ${table} (${column}_name) VALUES ($1)`, [
    brand,
  ]);
}

async function getFilteredProducts(columns, order) {
  if (columns.length > 1) {
    const { rows } = await pool.query(
      `
      SELECT * FROM products
      WHERE type_clothes_id = ANY($1::int[])
      AND brand_id = ANY($2::int[])
      ORDER BY price $3
    `,
      [columns[0].id, columns[1].id, order]
    );
    return rows;
  } else if (columns.length === 1) {
    const { rows } = await pool.query(
      `
      SELECT * FROM products
      WHERE ${columns[0].columnName}_id = ANY($1::int[])
      ORDER BY price ${order}
    `,
      [columns[0].id]
    );
    return rows;
  } else {
    const { rows } = await pool.query(
      `SELECT * FROM products ORDER BY price ${order}`
    );
    return rows;
  }
}

async function updateProduct(product, id) {
  await pool.query(
    `UPDATE products
    SET type_clothes_id = $1,
    brand_id = $2,
    product_name = $3,
    product_description = $4,
    price = $5,
    image_url = $6,
    quantity = $7
    WHERE id = $8`,
    [
      parseInt(product.typeClothes),
      parseInt(product.brand),
      product.productName,
      product.description,
      product.price,
      product.imgUrl,
      product.quantity,
      id,
    ]
  );
}

module.exports = {
  getAllFrom,
  getAllProductsBy,
  getProduct,
  getProductsFromSearch,
  insertProduct,
  insertIn,
  getFilteredProducts,
  updateProduct,
};
