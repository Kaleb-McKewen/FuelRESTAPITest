const connection = require("./dbConnection.js");

let db = {
    getLatestFuel: async() =>{
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM fuelprice ORDER BY time DESC LIMIT 1';
            connection.get(sql, (err, rows) => {
              if (err) reject(err);
              resolve(rows);
            });
          });
    },
    getAllFuel: async() =>{
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM fuelprice';
            connection.all(sql, (err, rows) => {
              if (err) reject(err);
              resolve(rows);
            });
          });
    },
}

module.exports = db;