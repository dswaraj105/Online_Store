const db = require('../util/database');

exports.getCartItems =  (email) => {
  return db.execute(`
    SELECT *
    FROM PRODUCT, CART
    WHERE CUS_EMAIL=? AND P_ID=PRODUCT_ID
  `,[email]);
}

exports.getBuyNowItems = (email) => {
  return db.execute(`
    SELECT * 
    FROM BUYNOW, PRODUCT
    WHERE CUSTOMER=? AND PROD_ID=PRODUCT_ID
  `, [email]);
}

