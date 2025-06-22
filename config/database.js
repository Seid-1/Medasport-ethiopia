const mysql = require("mysql2/promise");

async function initDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@#?Seidnur12345",
    database: "medasport",
  });
  return connection;
}

module.exports = initDB;
