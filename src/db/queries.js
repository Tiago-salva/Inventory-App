const pool = require("../db/pool");

async function getAllProducts() {
  const { rows } = await pool.query(`SELECT * FROM products`);
  return rows;
}

async function getProduct(id) {
  const { rows } = await pool.query(`SELECT * FROM products WHERE id = $1`, [
    id,
  ]);
  return rows[0];
}

async function getAllTypeClothes() {
  const { rows } = await pool.query(`SELECT * FROM type_clothes`);
  return rows;
}

async function getAllBrands() {
  const { rows } = await pool.query(`SELECT * FROM brands`);
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

module.exports = {
  getAllProducts,
  getProduct,
  getAllTypeClothes,
  getAllBrands,
  insertProduct,
};
