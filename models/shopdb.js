const db = require('../util/database');

exports.getProducts = (catagory) => {
  return db.execute('SELECT * FROM product WHERE CATAGORY=?', [catagory]);
};

exports.buyNow = async (email, prodid) => {
  const empid = Math.floor(Math.random()*4 +1);
  let [item] = await db.execute('SELECT * FROM BUYNOW WHERE CUSTOMER=? AND PROD_ID=? AND CONFIRMED IS NULL', [email, prodid]);
  console.log(item);
  if(item.length > 0){
    return false;
  }
  const response = await db.execute('INSERT INTO BUYNOW (CUSTOMER, PROD_ID, DELIVERY_EMPLOYEE) VALUES(?,?,?)', [email, prodid, empid]);
  return true;
};

exports.addTOCart = async (email, prodid) => {
  prodid = parseInt(prodid);
  let [item] = await db.execute('SELECT * FROM CART WHERE CUS_EMAIL=? AND P_ID=?', [email, prodid]);
  if(item.length > 0){
    return false;
  }
  const cartid = Math.random().toString();
  const response = await db.execute('INSERT INTO CART VALUES(?,?,?,?)', [email, prodid, cartid, 1]);
  console.log(response);
  return true;
}