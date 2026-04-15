function generateStrongPassword(len = 12) {
  const allowedPasswordCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let strongPassword;

  do {
    strongPassword = Array.from({ length: len }, () => {
      const index = Math.floor(Math.random() * allowedPasswordCharacters.length);
      return allowedPasswordCharacters.charAt(index);
    }).join('');
  } while (!isStrongPassword(strongPassword));

  return strongPassword;
}


function isStrongPassword(password) {
 if (password.length < 8) {
    return false;
 }

 const isPasswordStrong = /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+]/.test(password);
 return isPasswordStrong;
}

module.exports = {
    generateStrongPassword,
    isStrongPassword
}