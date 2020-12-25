const db = require('../util/database');

exports.registerUser = async (name, email, password, phone) => {
  let [data] = await db.execute('SELECT * FROM customer WHERE email=?', [email]);
  
  if(data.length > 0){
    return;
  }

  await db.execute('INSERT INTO customer(email, name, phone) VALUES(?,?,?)', [email, name, phone]);
  await db.execute('INSERT INTO login VALUES(?,?)', [email, password]);
}


