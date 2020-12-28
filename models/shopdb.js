const db = require('../util/database');

exports.getProducts = (catagory) => {
  return db.execute('SELECT * FROM product WHERE CATAGORY=?', [catagory]);
}