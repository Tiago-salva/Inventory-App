const pool = require("../db/pool");

async function getAllProducts() {
  const { rows } = await pool.query(`SELECT * FROM products`);
  return rows;
}

module.exports = { getAllProducts };
