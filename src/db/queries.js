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

module.exports = { getAllProducts, getProduct };
