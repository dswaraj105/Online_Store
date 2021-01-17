const db = require('../util/database');

exports.getCartItems =  (email) => {
  return db.execute(`
    SELECT *
    FROM PRODUCT, CART
    WHERE CUS_EMAIL=? AND P_ID=PRODUCT_ID
  `,[email]);
};

exports.deleteFromCart = (cartid) => {
  return db.execute('DELETE FROM CART WHERE CART_ID=?', [cartid]);
}

exports.getBuyNowItems = (email) => {
  return db.execute(`
    SELECT * 
    FROM BUYNOW, PRODUCT
    WHERE CUSTOMER=? AND CONFIRMED IS NULL AND PROD_ID=PRODUCT_ID
  `, [email]);
};

exports.deleteBuyNowItem = (purchaseId) => {
  return db.execute('DELETE FROM BUYNOW WHERE PURCHASE_ID=?', [purchaseId]);
}

exports.confirmOrder = (purchaseId, prodID) => {
  const date = new Date();

  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();

  const today = y+'-'+m+'-'+d;

  db.execute('update product set stock=stock-1 where product_id=? AND STOCK>0', [prodID]);

  return db.execute('UPDATE BUYNOW SET CONFIRMED=1, DATE=? WHERE PURCHASE_ID=?', [today, purchaseId]);
}

exports.getConfirmedOders = (email) => {
  return db.execute(`
    SELECT * 
    FROM BUYNOW, PRODUCT
    WHERE CUSTOMER=? AND CONFIRMED=1 AND PROD_ID=PRODUCT_ID
  `, [email]); 
}