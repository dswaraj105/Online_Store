const db = require('../util/database');

exports.registerUser = async (name, email, password) => {
  let [data] = await db.execute('SELECT * FROM customer WHERE email=?', [email]);
  if(data.length > 0){
    return false;
  }
  await db.execute('INSERT INTO customer(email, name) VALUES(?,?)', [email, name]);
  await db.execute('INSERT INTO login VALUES(?,?)', [email, password]);
  return true;
}


