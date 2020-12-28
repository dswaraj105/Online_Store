const userData = {
  loggedin : false,
  userEmail : ''
}

exports.login = (email) => {
  userData.loggedin = true;
  userData.userEmail = email;
  console.log('the user data loggin in',userData);
}

exports.logout = () => {
  userData.loggedin = false;
  userData.userEmail = '';
  console.log('logout' , userData);
}

exports.getLoginState = () => {
  return userData.loggedin;
}

exports.getUserEmail = () => {
  if(userData.loggedin){
    return userData.userEmail;
  } else {
    return false;
  }
}