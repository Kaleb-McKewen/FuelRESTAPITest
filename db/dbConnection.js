const sqlite3 = require("sqlite3");
require('dotenv').config();

const fileLocation=process.env.DB_PATH||"./db/database.db"; //change to .env

const connection = new sqlite3.Database(fileLocation, sqlite3.OPEN_READONLY);

module.exports = connection;