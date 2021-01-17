const db = require('../util/database');
const loginHandler = require('../util/loginHandler');

exports.registerUser = async (name, email, password, phone) => {
  let [data] = await db.execute('SELECT * FROM customer WHERE email=?', [email]);
  
  if(data.length > 0){
    return -1;
  }

  await db.execute('INSERT INTO customer(email, name, phone) VALUES(?,?,?)', [email, name, phone]);
  await db.execute('INSERT INTO login VALUES(?,?)', [email, password]);
}

exports.updateUserAddress = (email, state, city, pincode, houseno) => {
  db.execute(`
    UPDATE CUSTOMER 
    SET STATE=?, CITY=?, PINCODE=?, HOUSE_NO=?
    WHERE EMAIL=?
    `, [state, city, pincode, houseno, email]);
}

exports.validateLogin = async (email, password) => {
  const actualpassword = await db.execute('SELECT PASSWORD FROM LOGIN WHERE CUSTOMER_EMAIL=?', [email]);

  if(actualpassword[0].length === 0){
    return 'invalid';
  }

  const pdb = actualpassword[0][0].PASSWORD;
  if(password == pdb){
    return true;
  } else {
    return false;
  }
}

