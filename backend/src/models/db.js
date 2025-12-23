const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection failed", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    aadhaar_encrypted TEXT
  )
`);

module.exports = db;
