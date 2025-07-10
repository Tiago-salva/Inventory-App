const { Client } = require("pg");
const fs = require("fs");
require("dotenv").config();

async function runSQLFromFile(filePath, client) {
  const sql = fs.readFileSync(filePath, "utf8");
  await client.query(sql);
}

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();

    await runSQLFromFile("./src/db/schema.sql", client);

    await runSQLFromFile("./src/db/populate.sql", client);
  } catch (err) {
    console.error("Error trying to start the db", err);
  } finally {
    await client.end();
  }
}

main();
